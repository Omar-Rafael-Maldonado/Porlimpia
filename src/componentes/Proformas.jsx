import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import Encabezado from './Encabezado';


import { Table } from 'react-bootstrap';
import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
const Proformas = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //const handleClose2 = () => setShow(false);
    //const handleShow2 = () => setShow(true);
    return (


        <section className="vh-100">
            <Encabezado/>

            <div className="content-wrapper container-sm" >
                <div className="content-body">
                    <div className="row match-height">
                        <div className="col-md-12">
                            <div className="row match-height">
                                <div className="col-md-12 p-3 mb-2">

                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Buscar Proformas Emitidas</h4>
                                            <div className="row">
                                                <div className="col-md-6 col-12 mb-1">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <button className="btn btn-outline-primary"
                                                                type="button" rippleEffect>
                                                                <i className="bi bi-search"></i>

                                                            </button>
                                                        </div>
                                                        <input type="text" className="form-control"
                                                            placeholder="Buscar" />

                                                    </div>
                                                </div>

                                                <div className="col-md-6 col-12 mb-1">

                                                    <Button variant="primary ml-1 float-right" onClick={handleShow}>
                                                        <i className="bi bi-plus"></i> Nuevo
                                                    </Button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Lista de Proformas Emitidas </h4>
                                    <div className="row">
                                        <div className="table-responsive"></div>
                                        <Table striped bordered hover size="sm">
                                            <thead >
                                                <tr>
                                                    
                                                    <th>Codigo</th>
                                                    <th>Empresa</th>
                                                    <th>Fecha</th>
                                                    <th>Ruc</th>
                                                    <th>Dirección</th>
                                                    <th>Teléfono</th>
                                                    <th>Correo</th>                                                   
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Pr0034</td>
                                                    <td>La Sureñita</td>
                                                    <td>03/12/2022</td>
                                                    <td>1101800405001</td>
                                                    <td>Quito y Bolivar esquina</td>
                                                    <td>0933617290</td>
                                                    <td>Sureña@gmail.com</td>                                             
                                                    <td>
                                                        <ButtonGroup aria-label="Basic example">
                                                            <Button variant="primary" onClick={handleShow}>&nbsp; <i className="bi bi-pencil-square" ></i> Ver Detalles &nbsp;</Button>

                                                            <Button variant="danger"> <i className="bi bi-trash3-fill"></i> Eliminar</Button>
                                                            <Button variant="primary" >&nbsp; <i className="bi bi-pencil-square" ></i>  &nbsp; &nbsp; &nbsp;Facturar &nbsp;</Button>

                                                        </ButtonGroup>
                                                    </td>
                                                </tr><tr>
                                                    <td>Pr0033</td>
                                                    <td>TranSur</td>
                                                    <td>02/12/2022</td>
                                                    <td>1101800405001</td>
                                                    <td>MIguel Riofrio &  AV. Un iversitaria</td>
                                                    <td>0994756205</td>
                                                    <td>Sur@gmail.com</td>

                                                    
                                                    <td>
                                                        <ButtonGroup aria-label="Basic example">
                                                            <Button variant="primary" onClick={handleShow}>&nbsp; <i className="bi bi-pencil-square" ></i> Ver Detalles &nbsp;</Button>

                                                            <Button variant="danger"> <i className="bi bi-trash3-fill"></i> Eliminar</Button>
                                                            <Button variant="primary" >&nbsp; <i className="bi bi-pencil-square" ></i>  &nbsp; &nbsp; &nbsp;Facturar &nbsp;</Button>

                                                        </ButtonGroup>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Pr0032</td>
                                                    <td>CompuMas</td>
                                                    <td>28/11/2011</td>
                                                    <td>1101100809001</td>
                                                    <td>Quito y Bolivar esquina</td>
                                                    <td>0999999999</td>
                                                    <td>ComputaMas34@gmail.com</td>

                                                    
                                                    <td>
                                                        <ButtonGroup aria-label="Basic example">
                                                            <Button variant="primary" onClick={handleShow}>&nbsp; <i className="bi bi-pencil-square" ></i> Ver Detalles &nbsp;</Button>

                                                            <Button variant="danger"> <i class="bi bi-trash3-fill"></i> Eliminar</Button>
                                                            <Button variant="primary" >&nbsp; <i className="bi bi-pencil-square" ></i>  &nbsp; &nbsp; &nbsp;Facturar &nbsp;</Button>

                                                        </ButtonGroup>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <>


                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>¿Deseas Registrar una nueva Proforma</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                             <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nombre de la Empresa</Form.Label>
                                <Form.Control type="string" placeholder="Ingresar Nombre de la Empresa" />
                                
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>RUC </Form.Label>
                                <Form.Control type="string" placeholder="Ingresar Identificación" />
                                
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Fecha</Form.Label>
                                <Form.Control type="string" placeholder="Ingresar Fecha" />
                                
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Dirección</Form.Label>
                                <Form.Control type="email" placeholder="Ingresar dirección" />
                               
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control type="email" placeholder="Ingresar Teléfono" />
                               
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Correo</Form.Label>
                                <Form.Control type="email" placeholder="Ingresar Correo" />
                               
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Dar permisos de administración" />
                            </Form.Group>
                         
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary">Understood</Button>
                    </Modal.Footer>
                </Modal>
            </>
<div className="content-wrapper container-sm" >
    <div className="content-body">
      <div className="row match-height">
          <div className="col-md-12">
            <div class="row match-height">
                                <div className="col-md-12 p-3 mb-2">

                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Buscar Facturas Emitidas</h4>
                                            <div className="row">
                                                <div className="col-md-6 col-12 mb-1">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <button className="btn btn-outline-primary"
                                                                type="button" rippleEffect>
                                                                <i className="bi bi-search"></i>

                                                            </button>
                                                        </div>
                                                        <input type="text" className="form-control"
                                                            placeholder="Buscar" />

                                                    </div>
                                                </div>
                                           </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Lista de Proformas Emitidas </h4>
                                    <div className="row">
                                        <div className="table-responsive"></div>
                                        <Table striped bordered hover size="sm">
                                            <thead >
                                                <tr>
                                                    <th>Nro</th>
                                                    <th>Nombre y Apellido</th>
                                                    <th>Fecha</th>
                                                    <th>RUC</th>
                                                    <th>Dirección</th>
                                                    <th>Teléfono</th>
                                                    <th>Correo</th>   
                                                    <th>Total</th>                                                                                                  
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>0215</td>
                                                    <td>Juan Perez</td>
                                                    <td>03/12/2022</td>
                                                    <td>1101800405001</td>
                                                    <td>Quito y Bolivar esquina</td>
                                                    <td>0933617290</td>
                                                    <td>Sureña@gmail.com</td>  
                                                    <td>55.63</td>                                             
                                                    <td>
                                                        <ButtonGroup aria-label="Basic example">
                                                            <Button variant="primary" onClick={handleShow}>&nbsp; <i className="bi bi-pencil-square" ></i> Ver Detalles &nbsp;</Button>

                                                            <Button variant="danger"> <i class="bi bi-trash3-fill"></i> Eliminar</Button>
                                                        </ButtonGroup>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>0214</td>
                                                    <td>Maria Campoverde</td>
                                                    <td>28/11/2011</td>
                                                    <td>1101100809001</td>
                                                    <td>Quito y Bolivar esquina</td>
                                                    <td>0999999999</td>
                                                    <td>Mar-cam34@gmail.com</td> 
                                                    <td>167.15</td>                                                   
                                                    <td>
                                                        <ButtonGroup aria-label="Basic example">
                                                            <Button variant="primary" onClick={handleShow}>&nbsp; <i className="bi bi-pencil-square" ></i> Ver Detalles &nbsp;</Button>

                                                            <Button variant="danger"> <i class="bi bi-trash3-fill"></i> Eliminar</Button>
                                                        </ButtonGroup>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
            
    );
};


export default Proformas;