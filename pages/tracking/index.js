import Layout from "../../components/Layout";
import styles from "../../styles/Tracking.module.css"
import { useRouter } from 'next/router';
import { useState } from "react";
import swal from "sweetalert";

export default function Traking(props) {

    const router = useRouter();

    const [guide, setGuide] = useState(0);

    console.log(guide)
    const changePage = () => {
        if(guide == 1000801202276){
            router.push("/tracking/info")
        }else{
            swal({
                title: "No se encontro el numero de guia!",
                text: "Intenta con otra!",
                icon: "error",
              });
        }

    }
    return (
        <Layout logo="../../img/logo/logo.svg">
            <div className={styles.trackingbox}>
                <img src="../../img/order-tracking.png" alt="" />
                <h2>Rastrea el estado de tu pedido</h2>

                <input type="text" onChange={(e) => setGuide(e.target.value)}  placeholder="Numero de Guia (Ej: 323456545)" />

                <input type="submit" onClick={changePage} value="Consultar" />
            </div>

        </Layout>
    )
}
