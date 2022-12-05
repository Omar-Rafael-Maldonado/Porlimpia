import React from "react";
import '../css/formInvSty.css';
import Encabezado from './Encabezado';

function FormInventario(props) {
    return(
        <div>
            <Encabezado/>
            <form className="formulario-inventario"> 
            <input className="codigo-input" type="text" placeholder="Codigo del Producto" name="codigo"/>
            <input className="cantidad-input" type="text" placeholder="Cantidad del producto" name="cantidad"/>
            <input className="producto-input" type="text" placeholder="Nuevo Producto" name="caracteristica"/>
            <input className="precio-input" type="text" placeholder="Precio del producto" name="precio"/>
            <bh/>
            <button className="agregar" type="submit">Agregar al Inventario</button>
        </form>
        <div className="lista-inventario">
        PRODUCTOS INGRESADOS EN EL INVENTARIO
        <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Codigo</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                    </tr>
                </tbody>
            </table>
    </div>
        </div>
        
    );
}
export default FormInventario;