import React from "react";
import "../css/Bootstrap.css";
import { Link } from "react-router-dom";
import logotipo from "../Imagenes/logotipo.png"; 
const encabezado = () =>{
    return (    
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                <Link  to='/Inicio' >
                      <img src={logotipo} width={120} alt=''/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                      <li className="nav-item" >
                        <Link className="nav-link" to='/Inicio' >INICIO</Link>
                      </li>
                      < li className="nav-item">
                        <Link className="nav-link" to='/RealizarPedido'>PEDIDO</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to='/IngresarProducto'>PRODUCTOS</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to='/Proformas'>PROFORMAS</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to='/ListaClientes'>CLIENTES</Link>
                      </li>
                     
                      <li className="nav-item">
                        <Link className="nav-link" to='/FormInventario'>INVENTARIO</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to='/ListaUsuarios'>LISTA USUARIOS</Link>
                      </li>
                    </ul>
          <form className="d-flex" role="search" >
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
    )
}
export default encabezado;