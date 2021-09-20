import { Link } from "next/link";
import Image  from "next/image";
import { useRouter } from "next/dist/client/router"
import Layout from "../../components/Layout";
import data from "../../utils/data";
import styles from "../../styles/Section.module.css"
import axios from "axios";
import { useContext } from "react";
import { Store } from "../../utils/Store";

export default function ProductScreen() {
    const {state, dispatch} = useContext(Store);
    const router = useRouter();
    const {slug} = router.query;
    const computer = data.computers.find(a => a.slug === slug)

    if(!computer){
        return <div>Computer Not found</div>
    }
    
    const addToCartHandler = async() => {
        // const {data} = await axios.get(`http://rveapi.herokuapp.com/api/v1/computers/${computer._id}`);
        dispatch({type: 'CART_ADD_ITEM', payload: {...computer, quantity: 1}})
        router.push('/cart')
    }
    return (
        
        
        <Layout title={computer.name}>
            <div className={styles.header}>
                <details>
                    <summary>

                        {computer.name}
                        <div>
                            <i className='bx bx-chevron-down'></i>
                            <button onClick={addToCartHandler} className={styles.button}>Comprar</button>
                        </div>
                    </summary>
                        <ul>
                            <li>Descripcion</li>
                            <li>Especificaciones</li>
                        </ul>
                </details>
            </div>
            <div className={styles.container}>
                <div className={styles.hero}>
                    <h2>{computer.name}</h2>
                    <h4>Un salto al siguiente nivel.</h4>
                    <div className={styles.imgcontainer}>
                        <Image src={computer.image} alt={computer.name} width={'200%'} height={'200%'}/>
                    </div>
                </div>
                <div className={styles.details}>
                    <ul>
                        <li className={styles.detailsItem}><img className={styles.icon} src="../images/icons/cpu.png" alt="" /> {computer.cpu}</li>
                        <li className={styles.detailsItem}><img className={styles.icon} src="../images/icons/motherboard.png" alt="" />  {computer.motherboard}</li>
                        <li className={styles.detailsItem}><img className={styles.icon} src="../images/icons/ram.png" alt="" /> {computer.ram}</li>
                        <li className={styles.detailsItem}><img className={styles.icon} src="../images/icons/ssd-drive.png" alt="" /> {computer.ssd}</li>
                        <li className={styles.detailsItem}><img className={styles.icon} src="../images/icons/hdd.png" alt="" /> {computer.hdd}</li>
                        <li className={styles.detailsItem}><img className={styles.icon} src="../images/icons/gpu.png" alt="" />  {computer.gpu}</li>
                    </ul>
                </div>
                <div className={styles.gamescontainer}>
                    <h2>Juegos Recomendados</h2>
                    <div className={styles.line}></div>
                <ul className={styles.games}>
                        <li className={styles.detailsItem}><img className={styles.gameicon} src="../images/games/fornite-cover.webp" alt="" /> </li>
                        <li className={styles.detailsItem}><img className={styles.gameicon} src="../images/games/battlefield-v-cover.webp" alt="" /> </li>
                        <li className={styles.detailsItem}><img className={styles.gameicon} src="../images/games/GTA-v-cover.webp" alt="" /> </li>
                        <li className={styles.detailsItem}><img className={styles.gameicon} src="../images/games/gears-5-cover.webp" alt="" /> </li>
                        <li className={styles.detailsItem}><img className={styles.gameicon} src="../images/games/read-dead-cover.png" alt="" /> </li>
                </ul>
                </div>
            </div>
        </Layout>
        

    )
}
