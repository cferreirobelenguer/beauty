import React,{Component} from "react";
import styles from '../assets/css/estilos.module.css';
import axios from 'axios';
import pidetucita from '../assets/images/pidetucita.png';
import { Link } from 'react-router-dom';
import Select from 'react-select'
//Variables que van a recoger los datos del formulario
var nombre2;
var apellidos2;
var fecha2;
var hora2;
var servicio;
var contenido="";




const  tratamiento= [
    { value: "higiene", label: "Higiene" },
    { value: "limpieza", label: "Limpieza" },
    { value: "peeling", label: "Peeling" },
    { value: "maquillaje", label: "Maquillaje" }
];
//Validación de formularios y alertas

class PideCita extends Component{
    state = {
        tratamientoTotal: null
    };
    
    state ={
        //Objeto que va a recoger los datos del res
        resultadosPideCita:[],
        status:null,
        contenido:""
        
    }
    //Se meten los datos del select en un objeto
    handleChange = tratamientoTotal => {
        this.setState({ tratamientoTotal });
        servicio=tratamientoTotal.value;
    };

     //Creamos referencias vinculadas a los datos que recogemos del formulario
    //Identifica cada uno de los campos del formulario
    
    nombreRef=React.createRef();
    apellidosRef=React.createRef();
    fechaRef=React.createRef();
    horaRef=React.createRef();

    

    recibirPedirCita=(e)=>{
         //  No se recarga la página
        e.preventDefault();

        
        nombre2=this.nombreRef.current.value;
        apellidos2=this.apellidosRef.current.value
        fecha2=this.fechaRef.current.value;
        hora2=this.horaRef.current.value;
        
        //Debug de los datos del formulario
        console.log(nombre2);
        console.log(apellidos2);
        console.log(fecha2);
        console.log(hora2);
        console.log(servicio);
    

    }
    

    /*FUNCIONA TODO PERO HAY QUE VALIDAR FORMULARIO, ES LO QUE QUEDA PENDIENTE YA DE ESTA VISTA Y HACER EL FRONT*/
    
    
    //Petición http por post para guardar el artículo
    reservarCita=()=>{
        contenido="";
        axios.post('http://localhost:3900/api/save/',{
            nombre:nombre2,
            apellidos:apellidos2,
            tratamiento:servicio,
            fecha:fecha2,
            hora:hora2
        })
        .then(res=>{
            
            //Se recogen los datos de la petición en resultadosPideCita y status
            this.setState({
                resultadosPideCita:res.data.datosCliente,
                //Estado sucess para indicar que la petición se ha realizado correctamente
                status:res.data.status,
                contenido:""
                
            })
            //Debug del objeto de la petición
            console.log(this.state.resultadosPideCita);
            console.log(this.state.status);
            
        })
        
    }
    
    render(){
        
        return(
            <div className={styles.pideCitaFondo}>
                <center>
                    <img src={pidetucita} width="1500" height="1000" className="img-fluid"></img>
                </center>
                
                <div className="d-flex flex-column bd-highlight mb-3" id={styles.contenedorNewsletter}>
                
                <div className="d-flex justify-content-center" id={styles.rotuloVeCita}>
                    <h1>Aquí puedes hacer tus reservas</h1>
                </div>
                    <div className="d-flex justify-content-center">
                        <form className="mid-form" onSubmit={this.recibirPedirCita} onChange={this.recibirPedirCita}>
                            <div className="row g-3 align-items-center">
                            <div className="col-auto">
                                <label htmlFor="nombre" class="col-form-label">Nombre</label>
                                <input type="text" class="form-control" ref={this.nombreRef} name='nombrePedirCita' required="required"/>
                            </div>
                            <div className="d-flex  justify-content-center"><br></br></div>
                            <div className="col-auto">
                                <label htmlFor="apellidos" class="col-form-label">Apellidos</label>
                                <input type="text" class="form-control" ref={this.apellidosRef} name='apellidosPedirCita' required="required"/>
                            </div>
                            <div className="d-flex  justify-content-center"><br></br></div>
                            <div className="col-auto">
                                <label htmlFor="tratamiento" class="col-form-label">Tratamiento</label>
                                <div className="d-flex  justify-content-center"><br></br></div>
                                <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    defaultValue={tratamiento[0]}
                                    isDisabled={false}
                                    isLoading={false}
                                    isClearable={true}
                                    isRtl={false}
                                    isSearchable={true}
                                    name="tratamiento"
                                    options={tratamiento}
                                    onChange={this.handleChange}
                                />
                            
                            </div>
                            <div className="d-flex  justify-content-center"><br></br></div>
                            <div className="col-auto">
                                <label htmlFor="fecha" class="col-form-label">Fecha;</label>
                                <input type="date" class="form-control" ref={this.fechaRef} name='fechaPedirCita' required="required"/>
                            </div>
                            <div className="d-flex  justify-content-center"><br></br></div>
                            <div className="col-auto">
                                <label htmlFor="hora" class="col-form-label">Hora;</label>
                                <input type="time" class="form-control" ref={this.horaRef} name='horaPedirCita' required="required"/>
                            </div>
                            <div className="d-flex  justify-content-center"><br></br></div>
                            <div className="d-flex  justify-content-center"><br></br></div>
                        </div>  
                            <input type="submit" className="btn text-decoration-none btn" value="Reservar" id={styles.botonTratamientos} onClick={this.reservarCita}/>&nbsp;&nbsp;&nbsp;
                            <input type="reset" className="btn text-decoration-none btn" value="Limpiar" id={styles.botonTratamientos}/>
                        </form>
                    </div>
                </div>
                <section className={styles.menuOpciones}>
                <div className="d-flex justify-content-center" >
                        <button className="text-decoration-none btn" id={styles.botonTratamientos}><Link to="/menuCita" className="text-decoration-none text-light" >Menú de citas</Link></button>
                        <div className="d-flex justify-content-center"><br></br></div>
                        <div className="d-flex justify-content-center"><br></br></div>
                </div>
                </section>
                <section id={styles.contenidoCitas}>
                <div className="d-flex justify-content-center">
            
                {  
                    this.state.status=='error'? <h4>No hemos podido procesar su solicitud</h4>:contenido="Hemos procesado su solicitud"}
                <h4>{console.log(contenido)}</h4>
                </div>

                
                </section>
            </div>
        );
    }
}
export default PideCita;