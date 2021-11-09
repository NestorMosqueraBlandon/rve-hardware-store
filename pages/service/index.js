import Layout from "../../components/Layout";
import styles from '../../styles/Service.module.css';
import Link from 'next/link';

export default function index() {
    return (
        <Layout logo="../../img/logo/logo.svg">
            <div className={styles.container}>
                <div className={styles.header}>
                    <div>
                        <p className={styles.leftext}>Mantenimiento y reparación de computadoras</p>
                        <h2 className={styles.h2}>Servicio Técnico y Reparacion de Computadoras en Colombia</h2>
                        <p className={styles.leftext}>Nuestro servicio de revisión, reparación, formateo, mantenimiento preventivo y actualizacion de computadoras se distingue por el amplio conocimiento de RVE HARDWARE ha acumulado a través de varios años de estar en contacto con el hardware de las marcas más reconocidas de alto desempeño.</p>
                        <div className={styles.headerfooter}>
                            <Link href="/service/contact"><a> <button>Solicitar servicio</button> </a></Link>
                            <a href="">¿En qué somos especialistas? <i className='bx bx-right-arrow-alt'></i> </a>
                        </div>
                    </div>
                    <div className={styles.picture}>
                        <img src="./main.webp" alt="" />
                        <div>
                            <span className={styles.dot}>
                                1
                                <span>Enfriamiento liquido</span>
                            </span>
                            <span className={styles.dot}>
                                2
                                <span>Armado de cables perfecto</span>
                            </span>
                            <span className={styles.dot}>
                                3
                                <span>Aumento de RAM</span>
                            </span>
                            <span className={styles.dot}>
                                4
                                <span>Componentes de primera calidad</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Servicio técnico de revisión, reparación y mantenimiento de computadoras.</p>
                    <h2>Todo lo que tu PC necesita para funcionar BIEN.</h2>

                    <div className={styles.mantenince}>
                        <div className={styles.manteninceItem}>
                            <img src="./img/service/mantenimiento.svg" alt="" />
                            <h2>Mantenimeinto correctivo y preventivo</h2>
                            <p>Es recomendable realizar de manera periódica un servicio técnico de limpieza profunda y revisión de funcionamiento a todos los equipos de cómputo para alargar su vida útil y detectar problemas a tiempo.</p>
                        </div>
                        <div className={styles.manteninceItem}>
                            <img src="./img/service/actualizacion.svg" alt="" />
                            <h2>Actualización de tu PC y mejoras de rendimeinto</h2>
                            <p>Es recomendable realizar de manera periódica un servicio técnico de limpieza profunda y revisión de funcionamiento a todos los equipos de cómputo para alargar su vida útil y detectar problemas a tiempo.</p>
                        </div>
                        <div className={styles.manteninceItem}>
                            <img src="./img/service/reparacion.svg" alt="" />
                            <h2>Mantenimeinto correctivo y preventivo</h2>
                            <p>Es recomendable realizar de manera periódica un servicio técnico de limpieza profunda y revisión de funcionamiento a todos los equipos de cómputo para alargar su vida útil y detectar problemas a tiempo.</p>
                        </div>
                        <div className={styles.manteninceItem}>
                            <img src="./img/service/instalacion.svg" alt="" />
                            <h2>MAntenimeinto correctivo y preventivo</h2>
                            <p>Es recomendable realizar de manera periódica un servicio técnico de limpieza profunda y revisión de funcionamiento a todos los equipos de cómputo para alargar su vida útil y detectar problemas a tiempo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
