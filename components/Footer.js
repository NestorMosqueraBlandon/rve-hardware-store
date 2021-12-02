import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div>
                    RVE HARDWARE
                </div>
                <div className={styles.right}>

                <ul>
                    <li className={styles.title}>Sobre Nosotros</li>
                    <li>Historia</li>
                    <li>Sobre</li>
                    <li>News</li>
                </ul>
                <ul>
                    <li className={styles.title} >Informacion</li>
                    <li>Contactos</li>
                    <li>Terminos y Condiciones</li>
                    <li>Politica de provacidad</li>
                    <li>FAQ</li>
                </ul>
                <ul>
                    <li className={styles.title}>Redes Sociales</li>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>YouTube</li>
                    <li>Twitter</li>
                </ul>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>2021 Real Vision Hardware</p>
                <p>Support@rvehardware.com</p>
            </div>
        </footer>
    )
}
