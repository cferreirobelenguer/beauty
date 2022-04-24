import React,{Component} from "react";
import styles from '../assets/css/estilos.module.css';

  //Función que colorea el color de letra del correo en footer
    function colorear(e){
        e.target.style.color="#7AF7C5";
    }
    function NoColorear(e){
        e.target.style.color="#FFFFFF";
    }
class Footer extends Component{
    
    constructor() {
        super()
    
        this.state = {
            show: false,
        }
    }
    render(){
        
        const { show } = this.state
        return(
            
            <div>
                {/*Primera parte del footer*/}
                <div id={styles.parte1} >
                
                    <div class="d-flex flex-column bd-highlight mb-3" >
                    <div class="d-flex  justify-content-center">
                        <div class="d-flex flex-row bd-highlight mb-3">
                            < div class="p-2 bd-highlight"><h6 id={styles.ubicacion}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                            </svg></h6>
                            <h6 >Calle Miguel Yuste nº 35 28022 Madrid<br></br>Metro Torre Arias, línea 5</h6></div>
                        </div>
                    </div>
                    <div class="d-flex  justify-content-center">
                        <div class="d-flex flex-row bd-highlight mb-3">
                            <div class="p-2 bd-highlight"><h6 id={styles.horario}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                                </svg></h6><h6>HORARIO<br></br>Lunes: 16:00 - 20:00<br></br>Martes - Viernes: 10:00 - 20:00</h6></div>
                        </div>
                    </div>
                    
                </div>
                
                </div>
                {/*Segunda parte del footer*/}
                <div id={styles.parte2}>
                    <div className="d-flex flex-column bd-highlight mb-3" id={styles.contenedorFooter2}>
                        <div class="d-flex justify-content-center"><br></br></div>
                        <div class="d-flex justify-content-center text-light"><h5 onMouseEnter={colorear} onMouseLeave={NoColorear}>info@beauty.com</h5></div>
                        <div class="d-flex justify-content-center"><br></br></div>
                        <div class="d-flex justify-content-center"><h5  className="text-light justify-content-center">Síguenos</h5></div>
                        {/*Redirige a Twitter*/}
                        <a href="https://www.facebook.com/BeautyBot-112006418152929"><div class="d-flex justify-content-center"><h6 onMouseEnter={colorear} onMouseLeave={NoColorear} className="text-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg></h6></div></a>
                        <div class="d-flex justify-content-center"><h6 onMouseEnter={colorear} onMouseLeave={NoColorear} id={styles.copy}>Copyright 2022 - beauty</h6></div>
                        <div class="d-flex justify-content-center"><br></br></div>
                        <div class="d-flex justify-content-center"><h6 onMouseEnter={colorear} onMouseLeave={NoColorear} id={styles.copy}>Diseñado por Carol con mucho &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg></h6></div>
                        <div className={styles.contenidoNavegacion}>
            
            
                </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer;