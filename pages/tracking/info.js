import Layout from "../../components/Layout";
import TrakingWizard from "../../components/TrakingWizard";
import styles from "../../styles/Tracking.module.css"

export default function Info() {
    return (
        <Layout logo="../../img/logo/logo.svg">
            
            <TrakingWizard step1 step2 />

            <div className={styles.infobox}>
                <div className={styles.infoboxheader}>
                    <h2>En Ensamble</h2>
                    <h2>Guia # 234238673</h2>
                </div>

                <div className={styles.infoboxcontent}>
                    <h2 className={styles.title}>Cliente</h2>
                    <div className={styles.colum}>
                        <div className={styles.group}>
                            <span>Nombre</span>
                            <span>Juancho Aprila</span>
                        </div>
                        <div className={styles.group}>
                            <span>Cedula</span>
                            <span>1152478656</span>
                        </div>
                    </div>
                    <div className={styles.colum}>
                        <div className={styles.group}>
                            <span>Telefono</span>
                            <span>3207768205</span>
                        </div>
                        <div className={styles.group}>
                            <span>Direccion</span>
                            <span>Carrera 81 # 45-78</span>
                        </div>
                    </div>
                    <div className={styles.colum}>
                        <div className={styles.group}>
                            <span>Ciudad</span>
                            <span>Pitalito / Huila</span>
                        </div>
                        <div className={styles.group}>
                            <span>Correo</span>
                            <span>juancho@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
