import { useRouter } from "next/dist/client/router";
import { useContext, useState } from "react";
import DivisaFormater from "../../components/DivisaFormater";
import Layout from "../../components/Layout";
import styles from '../../styles/Build.module.css';
import { Store } from "../../utils/Store";

export default function Build({ categories, products }) {

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
        if (!name) {
            return;
        }
        
        const existItem = build.find((item) => item.category === category);
        
        console.log(existItem)
        const items = existItem? build.map((item) => {
            if(item.category == category){
                item.name = name
                item.price = price
                setBuild([...build])        
            }
        }) : 
        setBuild([...build, { category, name, price }])
    }


    let total = build.reduce((a, c) => a + c.price * 1, 0);

    console.log(total)

    const router = useRouter();
    const {state, dispatch} = useContext(Store);
    

    const addToCartHandler = async () => {
        dispatch({type: "CART_ADD_ITEM", payload: {slug: "build-pc", name: "My Dream PC", image: "/images/pc1.png", price: total, quantity: 1}})
        router.push('/cart');
    }

    const clearBuild = async () => {
        setBuild([])
    }

    console.log(build)

    return (
        <Layout logo="../../img/logo/logo.svg">
            <div className={styles.build}>
                <h2>Constuye tu sueño</h2>
                <div className={styles.selectContainer}>
                    <div className={styles.forwArrows}>
                        <button onClick={nextProduct} className={styles.arrow}><i className='bx bx-up-arrow' ></i></button>
                        <button onClick={prevProduct}><i className='bx bx-down-arrow' ></i></button>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cornerItem}>
                            {categories.filter((category) => category.type === "build")
                                .map((category, index) => {
                                    return (
                                        <div key={category._id}>
                                            {index === currentCategory && (
                                                <p className={styles.categoryContent} key={category.id}>
                                                    <span className={styles.category}>{category.name === "CPU" ? "PROCESADOR" : category.name === "MOTHERBOARD" ? "TARJETA MADRE" : category.name === "GRAPHICS CARD" ? "TARJETA GRAFICA" : category.name === "RAM MEMORY" ? "MEMORIA RAM" : category.name === "SOLID STATE DRIVE" ? "ESTADO SOLIDO" : category.name === "HARD DISK DRIVE" ? "DISCO DURO" : category.name}</span>
                                                    <img src="./img/category/cpu.png" alt={category.name} />
                                                    {products.filter((p) => p.category === category._id).map((product, index) => {
                                                        return (
                                                            <span key={product._id} className={styles.flexcol}>
                                                                {index === currentProduct && (
                                                                    <>
                                                                        <span key={product.id} className={styles.productCard}>{product.name}</span>
                                                                        <span className={styles.productprice}><DivisaFormater value= {product.price}/></span>
                                                                        <button className={styles.selectbtn} onClick={() => addItem(category.name, product.name, product.price, 1, product._id)}>INSTALAR</button>
                                                                    </>
                                                                )}
                                                            </span>
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
                        <button onClick={prevCategory}><i className='bx bx-left-arrow'></i></button>
                        <button onClick={nextCategory}><i className='bx bx-right-arrow' ></i></button>
                    </div>
                </div>

                <div className={styles.description}>
                    <p className={styles.compatibility}><i className='bx bxs-check-circle'></i> <strong> Ajuste: </strong> <span> No se encontraron incompatibilidades </span> </p>
                    <p className={styles.compatibility}><i className='bx bxs-bolt-circle' ></i> <strong>Wataje Estimado: </strong> <span> 300w </span></p>
                    <p>PRECIO TOTAL : <strong> <DivisaFormater value={build.reduce((a, c) => a + Number(c.price) * Number(1), 0)}> </DivisaFormater> </strong> </p>
                </div>

                <div className={activeList ? styles.listitems : styles.listitemsnone}>
                    <h2>Componentes Elegidos</h2>
                    <button onClick={() => setActiveList(false)}><i className='bx bxs-x-circle'></i></button>
                    <ul>
                        {build.map((item) => (
                            <li key={item.name}>{item.name}</li>
                        ))}
                    </ul>
                </div>


                <div className={styles.center}>
                    <button className={styles.buybtn} onClick={clearBuild}>Limpiar</button>
                </div>

                <div className={styles.center}>
                    <button className={styles.buybtn} onClick={addToCartHandler}>COMPRAR</button>
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
            props: {
                categories: data.categories,
                products: dataProducts.products
            },
        };
    } catch (err) {
        console.log(err);
    }
}
