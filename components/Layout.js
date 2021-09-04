import Head from "next/head"
import Image from "next/image"
import useStyles from "../utils/styles"
import Header from '../styles/Header.module.css'

export default function Layout({children}) {
    const classes = useStyles();
    return (
        <>
            <Head>
                <title>Rve Hardware</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
            </Head>
            <header className={Header.header}>
                <div>
                    <div className={Header.menu}></div>
                    <div className={Header.menu}></div>
                </div>
                <p><img src="./images/logo.svg" alt="" /></p>
                <div></div>
            </header>
            <main className='main'>
                {children}
            </main>
            <footer className={classes.footer}>
                <p>
                    RVE Hardware &copy; 2021
                </p>
            </footer>
        </>
    )
}
