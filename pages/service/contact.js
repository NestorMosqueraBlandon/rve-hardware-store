import Layout from "../../components/Layout";
import styles from '../../styles/Service.module.css';
import Link from 'next/link';

export default function contact() {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.header}>

                <div>
                <p className={styles.leftext}>Contacto para solicitar servicio técnico</p>
                <h2 className={styles.h2}>Mantenimiento, y Reparacion de Equipos de computo con los expertos en tecnología</h2>
                <p className={styles.leftext}><i className='bx bxl-whatsapp' ></i> +57 3207768383</p>
                <div className={styles.headerfooter}>
                      <Link href="/service/contact"><a> <button>Solicitar servicio</button> </a></Link>
                    <a href="">¿En qué somos especialistas? <i className='bx bx-right-arrow-alt'></i> </a>
                </div>
                </div>

                <div className={styles.form}>
                    <form action="">
                        <label htmlFor="">*Nombre</label>
                        <div className={styles.formgroup}>
                        <input type="text" placeholder="Pancho Panza" />
                        </div>
                        <label htmlFor="">Correo electrónico</label>
                        <div className={styles.formgroup}>
                        <input type="email" placeholder="panche@corre.com" />
                        </div>
                        <label htmlFor="">Numero de contacto</label>
                        <div className={styles.formgroup}>
                        <input type="number" placeholder="3215456789" />
                        </div>
                        <div className={styles.formgroup}>
                            <select name="" id="">
                                <option value="">Servicio a domicilio</option>
                            </select>
                        </div>
                        <label htmlFor="">Cuéntanos un poco mas...</label>
                        <div>
                            <textarea name="" id="" placeholder="Cuéntanos sobre tu pc..." cols="30" rows="10"></textarea>
                        </div>
                    </form>
                    
                </div>
                </div>

            </div>         
        </Layout>
    )
}
