import React,{Component} from "react";

import higieneHydral from '../assets/images/hidralInfusion.png';
import peeling from '../assets/images/Peeling.png';
import higiene from '../assets/images/facialPurifying.png';
import maquillaje from '../assets/images/maquillaje.png';
import styles from '../assets/css/estilos.module.css';
import decoracion4 from '../assets/images/decoracion4.png';
import decoracion5 from '../assets/images/decoracion5.png';

class Tratamientos extends Component{

    render(){
    
        return(
            <div className={styles.tratamientosFondo}>
    
                <div className="d-flex flex-column bd-highlight mb-3" id={styles.contenidoNosotros}>
                    <div class="d-flex flex-row-reverse" data-aos="zoom-in"><img src={decoracion4} id={styles.decoracion4} width="110" heigth="110" className="img-fluid"></img></div>
                    <div class="d-flex justify-content-center"><h1 className={styles.tituloNosotros}>Nuestros tratamientos</h1></div>
                    <div class="d-flex justify-content-center"><br></br></div>
                    <div class="d-flex justify-content-center"><h2 className={styles.tituloNosotros2}>Reserva ya</h2></div>
                    <div class="d-flex justify-content-rigth" data-aos="zoom-in"><img src={decoracion5} id={styles.decoracion5} width="110" heigth="110" className="img-fluid"></img></div>
                    <div class="d-flex justify-content-center"><br></br></div>
                </div>
                
                <div className="d-flex flex-column bd-highlight mb-3" id={styles.facial}>
                    <div className="d-flex  justify-content-center">
                        <img src={higiene}  width="1200" height="800" className="img-fluid" alt="higieneFacial"/>
                    </div>
                    
                    <div className="d-flex  justify-content-center" id={styles.higieneFacial}>
                        <div class="mt-4 p-5  text-dark rounded">
                            <h1>Higiene Facial Purifying</h1>
                            <div >
                                <div class="d-flex justify-content-center">
                                    <details>
                                        <summary className={styles.higieneFacial2}></summary>
                                        <h6>Higiene facial completa que purifica la piel en todos los niveles. Resultado: una piel limpia, resplandeciente e inmensamente purificada.</h6>
                                        <h6>Precio 49 €</h6>
                                    </details>
                                </div>
                            </div>
            
                        </div>   
                    </div>
                    
                </div>
                <div className="d-flex flex-column bd-highlight mb-3" id={styles.hidral}>
                    <div className="d-flex  justify-content-center">
                        <img src={higieneHydral}  width="1200" height="800" className="img-fluid" alt="higieneFacial"/>
                    </div>
                    
                    <div className="d-flex  justify-content-center" id={styles.higieneHydral}>
                        <div class="mt-4 p-5  text-dark rounded">
                            
                            <h1>Limpieza Hydral Infusión</h1>
                            <div className={styles.hidral2}>
                            <div class="d-flex justify-content-center">
                                    <details>
                                        <summary className={styles.higieneFacial2}></summary>
                                        <h6>Limpieza completa de  la piel con tecnología Hydral infusión</h6>
                                        <h6>Precio 70 €</h6>
                                    </details>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column bd-highlight mb-3" id={styles.containerPeeling}>
                    <div className="d-flex  justify-content-center">
                        <img src={peeling}  width="1200" height="800" className="img-fluid" alt="higieneFacial"/>
                    </div>
                    
                    <div className="d-flex  justify-content-center" id={styles.higienePeeling}>
                        <div class="mt-4 p-5  text-dark rounded">
                            <h1>Limpieza Hydral Infusión</h1>
                            <div className={styles.peeling2}>
                            <div class="d-flex justify-content-center">
                                    <details>
                                        <summary className={styles.higieneFacial2}></summary>
                                        <h6>Tratamiento con peelings puros que tienen una acción renovadora de la piel por lo tanto una mejora de la calidad de la piel</h6>
                                        <h6>Precio 80 €</h6>
                                    </details>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column bd-highlight mb-3" id={styles.containerMakeUp}>
                    <div className="d-flex  justify-content-center">
                    <img src={maquillaje}  width="1200" height="800" className="img-fluid" alt="higieneFacial"/>
                    </div>
                    
                    <div className="d-flex  justify-content-center text" id={styles.maquillajeContenido}>
                        <div class="mt-4 p-5  text-dark rounded">
                            <h1>Maquillaje completo</h1>
                            <div className={styles.maquillaje2}>
                            <div class="d-flex justify-content-center">
                                    <details>
                                        <summary className={styles.higieneFacial2}></summary>
                                        <h6>Ven a ponerte guapa con nosotros, hacemos maquillaje para eventos, bodas, etc</h6>
                                        <h6 >Precio 70 €</h6>
                                    </details>
                                </div>
                                
                            </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            
        );
    }

}
export default Tratamientos;