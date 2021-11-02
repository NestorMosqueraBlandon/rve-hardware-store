import { useState } from "react";
import DivisaFormater from "../../components/DivisaFormater";
import Layout from "../../components/Layout";
import styles from '../../styles/Build.module.css';

export default function Build({categories, products}) {

    const [currentCategory, setCurrentCategory] = useState(0);
    const lengthCategory = categories.length;

    const [activeList, setActiveList] = useState(false)
    const nextCategory = () => {
        setCurrentCategory(currentCategory === lengthCategory - 4 ? 0 : currentCategory + 1)
    }

    const prevCategory = () => {
        setCurrentCategory(currentCategory === 0 ? 0 : currentCategory - 1)
    }

    const [currentProduct, setCurrentProduct] = useState(0);
    const lengthProduct = products.length;

    const nextProduct = () => {
        setCurrentProduct(currentProduct === lengthProduct - 1 ? 0 : currentProduct + 1)
    }

    const prevProduct = () => {
        setCurrentProduct(currentProduct === 0 ? 0 : currentProduct - 1)
    }

    const [build, setBuild] = useState([])


    const addItem = (category, name, price, qty, id) => {
        if(!name)
        {
            return;
        }
        setBuild([...build, {category, name, price}])
    console.log(build)


    }


    let total = build.reduce((a, c) =>  a + c.price * 1, 0);

    console.log(total)

    return (
        <Layout logo="../../img/logo/logo.svg">
            <div className={styles.build}>
                <h2>Constuye tu sueños</h2>
                <div className={styles.selectContainer}>
                    <div className={styles.forwArrows}>
                        <button onClick={nextProduct} className={styles.arrow}><i className='bx bxs-up-arrow'></i></button>
                        <button onClick={prevProduct}><i className='bx bxs-down-arrow' ></i></button>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cornerItem}>
                            {categories.filter((category) => category.type === "build")
                            .map((category, index) => {
                                return(
                                    <div key={category._id}>
                                        {index === currentCategory && (
                                            <p className={styles.categoryContent} key={category.id}>
                                                <span className={styles.category}>{category.name === "CPU"? "PROCESADOR" : category.name === "MOTHERBOARD" ? "TARJETA MADRE" : category.name === "GRAPHICS CARD" ? "TARJETA GRAFICA" : category.name === "RAM MEMORY"? "MEMORIA RAM" : category.name === "SOLID STATE DRIVE"? "ESTADO SOLIDO" : category.name === "HARD DISK DRIVE" ? "DISCO DURO" : category.name}</span>
                                                <img src="./img/category/cpu.png" alt={category.name} />
                                                {products.filter((p) => p.category === category._id).map((product, index) => {
                                                    return(
                                                        <div key={product._id} className={styles.flexcol}>
                                                            {index === currentProduct && (
                                                                <>
                                                                <span key={product.id} className={styles.productCard}>{product.name}</span>
                                                                <button className={styles.selectbtn} onClick={() => addItem(category.name, product.name, product.price, 1, product._id)}>Seleccionar</button>
                                                                </>
                                                            )}
                                                        </div>
                                                    )
                                                })}

                                            </p>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={styles.cornerArrows}>
                        <button onClick={prevCategory}><i className='bx bxs-left-arrow' ></i></button>
                        <button onClick={nextCategory}><i className='bx bxs-right-arrow' ></i></button>
                    </div>
                </div>

                <div className={styles.description}>
                   <p>PRECIO TOTAL : <DivisaFormater value={build.reduce((a, c) =>  a + Number(c.price) * Number(1), 0)}> </DivisaFormater> </p>         
                </div>

                <div className={activeList? styles.listitems : styles.listitemsnone}>
                    <h2>Componentes Elegidos</h2>
                    <button onClick={() => setActiveList(false)}><i className='bx bxs-x-circle'></i></button>
                <ul>
                    {build.map((item) => (
                        <li key={item.name}>{item.name}</li>
                    ))}
                </ul>
                </div>

                <button onClick={() => setActiveList(true)} className={styles.buildbtn}><i className='bx bxs-building' ></i></button>

                
            </div>

        </Layout>
    )
}


export async function getServerSideProps() {
    try {
      const res = await fetch('https://rveapi.herokuapp.com/api/v1/categories');
      const resProducts = await fetch('https://rveapi.herokuapp.com/api/v1/products');
      const data = await res.json();
      const dataProducts = await resProducts.json();
      return {
        props: { categories: data.categories,
                  products: dataProducts.products },
      };
    } catch (err) {
      console.log(err);
    }
  }
  