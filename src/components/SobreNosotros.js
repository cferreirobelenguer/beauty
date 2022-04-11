import React,{Component} from "react";
import styles from '../assets/css/estilos.module.css';
import decoracion4 from '../assets/images/decoracion4.png';
import decoracion5 from '../assets/images/decoracion5.png';
import decoracion6 from '../assets/images/decoracion6.png';
import decoracion7 from '../assets/images/decoracion7.png';
import SobreNosotrosImagen from '../assets/images/sobreNosotros.png';

class SobreNosotros extends Component{
    
    render(){
        //Función que aplica filtro gris a la foto de sobre nosotros
    function conFiltro(e){
        e.target.style.filter='grayscale(50%)';
    }
    function sinFiltro(e){
        e.target.style.filter='grayscale(0%)';
    }
        return(
            
            <div className={styles.fondoNosotros}>
            
                <div className="d-flex flex-column bd-highlight mb-3" id={styles.contenidoNosotros}>
                    <div class="d-flex flex-row-reverse" data-aos="zoom-in"><img src={decoracion4} id={styles.decoracion4} width="110" heigth="110" className="img-fluid"></img></div>
                    <div class="d-flex justify-content-center"><h1 className={styles.tituloNosotros}>¿Qué es beauty?</h1></div>
                    <div class="d-flex justify-content-center"><br></br></div>
                    <div class="d-flex justify-content-center"><h2 className={styles.tituloNosotros2}>Nuestra historia</h2></div>
                    <div class="d-flex justify-content-rigth" data-aos="zoom-in"><img src={decoracion5} id={styles.decoracion5} width="110" heigth="110" className="img-fluid"></img></div>
                    <div class="d-flex justify-content-center"><br></br></div>
                </div>
                <div className={styles.portadaNosotros} data-aos="fade-down">
                    <img src={SobreNosotrosImagen} onMouseEnter={conFiltro} onMouseLeave={sinFiltro} width="1310" height="1310" className="img-fluid"></img>
                </div>
                <div className="d-flex flex-column bd-highlight mb-3" id={styles.contenidoNosotros2}>
                    <div class="d-flex justify-content-center"><br></br></div>
                    <div class="d-flex justify-content-center"><h6 className={styles.tituloNosotros3}>Beauty es un lugar donde nuestra mayor prioridad es hacerte sentir especial. No sólo miramos por tu salud y tu belleza, sobre todo nuestro objetivo es hacer de tu tiempo ocn nosotros una experiencia única.<br></br>Beauty nace de la mano de grandes profesionales del mundo de la estética. De la ilusión de un proyecto en común, cuyo propósito es dejarse el alma a diario con cada una de las personas que acuden a nuestros salones.</h6></div>
                    <div class="d-flex justify-content-center"><h3 className={styles.tituloNosotros4}>¡Te esperamos!</h3></div>
                    <div class="d-flex flex-row-reverse" data-aos="zoom-in"><img src={decoracion6} id={styles.decoracion6} width="110" heigth="110" className="img-fluid"></img></div>
                    <div class="d-flex flex-row-rigth" data-aos="zoom-in"><img src={decoracion7} id={styles.decoracion7} width="110" heigth="110" className="img-fluid"></img></div>
                    <div class="d-flex justify-content-center"><br></br></div>
                </div>
                
            </div>
        );
    }
}
export default SobreNosotros;