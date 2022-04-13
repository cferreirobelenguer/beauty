import React,{Component} from "react";
import styles from '../assets/css/estilos.module.css';
import decoracion4 from '../assets/images/decoracion4.png';
import decoracion5 from '../assets/images/decoracion5.png';
import axios from 'axios';

var total=[];
class menuCita extends Component{

    
    
    render(){
         //Petición ajax de prueba por get
        axios.get('http://localhost:3900/api/ver/Pepita&Perez')
        .then(res=>{
            //console.log(res.data.resultados2);
            total=res.data.resultados2;
            console.log(total);
            console.log(total[0].apellidos);
        
        })
        return(
            <div className={styles.menuCitaFondo}>
                <div className="d-flex flex-column bd-highlight mb-3" id={styles.contenidoNosotros}>
                    <div class="d-flex flex-row-reverse" data-aos="zoom-in"><img src={decoracion4} id={styles.decoracion4} width="110" heigth="110" className="img-fluid"></img></div>
                    <div class="d-flex justify-content-center"><h1 className={styles.tituloNosotros}>¡Pide cita!</h1></div>
                    <div class="d-flex justify-content-center"><br></br></div>
                    <div class="d-flex justify-content-center"><h6 id={styles.blogCabecera}>¡Te estamos esperando!</h6></div>
                    <div class="d-flex justify-content-rigth" data-aos="zoom-in"><img src={decoracion5} id={styles.decoracion5} width="110" heigth="110" className="img-fluid"></img></div>
                    <div class="d-flex justify-content-center"><br></br></div>
                    
                </div>
                
            </div>
        );
    }
}
export default menuCita;