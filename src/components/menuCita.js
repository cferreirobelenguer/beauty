import React,{Component} from "react";
import styles from '../assets/css/estilos.module.css';
import decoracion4 from '../assets/images/decoracion4.png';
import decoracion5 from '../assets/images/decoracion5.png';
import axios from 'axios';

var total=[];
class menuCita extends Component{
    //Definimos el state que va a ser el objeto que almacene los datos de la petición ajax
    state ={
        resultados:[],
        status:null
    }
    //Definimos componentWillMount para que se ejecute clientes antes de cargar la vista
    componentWillMount(){
        this.getClientes();
    }
    //En getClientes se realiza la petición ajax
    getClientes=()=>{
        axios.get('http://localhost:3900/api/ver/Pepita&Perez')
        //Se realiza la promesa
        .then(res=>{
            //Se introducen los datos de la petición dentro del objeto resultado
            this.setState({
                resultados:res.data.resultados2,
                //Estado sucess para indicar que la petición se ha realizado correctamente
                status:"sucess"
            })
            //Console log que muestra el objeto resultado con los datos de la petición
            console.log(this.state);
        })
    }


    
    render(){
        
        return(
            <div className={styles.menuCitaFondo}>
                <div className="d-flex flex-column bd-highlight mb-3" id={styles.contenidoNosotros}>
                    <div class="d-flex flex-row-reverse" data-aos="zoom-in"><img src={decoracion4} id={styles.decoracion4} width="110" heigth="110" className="img-fluid"></img></div>
                    <div class="d-flex justify-content-center"><h1 className={styles.tituloNosotros}>¡Pide cita!</h1></div>
                    <div class="d-flex justify-content-center"><br></br></div>
                    <div class="d-flex justify-content-center"><h6 id={styles.blogCabecera}>¡Te estamos esperando!</h6></div>
                    <div class="d-flex justify-content-rigth" data-aos="zoom-in"><img src={decoracion5} id={styles.decoracion5} width="110" heigth="110" className="img-fluid"></img></div>
                    <div class="d-flex justify-content-center"><br></br></div>
                    {
                    this.state.resultados.map((citas)=>{
                    return(
                        <div>
                            <h1>{citas.nombre}</h1>
                            <h1>{citas.apellidos}</h1>
                            <h1>{citas.tratamiento}</h1>
                            <h1>{citas.fecha}</h1>
                            <h1>{citas.hora}</h1>
                        </div>
                    );
                    })}
                </div>
                
            </div>
        );
    }
}
export default menuCita;