import Layout from "../components/Layout";
import { Link } from "next/link";
import axios from "axios";

export default function login() {
    const submitHandler = (e) => {
        e.preventDefault();
        // const {data} = await axios.post('')
    }
    return (
        <Layout title="Iniciar Sesion">
            <form>
               <h2>Iniciar sesión</h2>
               <p>Bienvenido de nuevo</p> 

               <div className="form-group">
                   <label htmlFor="">CORREO/USUARIO</label>
                   <input type="text" />
               </div>
               <div className="form-group">
                   <label htmlFor="">CONTRASENA</label>
                   <input type="password"  />
               </div>
               <div className="form-group-btn">
                   <input type="submit" value="Iniciar sesión
" />
               </div>
               
            </form>

            <p className="login-register">No tienes una cuenta? Registrarse</p> 
 
        </Layout>
    )
}
