import axios from 'axios';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import DivisaFormater from '../components/DivisaFormater';
import Layout from '../components/Layout';
import { Store } from '../utils/Store';

export default function Placeorder() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const {
    userInfo,
    cart: { cartItems, shippingAddress, paymentMethod },
  } = state;

  const shippAddres = JSON.parse(shippingAddress);
  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100;
  const itemsPrice = round2(
    cartItems.reduce((a, c) => a + c.price * c.quantity, 0)
  );
  const shippingPrice = itemsPrice > 4500000 ? 0 : 38000;
  const taxPrice = round2(itemsPrice * 0.15);
  const totalPrice = round2(itemsPrice + shippingPrice + taxPrice);

  const [loading, setLoading] = useState(false);

  const placeOrderHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        'https://rveapi.herokuapp.com/api/v1/orders',
        {
          orderItems: cartItems,
          shippingAddress,
          paymentMethod,
          itemsPrice,
          shippingPrice,
          taxPrice,
          totalPrice,
        },
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      dispatch({ type: 'CART_CLEAR' });
      Cookies.remove('cartItems');
      setLoading(false);
      router.push(`/order/${data._id}`);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  return (
    <Layout title="Realizar Pedido">
      <h2>Resumen de Pedido</h2>
      <p>Seleccion el metodo de pago que le resulte mas comodo</p>

      <div className="card">
        <div className="card_title">
          <h2>Direccion de Envio</h2>
        </div>
        <div className="card_body">
          <ul>
            <li>
              <span>Nombre:</span> {shippAddres.name.toUpperCase()}
            </li>
            <li>
              <span>Cedula:</span> {shippAddres.identification}
            </li>
            <li>
              <span>Telefono:</span> {shippAddres.phone}
            </li>
            <li>
              <span>Direccion:</span> {shippAddres.address.toUpperCase()}
            </li>
            <li>
              <span>Ciudad:</span> {shippAddres.city.toUpperCase()}
            </li>
          </ul>
          {shippingAddress.addres}
        </div>
      </div>
      <div className="card">
        <div className="card_title">
          <h2>Metodo de Pago</h2>
        </div>
        <div className="card_body">
          <ul>
            <li>Metodo de pago: {paymentMethod}</li>
          </ul>
        </div>
      </div>
      <div className="card">
        {cartItems.length === 0 ? (
          <div> El Carrito esta Vacio </div>
        ) : (
          <>
            <h2 className="title-cart">
              {cartItems.length}{' '}
              {cartItems.length == 1 ? 'Articulo' : 'Articulos'} en el Carrito
            </h2>
            {cartItems.map((item) => (
              <details key={item._id}>
                <summary className="cart-item">
                  <h3>{item.name} </h3>{' '}
                  <span>
                    {' '}
                    <DivisaFormater value={item.price} />{' '}
                  </span>
                </summary>
                <div>
                  <div className="cart-card">
                    <div className="img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="content">
                      <span className="cart-item-name">{item.name}</span>
                      <span>
                        <DivisaFormater value={item.price} />
                      </span>
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </>
        )}
      </div>
      <div className="card">
        <div className="card_title">
          <h2>Resumen de Pedido</h2>
        </div>
        <div className="card_body">
          <ul className="summary-items">
            <li>
              <span> Items:</span> <DivisaFormater value={itemsPrice} />{' '}
            </li>
            <li>
              <span> Tax:</span> <DivisaFormater value={taxPrice} />
            </li>
            <li>
              <span> Envio:</span> <DivisaFormater value={shippingPrice} />
            </li>
            <li>
              <span> Total:</span> <DivisaFormater value={totalPrice} />
            </li>
          </ul>
        </div>
      </div>
      <div className="card-button last-item">
        <button className="btn">CONTINUAR</button>
      </div>
    </Layout>
  );
}
