import React,{Component} from "react";
import styles from '../assets/css/estilos.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Select from 'react-select'
import eliminatucita from '../assets/images/eliminatucita.png';
//Variables que van a recoger los datos del formulario
var id;

class EliminaCita extends Component{
    
    state ={
        //Objeto que va a recoger los datos del res
        resultadosEliminaCita:[],
        status:null,
        
        
    }
     //Creamos referencias vinculadas a los datos que recogemos del formulario
    //Identifica cada uno de los campos del formulario
    
    IdRef=React.createRef();

    recibirEliminarCita=(e)=>{
         //  No se recarga la página
        e.preventDefault();

        
        id=this.IdRef.current.value;
        
        //Debug de los datos del formulario
        console.log(id);
    }
    

    /*FUNCIONA TODO PERO HAY QUE VALIDAR FORMULARIO, ES LO QUE QUEDA PENDIENTE YA DE ESTA VISTA Y HACER EL FRONT*/
    
    
    //Petición http por post para guardar el artículo
    EliminarCita=()=>{
        axios.delete('http://localhost:3900/api/delete/'+id)
        .then(res=>{
            
            //Se recogen los datos de la petición en resultadosPideCita y status
            this.setState({
                resultadosEliminarCita:res.data.cliente,
                //Estado sucess para indicar que la petición se ha realizado correctamente
                status:res.data.status,
                
            })
            //Debug del objeto de la petición
            console.log(this.state.resultadosEliminarCita);
            console.log(this.state.status);
            
        })
        
    }
    
    render(){
        
        return(
            
            <div>
                <center>
                    <img src={eliminatucita} width="1500" height="1000" className="img-fluid"></img>
                </center>
                
                <div className="d-flex flex-column bd-highlight mb-3" id={styles.pideCitaFondo}>
                
                <div className="d-flex justify-content-center" id={styles.rotuloVeCita}>
                    <h1>Aquí puedes eliminar tus reservas</h1>
                </div>
                    <div className="d-flex justify-content-center">
                        <form className="mid-form" onSubmit={this.recibirEliminarCita} onChange={this.recibirEliminarCita}>
                            <div className="row g-3 align-items-center">
                            <div className="col-auto">
                                <label htmlFor="id" class="col-form-label">Por favor introduce tu número de reserva</label>
                                <input type="text" class="form-control" ref={this.IdRef} name='IdEliminarCita' required="required"/>
                            </div>
                            <div className="d-flex  justify-content-center"><br></br></div>
                            <div className="d-flex  justify-content-center"><br></br></div>
                        </div>  
                            <input type="submit" className="btn text-decoration-none btn" value="Eliminar" id={styles.botonTratamientos} onClick={this.EliminarCita}/>&nbsp;&nbsp;&nbsp;
                            <input type="reset" className="btn text-decoration-none btn" value="Limpiar" id={styles.botonTratamientos}/>
                        </form>
                    </div>
                
                <div className="d-flex justify-content-center"><br></br></div>
                <section id={styles.contenidoCitas}>
                <div className="d-flex justify-content-center">
            
                
                <div >
                {/*En caso de que el status sea error que me muestre error en la eliminación de la reserva, si es sucess que la eliminación se ha efectuado y si es null que no me
                muestre nada porque es la primera vista inicial de la web*/
                    (() => {
                        if (this.state.status=='error')
                            return <h4>La reserva que intentas eliminar no existe</h4>
                        if (this.state.status=='success')
                            return <div><h4>Tu reserva ha sido eliminada<br></br> Puedes ver tus reservas en:
                            <br></br><br></br><button className="text-decoration-none btn" id={styles.botonTratamientos}><Link to="/VeCita" className="text-decoration-none text-light" >Puedes ver tus citas aquí<br></br></Link></button>
                        </h4></div>
                        else
                            return ""
                    })()
                }
            </div>
                </div>

                
                </section>
                        <div className="d-flex justify-content-center"><br></br></div>
                <div className="d-flex justify-content-center" >
                        
                        <button className="text-decoration-none btn" id={styles.botonTratamientos}><Link to="/menuCita" className="text-decoration-none text-light" >Menú de citas</Link></button>
                        
                </div>
                <div className="d-flex justify-content-center"><br></br></div>
                        <div className="d-flex justify-content-center"><br></br></div>
                        <div className="d-flex justify-content-center"><br></br></div>
                        <div className="d-flex justify-content-center"><br></br></div>
                </div>
                
            </div>
        );
    }
}
export default EliminaCita;