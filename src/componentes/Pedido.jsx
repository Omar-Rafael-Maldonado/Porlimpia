import React from "react";
import '../css/formInvSty.css';
import Encabezado from './Encabezado';

function Pedido(props) {
    return(
        <div>
            <Encabezado/>
            <form className="formulario-pedidos">
                <input className="input-prod" type="text" placeholder="Producto" name="producto" />
                <input className="input-desc" type="text" placeholder="Descripcion" name="descripcion" />
                <input className="input-cant" type="text" placeholder="Cantidad" name="Cantidad" />
                <input className="input-desc" type="text" placeholder="Descuento" name="Descuento" />
                <input className="input-total" type="text" placeholder="Total" name="Tota" />
                <button className="comprar" type="submit">Comprar</button>
            </form>
        </div>
        
    );
}
export default Pedido;