import axios from 'axios';
import { useRouter } from 'next/router';
import { useContext, useEffect, useReducer } from 'react';
import DivisaFormater from '../../components/DivisaFormater';
import Layout from '../../components/Layout';
import { Store } from '../../utils/Store';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, order: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      state;
  }
}

export default function Order(props) {
  const orderId = props.orderId;

  const router = useRouter();
  const { state } = useContext(Store);
  const { userInfo } = state;

  const [{ loading, error, order }, dispatch] = useReducer(reducer, {
    loading: true,
    order: {},
    error: '',
  });
  const {
    shippingAddress,
    paymentMethod,
    orderItems,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    isPaid,
    paidAt,
    isDelivered,
    deliveredAt,
  } = order;

  useEffect(() => {
    if (!userInfo) {
      return router.push('/login');
    }

    const fetchOrder = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(
          `https://rveapi.herokuapp.com/api/v1/orders/${orderId}`,
          {
            headers: { authorization: `Bearer ${userInfo.token}` },
          }
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err });
      }
    };
    if (!order._id || (order._id && order._id !== orderId)) {
      fetchOrder();
    }
  }, [order]);

  const payOrder = async () => {
    const { data } = await axios.post(
      'https://rveapi.herokuapp.com/api/v1/config/mercadopago',
      {
        title: 'PC GAMER',
        price: totalPrice,
      }
    );
  };

  return (
    <Layout>
      <h2>Pedido {orderId}</h2>
      <p>Seleccion el metodo de pago que le resulte mas comodo</p>

      {loading ? (
        <div>Cargando</div>
      ) : (
        <>
          <div className="card">
            <div className="card_title">
              <h2>Direccion de Envio</h2>
            </div>
            <div className="card_body">
              <ul>
                <li>
                  <span>Nombre:</span> {shippingAddress.name}
                </li>
                <li>
                  <span>Cedula:</span> {shippingAddress.identification}
                </li>
                <li>
                  <span>Telefono:</span> {shippingAddress.phone}
                </li>
                <li>
                  <span>Direccion:</span> {shippingAddress.address}
                </li>
                <li>
                  <span>Ciudad:</span> {shippingAddress.city}
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
            {orderItems.length === 0 ? (
              <div> El Carrito esta Vacio </div>
            ) : (
              <>
                <h2 className="title-cart">
                  {orderItems.length}{' '}
                  {orderItems.length == 1 ? 'Articulo' : 'Articulos'} en el
                  Carrito
                </h2>
                {orderItems.map((item) => (
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
            {order.paymentMethod === 'MercadoPago' ? (
              <form
                action="https://rveapi.herokuapp.com/api/v1/config/mercadopago"
                method="POST"
              >
                <input
                  type="hidden"
                  name="title"
                  value={orderItems.map((name) => name.name)}
                />
                <input type="hidden" name="price" value={order.totalPrice} />
                <input
                  type="submit"
                  value="ORDENAR"
                  className="btn btn-success"
                />
              </form>
            ) : (
              //   <button onClick={() => payOrder()} className="btn">
              //     CONTINUAR
              //   </button>
              <div>CUENTA BANCOLOMBIA</div>
            )}
            {/* */}
          </div>
        </>
      )}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;
  const _id = id;

  try {
    return {
      props: { orderId: _id },
    };
  } catch (err) {
    console.log(err);
  }
}
