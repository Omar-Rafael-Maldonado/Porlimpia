import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Encabezado from './componentes/Encabezado';
import PagPrincipal from './componentes/PagPrincipal';
import IngresarProducto from './componentes/IngresarProducto';
import RealizarPedido from './componentes/RealizarPedido';
import ListaClientes from './componentes/ListaClientes';
import InicioSesionView from './componentes/InicioSesionView';
import ListaUsuarios from './componentes/ListaUsuarios';
import Pedido from './componentes/Pedido';
import FormInventario from './componentes/FormInventario';

import Proformas from './componentes/Proformas';


function App() {

  return (
    <div className="App"> 
    <Router> 
    
     
     <Routes>

        <Route 
          path="/" 
            element=
              {<InicioSesionView/>}exact
        ></Route>
        <Route 
          path="/Inicio" 
            element=
              {<PagPrincipal/>}exact
        ></Route>
        <Route
          path="/RealizarPedido" 
            element=
              {<RealizarPedido/>}
        ></Route>
        <Route 
          path="/IngresarProducto" 
            element=
              {<IngresarProducto/>}
              ></Route>
        <Route 
          path="/ListaClientes" 
            element=
              {<ListaClientes/>}
              ></Route>
        <Route 
          path="/ListaUsuarios" 
            element=
              {<ListaUsuarios/>}
              ></Route>
        <Route 
          path="/Pedido" 
            element=
              {<Pedido/>}
              ></Route>
        <Route 
          path="/FormInventario" 
            element=
              {<FormInventario/>}
              ></Route>
        <Route 
          path="/Proformas" 
            element=
              {<Proformas/>}
              ></Route>
     </Routes>
    </Router> 
    <Router> 
   
    </Router> 
    </div>
  );
}

export default App;
