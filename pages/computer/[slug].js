import { Link } from "next/link";
import Image  from "next/image";
import { useRouter } from "next/dist/client/router"
import Layout from "../../components/Layout";
import data from "../../utils/data";
import styles from "../../styles/Section.module.css"

export default function ProductScreen() {
    const router = useRouter();
    const {slug} = router.query;
    const computer = data.computers.find(a => a.slug === slug)

    if(!computer){
        return <div>Computer Not found</div>
    }
    return (
        <Layout title={computer.name}>
            <div className={styles.header}>
                <details>
                    <summary>

                        {computer.name}
                        <div>
                            <i className='bx bx-chevron-down'></i>
                            <button className={styles.button}>Comprar</button>
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
                    <div>
                        <Image src={computer.image} alt={computer.name} width={'100%'} height={'100%'}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
