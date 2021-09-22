import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useContext, useState } from "react"
import Layout from "../components/Layout";
import { Store } from "../utils/Store";
import swal from 'sweetalert'

export default function Payment() {
    const router = useRouter();
    const [paymentMethod, setPaymentMethod] = useState('')
    const {state, dispatch} = useContext(Store);
    const { cart: {shippingAddress}, } = state;
    useEffect(() => {
        if(!shippingAddress.address){
            router.push('/shipping');
        }else{
            setPaymentMethod(Cookies.get('paymentMethod') || '')
        }
    }, [])

    const submitHandler = (e) => {
        e.peventDefault();
        if(!paymentMethod){
            swal("El metodo de pago es requerido", "Selecciona uno!", "error");
            return;
        }else{
            dispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethod });
            Cookies.set('paymentMethod', JSON.stringify(paymentMethod));
            router.push('/placeorder');
        }
    }
    return (
        <Layout title="Metodo de Pago">
            
            <form onSubmit={submitHandler}>
            <h2>Metodo de Pago</h2>
           <p>Seleccion el metodo de pago que le resulte mas comodo</p> 

                <div className="form-group">
                    <label htmlFor="">MercadoPago (Tarjeta de Credito/PSE/Tarjeta de Debito)</label>
                    <input type="radio" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Bancolombia </label>
                    <input type="radio" />
                </div>
                <div className="form-group-btn">
               <input type="submit" value="Continuar" />
           </div>
            </form>

        </Layout>
    )
}
