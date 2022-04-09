import React,{Component} from "react";
import Button from '@mui/material/Button';
import styles from '../assets/css/estilos.module.css';
import onda from '../assets/images/onda.png';
import bronceador from '../assets/images/bronceador.png';
import decoracion4 from '../assets/images/decoracion4.png';
import decoracion5 from '../assets/images/decoracion5.png';

class Blog extends Component{
    render(){
            //Función que aplica filtro gris a la foto de sobre nosotros
    function conFiltro(e){
        e.target.style.filter='grayscale(50%)';
    }
    function sinFiltro(e){
        e.target.style.filter='grayscale(0%)';
    }
        return(
            <div className={styles.blogFondo}>
                {/*Onda decorativa en todas las vistas*/}
                <div className="d-flex flex-column bd-highlight mb-3">
                        <img src={onda} width="1500" height="300" className="img-fluid"></img>
                </div>
                <div className="d-flex flex-column bd-highlight mb-3" id={styles.contenidoNosotros}>
                    <div class="d-flex flex-row-reverse" data-aos="zoom-in"><img src={decoracion4} id={styles.decoracion4} width="110" heigth="110" className="img-fluid"></img></div>
                    <div class="d-flex justify-content-center"><h1 className={styles.tituloNosotros}>Nuestro blog</h1></div>
                    <div class="d-flex justify-content-center"><br></br></div>
                    <div class="d-flex justify-content-center"><h6 id={styles.blogCabecera}>Si te preocupa el estado de tu piel y quieres conocer trucos, consejos y productos para mantenerla cuidada los 365 días del año, estás en el lugar adecuado. Cada estación tiene unas características y, por ello, hay que cuidar la piel de formas distintas en verano o invierno, en primavera u otoño.</h6></div>
                    <div class="d-flex justify-content-rigth" data-aos="zoom-in"><img src={decoracion5} id={styles.decoracion5} width="110" heigth="110" className="img-fluid"></img></div>
                    <div class="d-flex justify-content-center"><br></br></div>
                </div>
                <div className={styles.portadaNosotros} data-aos="fade-down">
                    <img src={bronceador} onMouseEnter={conFiltro} onMouseLeave={sinFiltro} width="1300" height="1300" className="img-fluid"></img>
                </div>
                
                
            </div>
        );
    }
}
export default Blog;