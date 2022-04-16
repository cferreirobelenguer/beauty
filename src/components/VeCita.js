import React,{Component} from "react";
import styles from '../assets/css/estilos.module.css';
import axios from 'axios';
var nombre;
var apellidos;
class VeCita extends Component{
    //Creamos referencias vinculadas a los datos que recogemos del formulario
    //Identifica cada uno de los campos del formulario
    
    nombreVeCita=React.createRef();
    apellidosVeCita=React.createRef();
    
    
    recibirVeCita=(e)=>{
        //  No se recarga la página
        e.preventDefault();
        
        //Se crea un objeto user y se le atribuyen los valores de los input
        //current.value se usa para coger los valores
    
        nombre=this.nombreVeCita.current.value;
        apellidos=this.apellidosVeCita.current.value

        
    }
    //Definimos el state que va a ser el objeto que almacene los datos de la petición ajax
    state ={
        resultadosVeCita:[],
        status:null
    }
    //En getClientes se realiza la petición ajax
    getClientes=()=>{
        axios.get('http://localhost:3900/api/ver/'+nombre+'&'+apellidos)
        //Se realiza la promesa
        .then(res=>{
            //Se introducen los datos de la petición dentro del objeto resultado
            this.setState({
                resultadosVeCita:res.data.resultados2,
                //Estado sucess para indicar que la petición se ha realizado correctamente
                status:"sucess"
            })
            //Console log que muestra el objeto resultado con los datos de la petición
            console.log(this.state);
        })
    }

    render(){
        
        return(
            <section className={styles.veCitaFondo}>
                <div className="d-flex flex-column bd-highlight mb-3" id={styles.contenedorNewsletter}>
                <div class="d-flex justify-content-center" id={styles.rotuloVeCita}>
                    <h1>Citas reservadas</h1>
                </div>
                <div class="d-flex justify-content-center">
                        <form className="formulario" onSubmit={this.recibirVeCita} onChange={this.recibirVeCita}>
                            <div class="row g-3 align-items-center">
                            <div class="col-auto">
                                <label htmlFor="" class="col-form-label">Nombre&nbsp;&nbsp;&nbsp;</label>
                                <input type="text" class="form-control" ref={this.nombreVeCita} name='nombreVeCita'/>
                            </div>
                            <div className="d-flex  justify-content-center"><br></br></div>
                            <div class="col-auto">
                                <label htmlFor="" class="col-form-label">Apellidos&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                <input type="text" class="form-control" ref={this.apellidosVeCita} name='apellidosVeCita'/>
                            </div>
                            <div className="d-flex  justify-content-center"><br></br></div>
                            <div className="d-flex  justify-content-center"><br></br></div>
                        </div>  
                            <input type="submit" className="btn text-decoration-none btn" value="Enviar" id={styles.botonTratamientos} onClick={this.getClientes}/>&nbsp;&nbsp;&nbsp;
                            <input type="reset" className="btn text-decoration-none btn" value="Limpiar" id={styles.botonTratamientos}/>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}
export default VeCita;