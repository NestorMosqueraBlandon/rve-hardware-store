import Head from 'next/head';
import Image from 'next/image';

import useStyles from '../utils/styles';
import Styles from '../styles/Header.module.css';

import Cookies from 'js-cookie';

import { Store } from '../utils/Store';
import { useContext } from 'react';
import Menu from './Menu';
import Header from './Header';

export default function Layout({ title, children }) {
  const { state, dispatch } = useContext(Store);
  const { cart, userInfo } = state;

  return (
    <>
      <Head>
        <title>{title ? `${title} - RVE Hardware` : 'RVE Hardware'}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin='true'
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Head>
      <Header logo="./img/logo/logo.svg" />
      <main className="main">{children}</main>
      {/* <footer className={Header.footer}>
                <p>
                    RVE Hardware &copy; 2021
                </p>
                <ul>
                    <li></li>
                </ul>
            </footer> */}
      {/* <Menu /> */}
    </>
  );
}
