import "../css/Bootstrap.css";
import "../css/inicio.css";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";


const InicioSesionView = ({ }) => {

  return (


    <section className="vh-100">





      <div className="container py-5 h-100 ">
        <div className="row d-flex align-items-center justify-content-center h-100 bg-dark text-white rounded "  >
          <div className="col-md-8 col-lg-7 col-xl-6">
            <Carousel variant="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://estaticos-cdn.prensaiberica.es/clip/b5ab479d-90da-4c51-b90e-0cdfa58dcdec_16-9-discover-aspect-ratio_default_0.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.hogarmania.com/archivos/201809/lavadora-668x400x80xX.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.listisima.com/medio/2022/05/16/como-lavar-y-cuidar-la-ropa-trucos-de-limpieza_bb58d239_220516122034_1280x720.webp"
                  alt="Third slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>



          </div>

          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 mb-#p-3 mb-2 bg-dark text-white rounded" >
            <h1 className="logo"> ProLimpia</h1> <br />
            <form >
              <div className="form-outline mb-4">
                <input
                  type="email"

                  id="form1Example13"
                  className="form-control form-control-lg"
                />

                <label className="form-label"> <i className="bi bi-envelope-at"></i>Correo:</label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  className="form-control form-control-lg"
                />

                <label className="form-label"> <i className="bi bi-bag-plus-fill"></i>Clave:</label>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
                href="https://es.stackoverflow.com" target="_blank"

              >
                <Link className="nav-link" to='/Inicio' >Iniciar sesion</Link>
              </button>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">Para registrar nuevos usuarios ingresa como admin</p>
              </div>

            </form>
          </div>


        </div>
      </div>
    </section>
  );

};

export default InicioSesionView;
