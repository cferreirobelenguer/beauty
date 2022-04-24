import React,{Component} from "react";
import portadaHome from '../assets/images/portadaHome.jpg';
import decoracion2 from '../assets/images/decoracion2.png';
import decoracion3 from '../assets/images/decoracion3.png';
import facebookPortada from '../assets/images/facebookPortada.png';
import styles from '../assets/css/estilos.module.css';
import { Link } from 'react-router-dom';


class Home extends Component{
    //Página de home con enlace directo a tratamientos y carrusel de novedades

    render(){
        
        //Función que aplica filtro gris a la foto de tratamientos
        function conFiltro(e){
            e.target.style.filter='grayscale(50%)';
        }
        function sinFiltro(e){
            e.target.style.filter='grayscale(0%)';
        }
        //Función para cambiar color de letra de div de ofertas
        function colorear(e){
            e.target.style.color="#7AF7C5";
        }
        function NoColorear(e){
            e.target.style.color="#FFFFFF";
        }
        
    
        return(
            
            <div className={styles.fondo}>
        
                <div className={styles.verTratamientos}>
                    {/*Flexbox horizontal*/}
                    <div className="d-flex flex-row bd-highlight mb-3">
                        <div >
                        <div className="p-2 bd-highlight" data-aos="fade-left"><img onMouseEnter={conFiltro} onMouseLeave={sinFiltro} id={styles.fotoPrincipal}  src={portadaHome} width="500" height="500" className="img-fluid" alt="portada"/></div>
                        </div>

                            
                        <div className="d-flex flex-column bd-highlight mb-3 justify-content-center">
                            <div className="d-flex  justify-content-center">
                                <div class="mt-4 p-5  text-dark rounded">
                                    <h1 className={styles.letraTitulo}>&nbsp;&nbsp;Déjate mimar</h1>
                                    <h3 className={styles.letraDescubreTratamientos}>&nbsp;&nbsp;Descubre nuestros tratamientos</h3>
                                    <button className="text-decoration-none btn" id={styles.botonTratamientos}><Link to="/Tratamientos" className="text-decoration-none text-light" >Tratamientos</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className={styles.Ofertas}>
                    <div class="mt-4 p-5  text-white rounded">
                        <h2 className="text-ligth" onMouseEnter={colorear} onMouseLeave={NoColorear}>Oferta de Primavera&nbsp;&nbsp;<svg className={styles.icono} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"/></svg></h2>
                        <h5 className="text-ligth">Todos nuestros tratamientos al 10 %</h5>
                        <p className="text-ligth">Promoción válida hasta junio</p>
                    </div>
                </div>
                <div className="d-flex flex-column bd-highlight mb-3" id={styles.contenedorProductos}>
                        <div className="d-flex flex-row-reverse" data-aos="zoom-in"><img id={styles.fotoDecoracion} src={decoracion2} width="200" height="200" className="img-fluid" alt="fotoEstrellas"/></div>
                        <div className="d-flex  justify-content-center" data-aos="fade-down"><h1 className={styles.letraProductos} id="letraProductos2"> ¿A qué esperas?</h1></div>
                        <div className="d-flex  justify-content-center" data-aos="fade-down"><h3 className={styles.letraPrimavera}>¡Pon a punto tu piel para la primavera!</h3></div>
                        <div className="d-flex  justify-content-center"><br></br></div>
                        <div className="d-flex  justify-content-center" data-aos="zoom-in">
                        <button className="text-decoration-none btn" id={styles.botonTratamientos}><Link to="/menuCita" className="text-decoration-none text-light" >Pide cita</Link></button>
                        
                </div>
                        <div className="d-flex  justify-content-center"><br></br></div>
                        <div className="d-flex  justify-content-center"><br></br></div>
                        <div className="d-flex  justify-content-center"><br></br></div>
                        <div className="d-flex  justify-content-center"><br></br></div>
                        <a href="https://www.facebook.com/BeautyBot-112006418152929"><div className="d-flex  justify-content-center" data-aos="zoom-in"><img id={styles.fotoFacebook} src={facebookPortada} width="1000" height="500" className="img-fluid" alt="twitter"/></div>
                        <div className="d-flex justify-content-right" data-aos="zoom-in"><img id={styles.fotoDecoracion} src={decoracion3} width="250" height="250" className="img-fluid" alt="fotoEstrellas"/></div></a>

    
    </div>


</div>
            );
        
        }
    }
    export default Home;