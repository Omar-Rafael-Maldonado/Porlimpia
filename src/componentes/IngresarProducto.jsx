import React from 'react';
//import MenusView from './MenusView';
import '../css/styles.css';
import Encabezado from './Encabezado';

const IngresarProducto = () => {
    return (
        <div className='row'>
            <Encabezado/>
            <div className='container'>
                <div className="signupFrm">
                    <div className="wrapper">
                        <form action="" className="form">
                            <h1 className="title">Ingresar productos</h1>

                            <div className="inputContainer">
                                <input type="text" className="input" placeholder="a" />
                                <label form="" className="label">Nombre</label>
                            </div>

                            <div className="inputContainer">
                                <input type="text" className="input" placeholder="a" />
                                <label form="" className="label">Descripcion</label>
                            </div>

                            <div className="inputContainer">
                                <input type="text" className="input" placeholder="a" />
                                <label form="" className="label">Cantidad</label>
                            </div>

                            <div className="inputContainer">
                                <input type="text" className="input" placeholder="a" />
                                <label form="" className="label">Marca</label>
                            </div>

                            <div className="inputContainer">
                                <input type="text" className="input" placeholder="a" />
                                <label form="" className="label">Precio</label>
                            </div>

                            <input type="submit" className="submitBtn" value="Ingresar" />
                        </form>
                    </div>
                </div>

            </div>

        </div>
    );
};
export default IngresarProducto;