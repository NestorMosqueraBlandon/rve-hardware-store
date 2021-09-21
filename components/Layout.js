import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import useStyles from "../utils/styles"
import Header from '../styles/Header.module.css'
import logo from '../public/images/logo.svg'
import Cookies from "js-cookie"

import { Store } from "../utils/Store"
import { useContext } from "react"
import Menu from "./Menu"

export default function Layout({title, children}) {

    const {state, dispatch} = useContext(Store);
    const {cart, userInfo} = state;

    console.log(userInfo)
    return (
        <>
            <Head>
                <title>{title? `${title} - RVE Hardware` : 'RVE Hardware'}</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true} />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
                <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'/>
            </Head>
            <header className={Header.header}>
                <div>
                    <div className={Header.menu}></div>
                    <div className={Header.menu}></div>
                </div>
                <Link href="/" passHref>
                    <a>
                        <Image src={logo} alt="Logo RVE HARDWARE" />
                    </a>
                </Link>
                <div className={Header.left}>
                    {userInfo ? <Link href="/profile" className="profile-name"><a> {userInfo.name}</a></Link>: <span></span>}
                    {/* <Link href="/login">
                        <a>
                            <i className='bx bxs-user'></i>
                        </a>
                    </Link> */}
                </div>
            </header>
            <main className='main'>
                {children}
            </main>
            {/* <footer className={Header.footer}>
                <p>
                    RVE Hardware &copy; 2021
                </p>
                <ul>
                    <li></li>
                </ul>
            </footer> */}
            <Menu/>
        </>
    )
}
