import React,{Component} from "react";
import styles from '../assets/css/estilos.module.css';
import onda from '../assets/images/onda.png';

class VeCita extends Component{
    render(){
        return(
            <div className={styles.veCitaFondo}>
                {/*Onda decorativa en todas las vistas*/}
                <div className="d-flex flex-column bd-highlight mb-3">
                    <img src={onda} width="1500" height="300" className="img-fluid"></img>
                </div>
            </div>
        );
    }
}
export default VeCita;