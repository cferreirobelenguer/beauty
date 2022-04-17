import React,{Component} from "react";
import styles from '../assets/css/estilos.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import Select from 'react-select'
//Variables que van a recoger los datos del formulario
var nombre2;
var apellidos2;
var fecha2;
var hora2;
var servicio;




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
    state = {
        cita: null
    };
    
    
    
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
        //Se recogen los datos del input radio
    
        console.log(nombre2);
        console.log(apellidos2);
        console.log(fecha2);
        console.log(hora2);
        console.log(servicio);
        this.changeState();
        

    }
    
    changeState=()=>{
        this.setState({
            cita:{
                nombre:nombre2,
                apellidos:apellidos2,
                tratamientos:servicio,
                fecha:fecha2,
                hora:hora2
            }
        })
    }
    /*ESTO HAY QUE REVISARLO PORQUE NO FUNCIONA
    LA RECOGIDA DE DATOS DEL FORMULARIO ESTÁ CORRECTA PERO LA PETICIÓN NO FUNCIONA POR LOS PARÁMETROS
    EL OBJETO ESTÁ BIEN PERO SIGUE SIN FUNCIONAR LA PETICIÓN*/
    
    
    //Petición http por post para guardar el artículo
    reservarCita=()=>{
        axios.post('http://localhost:3900/api/save',this.state.cita)
        .then(res=>{
            console.log(res.data);
            console.log(this.state.cita);
            if(res.data.cita){
                this.setState({
                    cita:res.data.cita,
                    status:'sucess'
                })
            }else{
                this.setState({
                    status:'failed'
                })
            }
        })
    }
    
    render(){
        
        return(
            <div className={styles.pideCitaFondo}>
                <section id={styles.rotuloVeCita}>
                    <center>
                    <h1>Pedir cita</h1>
                    <div className="d-flex  justify-content-center"><br></br></div>
                    <div className="d-flex  justify-content-center"><br></br></div>
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
                    </center>
                </section>
                <section className={styles.menuOpciones}>
                        <button className="text-decoration-none btn" id={styles.botonTratamientos}><Link to="/menuCita" className="text-decoration-none text-light" >Menú de citas</Link></button>
                        <div className="d-flex justify-content-center"><br></br></div>
                        <div className="d-flex justify-content-center"><br></br></div>
                    </section>
            </div>
        );
    }
}
export default PideCita;