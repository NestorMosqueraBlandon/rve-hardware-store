import Layout from "../../components/Layout";
import styles from "../../styles/Section.module.css"
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from "react";
import { Store } from '../../utils/Store';
import card from '../../styles/Card.module.css';
import DivisaFormater from "../../components/DivisaFormater";

export default function PcGamer({ computers }) {
    const router = useRouter();
    const { state, dispatch } = useContext(Store);
  
    const [type, setType] = useState('gamer');
  
    const addToCartHandler = (computer) => {
      dispatch({ type: 'CART_ADD_ITEM', payload: { ...computer, quantity: 1 } });
      router.push('/cart');
    };

    
    return (
        <Layout>
            
            <div className={styles.headerpage}>
                <h1>PC GAMER</h1>
                <p>Compra las mejores PC Gamer armadas con tarjeta de video NVIDIA o RADEON, y procesadorres Intel o Ryzen. Enviamos tu computadora a todo Colombia</p>
            </div>

            <div className={styles.carousel}>
                <div className={styles.carouselitem}>
                    <div className={styles.picture}>
                    <img src="/images/games-cover/pcg-fortnite2.webp" alt="" />
                    </div>
                    <h2>PC Gamer para Fornite</h2>
                </div>

                <div className={styles.carouselitem}>
                    <div className={styles.picture}>
                    <img src="/images/games-cover/pcg-gta.webp" alt="" />
                    </div>
                    <h2>PC Gamer para GTA</h2>
                </div>
                <div className={styles.carouselitem}>
                    <div className={styles.picture}>
                    <img src="/images/games-cover/pcg-minecraf2.webp" alt="" />
                    </div>
                    <h2>PC Gamer para Minecraft</h2>
                </div>
                <div className={styles.carouselitem}>
                    <div className={styles.picture}>
                    <img src="/images/games-cover/pcg-basic2.webp" alt="" />
                    </div>
                    <h2>PC Gamer de Entrada</h2>
                </div>
                <div className={styles.carouselitem}>
                    <div className={styles.picture}>
                    <img src="/images/games-cover/pcg-fortnite2.webp" alt="" />
                    </div>
                    <h2>PC Gamer para Fornite</h2>
                </div>
            </div>
            <div className="container">
              {computers.map((computer) => (
                <div className={card.card} key={computer._id}>
                  <Link href={`/computer/${computer._id}`} passHref>
                    <a>
                      <div>
                        <img src={computer.image} alt={computer.name} />
                      </div>
                      <div>
                        <div className={card.header}>
                          <h2>{computer.name}</h2>
                          <p className="item-price">
                            <DivisaFormater value={computer.price} />
                          </p>
                        </div>
                        <ul>
                          {computer.specs.map((spec) => (
                            <li key={spec._id}>
                              <img
                                className={styles.icon}
                                src="/images/icons/cpu.png"
                                alt=""
                              />{' '}
                              {spec.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </a>
                  </Link>
                  <button
                    onClick={() => addToCartHandler(computer)}
                    className={card.button}
                  >
                    Añadir al carrito
                  </button>
                </div>
              ))}
            </div>

        </Layout>
    )
}


export async function getServerSideProps() {
    try {
      const res = await fetch('https://rveapi.herokuapp.com/api/v1/computers');
      const data = await res.json();
      return {
        props: { computers: data.computers },
      };
    } catch (err) {
      console.log(err);
    }
  }