import { useContext } from "react"
import Layout from "../components/Layout";
import DivisaFormater from "../components/DivisaFormater";
import { Store } from "../utils/Store";
import { Link } from "next/link";
import { useRouter } from "next/router";

export default function Cart() {

    const router = useRouter();

    const { state } = useContext(Store);
    const { cart: { cartItems } } = state;

    const checkoutHandler = () => {
        router.push('/shipping')
    }
    return (
        <Layout title="Carrito">
            {cartItems.length === 0 ? (
                <div> El Carrito esta Vacio </div>
            ) :
                <>
                <h2 className="title-cart">{cartItems.length} {cartItems.length == 1? 'Articulo' : 'Articulos'} en el Carrito</h2>
                    {cartItems.map((item) => (
                        <details key={item._id}>
                            <summary className="cart-item">
                               <h3>{item.name} </h3> <span> <DivisaFormater value = {item.price} /> </span>
                            </summary>
                            <div>
                            <div  className="cart-card">
                            <div className="img">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="content">
                                <span className="cart-item-name">
                                    {item.name}
                                </span>
                                <span><DivisaFormater value = {item.price} /></span>
                                <div className="content-footer">
                                    <button>
                                        <i className='bx bxs-trash'></i>

                                    </button>
                                </div>
                            </div>
                        </div>
                            </div>
                        </details>
                        
                    ))}
                    <div className="cart-footer">
                        <div className="cart-footer-price">
                            <h5>Total</h5>
                            <DivisaFormater value={cartItems.reduce((a, c) => a + c.price, 0)} />
                        </div>
                        <button onClick={() => checkoutHandler()}>
                        <i className='bx bxs-cart'></i>
                        </button>
                    </div>
                </>
            }
        </Layout>
    )
}
