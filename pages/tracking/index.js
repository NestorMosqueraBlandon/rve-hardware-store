import Layout from "../../components/Layout";
import styles from "../../styles/Tracking.module.css"
import { useRouter } from 'next/router';

export default function Traking(props) {

    const router = useRouter();

    const changePage = () => {
        router.push("/tracking/info")
    }
    return (
        <Layout logo="../../img/logo/logo.svg">
            <div className={styles.trackingbox}>
                <img src="../../img/order-tracking.png" alt="" />
                <h2>Rastrea el estado de tu pedido</h2>

                <input type="text" placeholder="Numero de Guia (Ej: 323456545)" />

                <input type="submit" onClick={changePage} value="Consultar" />
            </div>

        </Layout>
    )
}
