import React, { useEffect, useState } from 'react'
import { ApolloClient, InMemoryCache, gql } from "@apollo/client"
import Layout from '../../components/BlogLayout';
import styles from '../../styles/Blog.module.css'
import { format, register } from 'timeago.js';
import { LOAD_POST } from '../../Graphql/Queries';

export default function blog(props) {


    register('es_ES', (number, index, total_sec) => [
        ['justo ahora', 'ahora mismo'],
        ['hace %s segundos', 'en %s segundos'],
        ['hace 1 minuto', 'en 1 minuto'],
        ['hace %s minutos', 'en %s minutos'],
        ['hace 1 hora', 'en 1 hora'],
        ['hace %s horas', 'in %s horas'],
        ['hace 1 dia', 'en 1 dia'],
        ['hace %s dias', 'en %s dias'],
        ['hace 1 semana', 'en 1 semana'],
        ['hace %s semanas', 'en %s semanas'],
        ['1 mes', 'en 1 mes'],
        ['hace %s meses', 'en %s meses'],
        ['hace 1 año', 'en 1 año'],
        ['hace %s años', 'en %s años']
    ][index]);


    const timeago = timestamp => format(timestamp, 'es_ES');

    const { post } = props;


    return (
        <Layout logo="../logo.svg">
            <div className={styles.container}>
                <div className={styles.aside}>
                    <h2>Buscas una PC?</h2>
                    <p>Arma tu computadora gamer o workstation con nosotros.</p>
                    <button>Arma tu PC</button>

                    <h3>Comparte este articulo</h3>
                </div>
                <div className={styles.centercontent}>
                    <h2>{post[0].title}</h2>
                    <div className={styles.contentdata}>
                        <span className={styles.blogcategory}> <i className='blue bx bxs-circle'></i> {post[0].category}</span>
                        <span className={styles.bloguser}> 
                            <div className={styles.blogpicture}>
                                <img src={`.${post[0].userphoto}`} alt={post[0].name} />
                            </div>
                            <h4 className={styles.blogusername}>{post[0].username}</h4>
                        </span>
                        <span><i className='bx bx-calendar-event'></i> {timeago(post[0].createdAt)} </span>
                    </div>
                    <picture>
                        <img src={post[0].image ? post[0].image : `../bg.png`} alt={post[0].title} />
                    </picture>
                </div>
                <div></div>
            </div>

            <div className="container" dangerouslySetInnerHTML={{ __html: post[0].sanitizedHtml }} ></div>

            <div className="newsletter">
                <h2><i className='bx bx-paper-plane'></i> Suscribete</h2>
                <p>Para no perderte ninguna novedad sobre gaming, hardware y tecnologia</p>

                <div className="form-group-duo">
                    <input type="email" name="" id="" placeholder="Correo electronico" />
                    <input type="text" placeholder="Nombre" />
                </div>
                <button>Suscribete</button>
            </div>

        </Layout>
    )
}

export async function getServerSideProps(context) {
    const { params } = context;
    const { slug } = params;

    const client = new ApolloClient({
        uri: "https://rveapiql.herokuapp.com/",
        cache: new InMemoryCache()
    })

    const { data } = await client.query({
        query: LOAD_POST, variables: { slug: slug }
    })

    return {
        props: {
            post: data.getPost
        }
    }
}
