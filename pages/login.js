import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Store } from '../utils/Store';
import Link from 'next/link';

export default function Login() {
  const router = useRouter();
  const { redirect } = router.query;
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    if (userInfo) {
      router.push('/');
    }
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        'https://rveapi.herokuapp.com/api/v1/users/signin',
        { email, password }
      );


      dispatch({ type: 'USER_LOGIN', payload: data });
      Cookies.set('userInfo', JSON.stringify(data));
      router.push(redirect || '/');
    } catch (err) {
      alert(err);
    }
  };
  return (
    <Layout logo="./img/logo/logo.svg" title="Iniciar Sesion">
      <form onSubmit={submitHandler}>
        <h2>Iniciar sesión</h2>
        <p>Bienvenido de nuevo</p>

        <div className="form-group">
          <label htmlFor="">CORREO/USUARIO</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">CONTRASENA</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group-btn">
          <input type="submit" value="Iniciar sesión" />
        </div>
      </form>

      <div className="login-register">
        {' '}
        No tienes una cuenta?{' '}
        <Link href={`/register?redirect=${redirect || '/'}`} passHref>
          <a className="special-text"> Registrarse </a>
        </Link>{' '}
      </div>
      {/*  */}
    </Layout>
  );
}
