import Layout from "../../components/Layout";
import TrakingWizard from "../../components/TrakingWizard";
import styles from "../../styles/Tracking.module.css"

export default function Info() {
    return (
        <Layout logo="../../img/logo/logo.svg">
            
            <TrakingWizard step1 />

            <div className={styles.infobox}>
                <div className={styles.infoboxheader}>
                    <h2>Confirmado</h2>
                    <h2>Guia # 1000801202276</h2>
                </div>

                <div className={styles.infoboxcontent}>
                    <h2 className={styles.title}>Cliente</h2>
                    <div className={styles.colum}>
                        <div className={styles.group}>
                            <span>Nombre</span>
                            <span>Daniel Bermudez</span>
                        </div>
                        <div className={styles.group}>
                            <span>Cedula</span>
                            <span>1002653847</span>
                        </div>
                    </div>
                    <div className={styles.colum}>
                        <div className={styles.group}>
                            <span>Telefono</span>
                            <span>3117693972</span>
                        </div>
                        <div className={styles.group}>
                            <span>Direccion</span>
                            <span>Calle 65 #11-50 La Sultana</span>
                        </div>
                    </div>
                    <div className={styles.colum}>
                        <div className={styles.group}>
                            <span>Ciudad</span>
                            <span>Manizales</span>
                        </div>
                        <div className={styles.group}>
                            <span>Correo</span>
                            <span>gato.by@hotmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
