import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const  CarouselPagPrincipal = () =>{
 

  return (

      <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://www.grafiksestudio.com/blog/wp-content/uploads/2015/01/Frase-exito1.jpg"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src="https://janpilab.com/wp-content/uploads/2021/06/12345-Limpieza-en-el-trabajo.jpg"
          alt=""
        />

      </Carousel.Item> 
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://limpiezasil.com/wp-content/uploads/2019/04/aseo-por-horas.jpg"
          alt=""
        />

      </Carousel.Item>      
    </Carousel>

  );
}
export default CarouselPagPrincipal ; 