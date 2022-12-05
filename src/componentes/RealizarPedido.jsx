import React from 'react';
import '../css/Bootstrap.css';
import '../css/prueba.css';
//import MenusView from './MenusView';
import Encabezado from './Encabezado';
const RealizarPedido = () => {
    return (
        <div className='row'>
            <Encabezado/>  
            <h1 className='text-center'>
                Lista de Productos
                    </h1>
                <div>
                <h4>
                   
                    </h4>
                </div>
                <div className='row'>
                    <table className='table table-success table-striped'>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Marca</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Imagen</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Detergente</td>
                                <td>Dish</td>
                                <td>$2.00</td>
                                <td>
                                    <img src='https://repuestoslineablanca.com/24014-large_default/DETERGENTE_LAVAPLATOS_DISH_LAV_TODAS_LAS_MARCAS.jpg'
                                    width="250" height="150" alt=''></img>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Detergente Liquido</td>
                                <td>Dish</td>
                                <td>$2.75</td>
                                <td>
                                    <img src='https://www.sukasa.com/220247-medium_default/detergente-liquido-para-maquina-lavavajillas-dish-lav.jpg'
                                    width="250" height="150" alt=''></img>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Detergente para Maquina</td>
                                <td>Binne</td>
                                <td>$5.00</td>
                                <td>
                                    <img src='https://www.sukasa.com/216877-medium_default/detergente-liquido-para-lavavajillas-citrus-200ml-binner.jpg'
                                    width="250" height="150" alt=''></img>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Trapeador multiuso</td>
                                <td>Estrella</td>
                                <td>$4.00</td>
                                <td>
                                    <img src='https://storage.googleapis.com/miles-assets-bucket/5cddee38-ddd5-427a-a923-0033fd4f95b0/fe130552-c892-4b24-a817-d7204f69f3b2.jpg'
                                    width="250" height="150" alt=''></img>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Balde </td>
                                <td>Dish</td>
                                <td>$3.00</td>
                                <td>
                                    <img src='http://plapasa.com/storage/productos/August2021/lZEoK8qHskmW1Qug6WsL.png'
                                    width="250" height="150" alt=''></img>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Guantes</td>
                                <td>Master</td>
                                <td>$5.00</td>
                                <td>
                                    <img src='https://http2.mlstatic.com/D_NQ_NP_723400-MEC51525628195_092022-V.jpg'
                                    width="250" height="150" alt=''></img>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td>Alchol</td>
                                <td>Weir</td>
                                <td>$5.00</td>
                                <td>
                                    <img src='https://kywitiendaenlinea.com/wp-content/uploads/2021/02/43403.jpg'
                                    width="250" height="150" alt=''></img>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row"> </th>
                                <td> </td>
                                <td>Total</td>
                                <td>$26.75</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='text-center'>
                    <button type="submit" className="btn btn-success btn-lg btn-block">Solicitar Producto</button>
                    </div>
                </div>
      </div>
    );
};

export default RealizarPedido;