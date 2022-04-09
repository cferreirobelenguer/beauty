import React,{Component} from "react";

import higieneHydral from '../assets/images/hidralInfusion.png';
import peeling from '../assets/images/Peeling.png';
import higiene from '../assets/images/facialPurifying.png';
import maquillaje from '../assets/images/maquillaje.png';
import onda from '../assets/images/onda.png';
import styles from '../assets/css/estilos.module.css';

class Tratamientos extends Component{

    render(){
    
        return(
            <div className={styles.tratamientosFondo}>
                {/*Onda decorativa en todas las vistas*/}
                <div className="d-flex flex-column bd-highlight mb-3">
                        <img src={onda} width="1500" height="300" className="img-fluid"></img>
                </div>
                <div className="d-flex flex-column bd-highlight mb-3" id={styles.facial}>
                    <div className="d-flex  justify-content-center">
                        <img src={higiene} width="1200" height="800" className="img-fluid" alt="higieneFacial"/>
                    </div>
                    
                    <div className="d-flex  justify-content-center" id={styles.higieneFacial}>
                        <div class="mt-4 p-5  text-dark rounded">
                            <h1>Higiene Facial Purifying</h1>
                            <div className={styles.higieneFacial2}>
                                <h6>Higiene facial completa que purifica la piel en todos los niveles. Resultado: una piel limpia, resplandeciente e inmensamente purificada.</h6>
                                <h6>Precio 49 €</h6>
                            </div>
            
                        </div>   
                    </div>
                    
                </div>
                <div className="d-flex flex-column bd-highlight mb-3" id={styles.hidral}>
                    <div className="d-flex  justify-content-center">
                        <img src={higieneHydral} width="1200" height="800" className="img-fluid" alt="higieneFacial"/>
                    </div>
                    
                    <div className="d-flex  justify-content-center" id={styles.higieneHydral}>
                        <div class="mt-4 p-5  text-dark rounded">
                            
                            <h1>Limpieza Hydral Infusión</h1>
                            <div className={styles.hidral2}>
                                <h6>Limpieza completa de  la piel con tecnología Hydral infusión</h6>
                                <h6>Precio 70 €</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column bd-highlight mb-3" id={styles.containerPeeling}>
                    <div className="d-flex  justify-content-center">
                        <img src={peeling} width="1200" height="800" className="img-fluid" alt="higieneFacial"/>
                    </div>
                    
                    <div className="d-flex  justify-content-center" id={styles.higienePeeling}>
                        <div class="mt-4 p-5  text-dark rounded">
                            <h1>Limpieza Hydral Infusión</h1>
                            <div className={styles.peeling2}>
                                <h6>Tratamiento con peelings puros que tienen una acción renovadora de la piel por lo tanto una mejora de la calidad de la piel</h6>
                                <h6>Precio 80 €</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column bd-highlight mb-3" id={styles.containerMakeUp}>
                    <div className="d-flex  justify-content-center">
                    <img src={maquillaje} width="1200" height="800" className="img-fluid" alt="higieneFacial"/>
                    </div>
                    
                    <div className="d-flex  justify-content-rigth" id={styles.maquillajeContenido}>
                        <div class="mt-4 p-5  text-dark rounded">
                            <h1>Maquillaje completo</h1>
                            <div className={styles.maquillaje2}>
                                <h6>Ven a ponerte guapa con nosotros, hacemos maquillaje para eventos, bodas, etc</h6>
                                <h6 >Precio 70 €</h6>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }

}
export default Tratamientos;