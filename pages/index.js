/* eslint-disable @next/next/no-img-element */
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import card from '../styles/Card.module.css'
import data from '../utils/data.js'
import { useState } from 'react'

export default function Home({computers}) {
  
  const [type, setType] = useState('gamer');


  return (
    <Layout>
      <div className="container">
        <div className='center'>
          {/* <h2>PC GAMER SLASH</h2> */}
          <p>Super. Mega. Rapido</p>
          {/* <a href="">Mas informacion</a> */}
          <div className="centerImg">
            <img src="./images/pchero2.png" alt="" width='100%'/>
          </div>
        </div>
        <h2>Potenciar la mejor tanto en el trabajo como en el juego.</h2>

        <div className={styles.buttons}>
          <button onClick={()=> setType('notebooks')} className={type == 'notebooks'? styles.active : ''}>Notebooks</button>
          <button onClick={()=> setType('gamer')} className={type == 'gamer'? styles.active : ''}>PC Gamer</button>
          <button onClick={()=> setType('workstation')} className={type == 'workstation'? styles.active : ''}>WorkStations</button>
        </div>

        <div className={styles.grid}>
          {type === 'workstation'? 
          <>
          {data.workstations.map((computer) => (
            <div className={card.card} key={computer.id}>
              <div >
                <img src={computer.image} alt="" />
              </div>
              <div>
                <div className={card.header}>
                  <h2>{computer.name}</h2>
                  <p>{computer.price}</p>
                </div>
                <ul>
                  <li><img className={styles.icon} src="./images/icons/cpu.png" alt="" /> {computer.cpu}</li>
                  <li><img className={styles.icon} src="./images/icons/motherboard.png" alt="" /> {computer.motherboard}</li>
                  <li><img className={styles.icon} src="./images/icons/ram.png" alt="" /> {computer.ram}</li>
                  <li><img className={styles.icon} src="./images/icons/ssd-drive.png" alt="" /> {computer.ssd}</li>
                  <li><img className={styles.icon} src="./images/icons/hdd.png" alt="" /> {computer.hdd}</li>
                  <li><img className={styles.icon} src="./images/icons/gpu.png" alt="" /> {computer.gpu}</li>
                </ul>
                <button className={card.button}>Anadir al carrito</button>    
              </div>
            </div>
          ))}
          </>
          : type === 'gamer'?
          <>
          {computers.map((computer) => (
            <div className={card.card} key={computer._id}>
              <Link href={`/computer/${computer._id}`} passHref>
                <a>

              <div >
                <img src={computer.image} alt={computer.name} />
              </div>
              <div>
                <div className={card.header}>
                  <h2>{computer.name}</h2>
                  <p>{computer.price}</p>
                </div>
                <ul>
                {computer.specs.map((spec) => (
                  <li key={spec._id}><img className={styles.icon} src="/images/icons/cpu.png" alt="" /> {spec.name}</li>  
                  ))}
                </ul>
                <button className={card.button}>Anadir al carrito</button>    
              </div>
                </a>
            </Link>
            </div>
          ))}
          </>
          :
          <>
          {data.notebooks.map((computer) => (
            <div className={card.card} key={computer.id}>
              <div >
                <img src={computer.image} alt="" />
              </div>
              <div>
                <div className={card.header}>
                  <h2>{computer.name}</h2>
                  <p>{computer.price}</p>
                </div>
                <ul>
                  <li><img className={styles.icon} src="./images/icons/cpu.png" alt="" /> {computer.cpu}</li>
                  <li><img className={styles.icon} src="./images/icons/motherboard.png" alt="" /> {computer.motherboard}</li>
                  <li><img className={styles.icon} src="./images/icons/ram.png" alt="" /> {computer.ram}</li>
                  <li><img className={styles.icon} src="./images/icons/ssd-drive.png" alt="" /> {computer.ssd}</li>
                  <li><img className={styles.icon} src="./images/icons/hdd.png" alt="" /> {computer.hdd}</li>
                  <li><img className={styles.icon} src="./images/icons/gpu.png" alt="" /> {computer.gpu}</li>
                </ul>
                <button className={card.button}>Anadir al carrito</button>    
              </div>
            </div>
          ))}
          </>
        }
        </div>
        <div className={styles.warranty}>
            <div className={styles.item}>
              <img src="./images/icons/notes.svg" alt="" />
              <h2>18 Meses de Garantia</h2>
              <p>Ofrecemos una garantía de hasta 18 meses para mano de obra y hasta 23 meses para reemplazo de piezas.</p>
            </div>
            <div className={styles.item}>
              <img src="./images/icons/diamond.svg" alt="" />
              <h2>Soporte de Por Vida</h2>
              <p>Nuestro personal de soporte técnico está altamente capacitado en marcos de aprendizaje profundo</p>
            </div>
        </div>
        {/* <Grid container spacing={3}>
          {data.computers.map((computer) => (
            <Grid item md={4} key={computer.name}>
              <Card>
                <CardActionArea>
                  <CardMedia component="img" image={computer.image} title={computer.name}>
                  </CardMedia>
                  <CardContent>
                    <Typography>
                      {computer.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Typography>
                    ${computer.price}
                  </Typography>
                  <Button size="small" color="primary">
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid> */}
      </div>
    </Layout>
  )
}

export async function getStaticProps(){
  try{

    const res = await fetch('http://rveapi.herokuapp.com/api/v1/computers')
    const data = await res.json()
  console.log(data)
    return {
      props: {computers: data.computers},
    }
  }catch(err){
    console.log(err)
  }
}
