import { useRouter } from "next/dist/client/router";
import { useContext, useState } from "react";
import DivisaFormater from "../../components/DivisaFormater";
import Layout from "../../components/Layout";
import styles from '../../styles/Build.module.css';
import { Store } from "../../utils/Store";

export default function Windows({ categories, products }) {


    const windowsCategories = [
        {
            id: 0,
            name: "Windows 11",
            lastname: "Licencia Windows 11 una activacion",
            img: "/img/windows11.png",
            price: 95000,
            oldPrice: 170000,
            category: 0
        },
        {
            id: 1,
            name: "Windows 10",
            lastname: "Licencia Windows 10 una activacion",
            img: "/img/windows10.png",
            price: 55000,
            oldPrice: 98000,
            category: 1
        }
        ]

    const [currentCategory, setCurrentCategory] = useState(0);
    const lengthCategory = windowsCategories.length;

    const [activeList, setActiveList] = useState(false)
    const nextCategory = () => {
        setCurrentCategory(currentCategory === lengthCategory - 1 ? 0 : currentCategory + 1)
    }

    const prevCategory = () => {
        setCurrentCategory(currentCategory === 0 ? 0 : currentCategory - 1)
    }

    const [currentProduct, setCurrentProduct] = useState(0);
    const lengthProduct = windowsCategories.length;

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
        dispatch({type: "CART_ADD_ITEM", payload: {slug: "build-pc", name: "Licencia Windows", image: "/img/windows11.png", price: total, quantity: 1}})
        router.push('/cart');
    }

    const clearBuild = async () => {
        setBuild([])
    }

    return (
        <div>
             <Layout logo="../../img/logo/logo.svg">
            <div className={styles.build}>
                <h2>Activa tu Windows</h2>
                <div className={styles.selectContainer}>
                    <div className={styles.forwArrows}>
                    </div>
                    <div className={styles.softwarecard}>
                        <div className={styles.cornerItem}>
                            {windowsCategories.map((category, index) => {
                                    return (
                                        <div key={category.id}>
                                            {index === currentCategory && (
                                                <p className={styles.categoryContent} key={category.id}>
                                                    <span className={styles.category}>{category.name}</span>
                                                    <img className={styles.imageProd} src={category.img} alt={category.name} />
                                                    {windowsCategories.filter((p) => p.category === category.id).map((product, index) => {
                                                        return (
                                                            <span key={product.id} className={styles.flexcol}>
                                                                {index === currentProduct && (
                                                                    <>
                                                                    
                                                                        <span key={product.id} className={styles.productCard}>{product.lastname}</span>
                                                                        <span className={styles.productoldprice}><DivisaFormater value= {product.oldPrice}/></span>
                                                                        <span className={styles.productprice}><DivisaFormater value= {product.price}/></span>
                                                                        <button className={styles.selectbtn} onClick={() => addItem(category.name, product.name, product.price, 1, product._id)}>AGREGAR</button>
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
                    <p>Recuerda que esta clave es de un solo uso, si intentas usarla en 2 o mas equipos la puedes perder para siempre, disfrutala.</p>
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
        </div>
    )
}

