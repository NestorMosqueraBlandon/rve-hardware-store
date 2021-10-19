import Layout from "../../components/Layout";
import styles from "../../styles/Section.module.css"
import Link from 'next/link';

export default function Workstation() {
    return (
        <Layout>
            <div className={styles.headerpage}>
                <h1>Workstation</h1>
                <p>Compra las mejores PC Gamer armadas con tarjeta de video NVIDIA o RADEON, y procesadorres Intel o Ryzen. Enviamos tu computadora a todo Colombia</p>
            </div>

            <div className={styles.carousel}>
                <div className={styles.carouselitem}>
                    <div className={styles.picture}>
                    <img src="/images/job-cover/ws-dev.webp" alt="Programacion" />
                    </div>
                    <h2>PC Gamer para Programacion</h2>
                </div>

                <div className={styles.carouselitem}>
                    <div className={styles.picture}>
                    <img src="/images/job-cover/ws-video.webp" alt="Edicion de Video" />
                    </div>
                    <h2>PC Gamer para Edicion de Video</h2>
                </div>
                <div className={styles.carouselitem}>
                    <div className={styles.picture}>
                    <img src="/images/job-cover/ws-school.webp" alt="Estudiantes" />
                    </div>
                    <h2>PC Gamer para Estudiantes</h2>
                </div>
                <div className={styles.carouselitem}>
                    <div className={styles.picture}>
                    <img src="/images/job-cover/ws-arquitectura.webp" alt="Arquitectura" />
                    </div>
                    <h2>PC Gamer para Arquitectura</h2>
                </div>
                <div className={styles.carouselitem}>
                    <div className={styles.picture}>
                    <img src="/images/job-cover/ws-foto.webp" alt="Fotografia" />
                    </div>
                    <h2>PC Gamer para Fornite</h2>
                </div>
            </div>

        </Layout>
    )
}
