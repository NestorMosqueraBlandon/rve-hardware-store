import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Store } from '../utils/Store';
import Link from 'next/link';
import swal from 'sweetalert';

export default function Register() {
  const router = useRouter();
  const { redirect } = router.query;
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    if (userInfo) {
      router.push('/');
    }
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const submitHandler = async (e) => {
    e.preventDefault();
    if (confirmPassword !== password) {
      swal('Las contrasenas no coinciden', 'Intenta de nuevo!', 'error');
      return;
    }
    try {
      const { data } = await axios.post(
        'https://rveapi.herokuapp.com/api/v1/users/',
        { name, email, password }
      );
      dispatch({ type: 'USER_LOGIN', payload: data });
      Cookies.set('userInfo', JSON.stringify(data));
      router.push(redirect || '/');
    } catch (err) {
      alert(err);
    }
  };
  return (
    <Layout logo="./img/logo/logo.svg" title="Registrarse">
      <form onSubmit={submitHandler}>
        <h2>Registrarse</h2>
        <p>Bienvenido de nuevo</p>

        <div className="form-group">
          <label htmlFor="">CORREO</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">NOMBRE</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        <div className="form-group">
          <label htmlFor="">CONFIRMAR CONTRASENA</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="form-group-btn">
          <input type="submit" value="Registrarse" />
        </div>
      </form>

      <div className="login-register">
        {' '}
        <span>
          {' '}
          Ya tienes una cuenta?{' '}
          <Link href="/login">
            <a className="special-text">Iniciar Sesion</a>
          </Link>{' '}
        </span>{' '}
      </div>
      {/* <Link href="/"><a> Registrarse </a></Link> */}
    </Layout>
  );
}
