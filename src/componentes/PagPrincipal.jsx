import React from "react";
import "../css/Bootstrap.css";
import "../css/inicio.css";
import CarouselPagPrincipal from  "./CarouselPagPrincipal" ;

import { Table } from 'react-bootstrap';
import Encabezado from './Encabezado';
import PiePagina from "./PiePagina";

const pagPrincipal = () =>{
    return (
        <div >
            <Encabezado/>  
            <h1 className="logo"> ProLimpia</h1> <br />
            <CarouselPagPrincipal/> 
                <div ><h1>Empleados del mes.</h1></div>
                <div className="table-responsive">
                <Table striped bordered hover size="sm">
                     <thead >
                         <tr>
                            <th>#</th>                                
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Usuario</th>
                            </tr>
                    </thead>
                    <tbody>
                            <tr>
                             <th scope="row">1</th>
                             <td>Adrian</td>
                             <td>Nuñez</td>
                             <td>@Adrian123</td>                                                                                          
                                                    
                             </tr><tr>
                             <th scope="row">2</th>
                            <td>Omar</td>
                             <td>Maldonado</td>
                             <td>@Omar1987</td>                                                                                              
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td colSpan="2">---</td>
                            <td>---</td>
                            </tr>
                    </tbody>
                </Table>            
                </div>
            <PiePagina/>
        </div>
    )
}
export default pagPrincipal;