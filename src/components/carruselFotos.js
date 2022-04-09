import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import oferta1 from '../assets/images/oferta1.png';
import oferta2 from '../assets/images/oferta2.png';
import oferta3 from '../assets/images/oferta3.png';
import oferta0 from '../assets/images/oferta0.png';

class carruselFotos extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={oferta0} className="img-fluid" width="70" heigth="70" />
                    
                </div>
                <div>
                    <img src={oferta1} className="img-fluid" width="70" heigth="70"/>
                    
                </div>
                <div>
                    <img src={oferta2} className="img-fluid" width="70" heigth="70"/>
                    
                </div>
                <div>
                    <img src={oferta3} className="img-fluid" width="70" heigth="70" />
                    
                </div>
                
            </Carousel>
        );
        }
    }

    export default carruselFotos;