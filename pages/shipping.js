import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";

export default function Shipping() {
    const router = useRouter();
    const {state, dispatch} = useContext(Store);
    const {userInfo} = state;
    if(!userInfo){
        router.push('/login?redirect=/shipping')
    }

    const [name, setName] = useState('');
    const [identification, setIdentification] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');

    const submitHandler = ({name, identification, phone,address, city}) => {
        dispatch({type: 'SAVE_SHIPPING_ADDRESS', payload: {name, identification, phone,address, city}})
        Cookies.set('shippingAddress', {name, identification, phone,address, city})
         router.push('/payment')
    }

    useEffect(() => {
        if(!userInfo){
            router.push('/login?redirect=/shipping')
        }
    })
    return (
        <Layout title="Datos de Envio">
        <form onSubmit={submitHandler}>
           <h2>Datos de Envio</h2>
           <p>Ingrese sus datos lo mas especificos prosible</p> 

        
           <div className="form-group">
               <label htmlFor="">NOMBRE</label>
               <input type="text" value={name.toUpperCase()} onChange={e => setName(e.target.value)} />
           </div>
           <div className="form-group">
               <label htmlFor="">CEDULA</label>
               <input type="number" value={identification.toUpperCase()} onChange={e => setIdentification(e.target.value)} />
           </div>
           <div className="form-group">
               <label htmlFor="">TELEFONO</label>
               <input type="number" value={phone} onChange={e => setPhone(e.target.value)} />
           </div>
           <div className="form-group">
               <label htmlFor="">DIRECCION</label>
               <input type="text" value={address.toUpperCase()} onChange={e => setAddress(e.target.value)} />
           </div>
           <div className="form-group">
               <label htmlFor="">CIUDAD</label>
               <input type="text" value={city.toUpperCase()} onChange={e => setCity(e.target.value)} />
           </div>
           <div className="form-group-btn">
               <input type="submit" value="Continuar" />
           </div>
           
        </form>
        

    </Layout>
    )
}
