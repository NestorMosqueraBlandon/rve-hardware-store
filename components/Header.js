import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Header.module.css'

export default function Header({logo}) {
    const [openMenu, setOpenMenu] = useState(false)

    
    return (
        <header className={styles.header}>
            <div className={styles.menu} onClick={() => setOpenMenu(!openMenu)}>
              <i className='bx bx-menu' ></i>
            </div>
            <div className={styles.logomobile}>
                <img src={logo} alt="Real Vision Hardware Logo" />
            </div>
            <div className={styles.transparent}>
                Hola
            </div>
            <nav className={openMenu? styles.nav : styles.navopen}>
                <button className={styles.navclose} onClick={() => setOpenMenu(!openMenu)}> <i className='bx bxs-x-circle'></i> </button>
                <div className={styles.left}>
                    <div className={styles.logo}>
                    <img src={logo} alt="Real Vision Hardware Logo" />
                    </div>
                    <ul>
                        <li> <Link href="/"><a> Inicio </a></Link> </li>
                        <li> 
                            
                            <details className={styles.details}>
                                <summary>
                                    Computadoras
                                </summary>
                                <ul>
                                    <li><Link href="/"><a> PC Gaming </a></Link></li>
                                    <li><Link href="/"><a> Mini PC</a></Link></li>
                                    <li><Link href="/"><a> Portatiles</a></Link></li>
                                </ul>
                            </details>
                            
                            {/* <Link href="/"><a> Computadores </a></Link>  */}
                            </li>
                        <li>Escritorios</li>
                        <li>Torneos</li>
                        <li> <Link href="https://rvehardware.com/post"><a> Blog </a></Link></li>

                    </ul>
                </div>
                <div className={styles.headerfooter}>
                    <div className={styles.fot}>
                    </div>

                    <Link href="/register"><a className={styles.success}> Registrarse </a></Link>
                    <Link href="/login"><a className={styles.normal}> Iniciar Sesion </a></Link>
                </div>
            </nav>
        </header>
    )
}
