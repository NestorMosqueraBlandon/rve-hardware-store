import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Store } from '../utils/Store';

export default function Shipping() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [identification, setIdentification] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');

  const { state, dispatch } = useContext(Store);
  const {
    userInfo,
    cart: { shippingAddres },
  } = state;
  useEffect(() => {
    if (!userInfo) {
      router.push('/login?redirect=/shipping');
    }

    if (shippingAddres) {
      setName(shippingAddres.name);
      setIdentification(shippingAddres.identification);
      setPhone(shippingAddres.phone);
      setAddress(shippingAddres.address);
      setCity(shippingAddres.city);
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(identification);
    console.log(phone);
    console.log(address);
    console.log(city);
    dispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: { name, identification, phone, address, city },
    });
    Cookies.set('shippingAddress', name, identification, phone, address, city);
    router.push('/payment');
  };

  return (
    <Layout title="Datos de Envio">
      <form onSubmit={submitHandler}>
        <h2>Datos de Envio</h2>
        <p>Ingrese sus datos lo mas especificos prosible</p>

        <div className="form-group">
          <label htmlFor="">NOMBRE</label>
          <input
            type="text"
            value={name.toUpperCase()}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">CEDULA</label>
          <input
            type="number"
            value={identification.toUpperCase()}
            onChange={(e) => setIdentification(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">TELEFONO</label>
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">DIRECCION</label>
          <input
            type="text"
            value={address.toUpperCase()}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">CIUDAD</label>
          <input
            type="text"
            value={city.toUpperCase()}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="form-group-btn">
          <input type="submit" value="Continuar" />
        </div>
      </form>
    </Layout>
  );
}
