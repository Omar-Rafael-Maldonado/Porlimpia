import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import Encabezado from './Encabezado';


import { Table } from 'react-bootstrap';
import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
const ListaUsuarios = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow(false);
    const handleShow2 = () => setShow(true);
    return (


        <section className="vh-100">
            <Encabezado/>

            <div class="content-wrapper container-sm" >
                <div class="content-body">
                    <div class="row match-height">
                        <div class="col-md-12">
                            <div class="row match-height">
                                <div class="col-md-12 p-3 mb-2">

                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="card-title">Usuarios Registrados</h4>
                                            <div class="row">
                                                <div class="col-md-6 col-12 mb-1">
                                                    <div class="input-group">
                                                        <div class="input-group-prepend">
                                                            <button class="btn btn-outline-primary"
                                                                type="button" rippleEffect>
                                                                <i class="bi bi-search"></i>

                                                            </button>
                                                        </div>
                                                        <input type="text" class="form-control"
                                                            placeholder="Buscar" />

                                                    </div>
                                                </div>

                                                <div class="col-md-6 col-12 mb-1">

                                                    <Button variant="primary ml-1 float-right" onClick={handleShow}>
                                                        <i class="bi bi-plus"></i> Nuevo
                                                    </Button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Lista de Usuarios Registrados </h4>
                                    <div class="row">
                                        <div class="table-responsive"></div>
                                        <Table striped bordered hover size="sm">
                                            <thead >
                                                <tr>
                                                    <th>#</th>
                                                    <th>Nombre</th>
                                                    <th>Apellido</th>
                                                    <th>Cédula</th>

                                                    <th>Roll</th>
                                                    <th>Usuario</th>
                                                    <th>Estado</th>
                                                    <th>Contraseña</th>
                                                    <th>Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Omar</td>
                                                    <td>Maldonado</td>
                                                    <td>1104973712</td>
                                                    <td>administrado</td>
                                                    <td>usuario@gmail.com</td>

                                                    <td>*******</td>
                                                    <td>Activo</td>
                                                    <td>
                                                        <ButtonGroup aria-label="Basic example">
                                                            <Button variant="primary" onClick={handleShow}>&nbsp; <i class="bi bi-pencil-square" ></i> Editar &nbsp;</Button>

                                                            <Button variant="danger"> <i class="bi bi-trash3-fill"></i> Eliminar</Button>
                                                        </ButtonGroup>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Pepe</td>
                                                    <td>Jiménez</td>
                                                    <td>1104973712</td>
                                                    <td>empleado</td>
                                                    <td>usuario@gmail.com</td>


                                                    <td>*******</td>
                                                    <td>Activo</td>
                                                    <td>
                                                        <ButtonGroup aria-label="Basic example" aline>

                                                            <Button variant="primary" onClick={handleShow}>&nbsp; <i class="bi bi-pencil-square" ></i> Editar &nbsp;</Button>

                                                            <Button variant="danger"> <i class="bi bi-trash3-fill"></i> Eliminar</Button>
                                                        </ButtonGroup>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Juan</td>
                                                    <td>Perez</td>
                                                    <td>1104973712</td>
                                                    <td>administrado</td>
                                                    <td>usuario@gmail.com</td>


                                                    <td>*******</td>
                                                    <td>Activo</td>
                                                    <td>
                                                        <ButtonGroup aria-label="Basic example" float-right>

                                                            <Button variant="primary" onClick={handleShow}>&nbsp; <i class="bi bi-pencil-square" ></i> Editar &nbsp;</Button>

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
            <>


                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>¿Quieres registrar un nuevo usuario?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                             <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="string" placeholder="Ingresar Nombres" />
                                
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Apellidos</Form.Label>
                                <Form.Control type="string" placeholder="Ingresar Apellidos" />
                                
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Cédula</Form.Label>
                                <Form.Control type="string" placeholder="Ingresar Cédula" />
                                
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Ingresar email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Contraseña" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Dar persmisos de administración" />
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
            
        </section>
    );



};


export default ListaUsuarios