import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";

export default function Placeorder() {
    const router = useRouter();
    const { state, dispatch } = useContext(Store);
    const { userInfo, cart: { cartItems, shippingAddress, paymentMethod } } = state;

    const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100;
    const itemsPrice = round2(cartItems.reduce((a, c) => a + c.price * c.quantity, 0));
    const shippingPrice = itemsPrice > 4500000 ? 0 : 38000;
    const taxPrice = round2(itemsPrice * 0.15);
    const totalPrice = round2(itemsPrice + shippingPrice + taxPrice);

    const [loading, setLoading] = useState(false);

    const placeOrderHandler = async () => {
        try {
            setLoading(true);
            const { data } = await axios.post('https://rveapi.herokuapp.com/api/v1/orders', { orderItems: cartItems, shippingAddress, paymentMethod, itemsPrice, shippingPrice, taxPrice, totalPrice },
                {
                    headers: {
                        authorization: `Bearer ${userInfo.token}`,
                    },
                })
            dispatch({ type: 'CART_CLEAR' });
            Cookies.remove('cartItems');
            setLoading(false);
            router.push(`/order/${data._id}`);
        } catch (err) {
            setLoading(false);
            console.log(err)
        }
    }
    return (
        <Layout title="Realizar Pedido">
            <h2>Metodo de Pago</h2>
            <p>Seleccion el metodo de pago que le resulte mas comodo</p>
        </Layout>
    )
}
