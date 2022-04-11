import React,{Component} from "react";
import styles from '../assets/css/estilos.module.css';
import bronceador from '../assets/images/broncearse.png';
import decoracion4 from '../assets/images/decoracion4.png';
import decoracion5 from '../assets/images/decoracion5.png';
import logo from '../assets/images/logo.png';
import Avatar from '@mui/material/Avatar';

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
        
                <div className="d-flex flex-column bd-highlight mb-3" id={styles.contenidoNosotros}>
                    <div class="d-flex flex-row-reverse" data-aos="zoom-in"><img src={decoracion4} id={styles.decoracion4} width="110" heigth="110" className="img-fluid"></img></div>
                    <div class="d-flex justify-content-center"><h1 className={styles.tituloNosotros}>Nuestro blog</h1></div>
                    <div class="d-flex justify-content-center"><br></br></div>
                    <div class="d-flex justify-content-center"><h6 id={styles.blogCabecera}>Si te preocupa el estado de tu piel y quieres conocer trucos, consejos y productos para mantenerla cuidada los 365 días del año, estás en el lugar adecuado. Cada estación tiene unas características y, por ello, hay que cuidar la piel de formas distintas en verano o invierno, en primavera u otoño.</h6></div>
                    <div class="d-flex justify-content-rigth" data-aos="zoom-in"><img src={decoracion5} id={styles.decoracion5} width="110" heigth="110" className="img-fluid"></img></div>
                    <div class="d-flex justify-content-center"><br></br></div>
                </div>
                <div className={styles.portadaNosotros} data-aos="fade-down">
                    <img src={bronceador} onMouseEnter={conFiltro} onMouseLeave={sinFiltro} width="1000" height="1000" className="img-fluid"></img>
                </div>
                <div className="d-flex flex-column bd-highlight mb-3" id={styles.contenidoNosotros}>
                    <div class="d-flex justify-content-center">
                        
                        <div class="d-flex justify-content-center" id={styles.bronceado}>
                            <h2>Beneficios de un buen bronceado</h2>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center">
                        {/*Se abren los post cuando se pulsa sigue leyendo a través de las etiquetas details y summary*/}
                        <details>
                            <summary id={styles.contenidoBronceado}>Sigue leyendo</summary>
                            <div class="d-flex justify-content-center" id={styles.contenidoBronceado}>
                            
                            <h6>En el post de hoy, quiero compartir con vosotras los productos que estoy utilizando cuando voy a la plata o a la piscina y así mi piel está totalmente protegida, ¿os apetece?
                                <br></br>1. Leche protectora hidratante para el cabello. Nuxe: este producto es genial para proteger el cabello y el cuero cabelludo del sol, el cloro, la sal, al tiempo que repara y da un buen aspecto a la melena.<br>
                                </br>
                                2. Bálsamo protector del sol para labios con SPF20. Kiko: es muy cómodo de llevar ya que no ocupa espacio y además es muy higiénico porque se aplica directamente del envase a la boca y no hace falta meter los dedos en tarritos que siempre acaban llenos de arena.
                                <br></br>
                                Contiene filtros frente a los rayos UVA-UVB para una protección solar completa e ingredientes con principios activos de acción calmante e hidratante.
                                <br></br>
                                3. Write oil-free brillant con SPF50+++. Nautra Bissé: Es esclusivamente para el rostro y además de aportar un buen tono de luminosidad a la piel, es también tratamiento ya que va atenuando las manchas.
                                <br></br>
                                4. Spray SPF50+ protect. A-Derma: este fluido protector es perfecto para pieles frágiles o sensibles. No blanquea y se extiende muy fácilmente. Este es el que utilizo generalmente para el cuerpo. <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                                </svg>
                            </h6>
                            </div>
                            <div class="d-flex justify-content-rigth" id={styles.bronceado}>
                            Publicado por&nbsp;&nbsp; <Avatar alt="beautyBlog" src={logo}/>&nbsp;
                            </div>
                        </details>
                    </div>
                    
                    
                </div>
                
                
            </div>
        );
    }
}
export default Blog;