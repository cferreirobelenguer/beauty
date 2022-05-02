import React,{Component} from "react";
import styles from '../assets/css/estilos.module.css';
import axios from 'axios';
import pidetucita from '../assets/images/pidetucita.png';
import { Link } from 'react-router-dom';
import Select from 'react-select'
import Moment from 'react-moment';

//Variables que van a recoger los datos del formulario
var nombre2;
var apellidos2;
var fecha2;
var hora2;
var servicio;
var fechaRestringida;
var fechaTotal;
var fechaFormulario;

//Mostrar fecha actual para poder restringir las fechas y que el usuario no pueda elegir fechas anteriores a la actual
fechaRestringida = new Date()

let day = fechaRestringida.getDate()
let month = fechaRestringida.getMonth() + 1
let year = fechaRestringida.getFullYear()

if(month < 10){
    fechaTotal=year+"-"+"0"+month+"-"+day;
}else{
    fechaTotal=year+"-"+month+"-"+day;
}
fechaFormulario=fechaTotal.toString();

//Datos del select
const  tratamiento= [
    { value: "higiene", label: "Higiene" },
    { value: "limpieza", label: "Limpieza" },
    { value: "peeling", label: "Peeling" },
    { value: "maquillaje", label: "Maquillaje" }
];

class PideCita extends Component{
    state = {
        tratamientoTotal: null
    };
    
    state ={
        //Objeto que va a recoger los datos del res
        resultadosPideCita:[1],
        status:null,
        
        
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
        //Hago substring para comparar los dos primeros dígitos
        var horaCapturada=this.horaRef.current.value.substring(0,2);
        var rango=this.horaRef.current.value.substring(this.horaRef.current.value.length-2,this.horaRef.current.value.length);
        console.log(horaCapturada);
        console.log(rango);
        
        var rangoString=rango.toString();
        //Validación de hora
        //Se concertan citas cada hora
        if((horaCapturada>=10)&&(horaCapturada<=20)&&(rangoString=='00')){
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
    }
    
    
    //Petición http por post para guardar la reserva
    reservarCita=()=>{
        
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
                
                
            })
            //Debug del objeto de la petición
            console.log(this.state.resultadosPideCita);
            console.log(this.state.status);
            
        })
        
    }
    
    render(){
        
        return(
            
            <div>
                
                <center>
                    <img src={pidetucita} width="1500" height="1000" className="img-fluid"></img>
                </center>
                
                <div className="d-flex flex-column bd-highlight mb-3" id={styles.pideCitaFondo}>
                
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
                                {/*Se establece límite de fecha desde la actual hasta el 31 de julio*/}
                                <input type="date" class="form-control" ref={this.fechaRef} name='fechaPedirCita' min={fechaFormulario} max="2022-07-31" required />
                            </div>
                            <div className="d-flex  justify-content-center"><br></br></div>
                            <div className="col-auto">
                                <label htmlFor="hora" class="col-form-label">Hora;</label>
                                {/*Se establece límite de hora por horario de apertura de 10:00 h a 20:00 h*/}
                                {/*Con step se indica que el valor debe ser cada hora*/}
                                <input type="time" class="form-control" ref={this.horaRef} name='horaPedirCita' min="10:00" max="20:00" step="3600" required />
                            </div>
                            <div className="d-flex  justify-content-center"><br></br></div>
                            <div className="d-flex  justify-content-center"><br></br></div>
                        </div>  
                            <input type="submit" className="btn text-decoration-none btn" value="Reservar" id={styles.botonTratamientos} onClick={this.reservarCita}/>&nbsp;&nbsp;&nbsp;
                            <input type="reset" className="btn text-decoration-none btn" value="Limpiar" id={styles.botonTratamientos}/>
                        </form>
                    </div>
                
                <div className="d-flex justify-content-center"><br></br></div>
                <section id={styles.contenidoCitas}>
                <div className="d-flex justify-content-center">
        
                <div >
                {/*En caso de que el status sea error que me muestre error en la reserva, si es sucess que la reserva se ha efectuado y si es null que no me
                muestre nada porque es la primera vista inicial de la web*/
                    (() => {
                        if (this.state.status=='error')
                            return <h4>No hemos podido realizar la reserva</h4>
                        if (this.state.status=='success')
                            return <div><h4>Su reserva ha sido efectuada<br></br> Puede ver su reserva en:
                            <br></br><br></br><button className="text-decoration-none btn" id={styles.botonTratamientos}><Link to="/VeCita" className="text-decoration-none text-light" >Puedes ver tu cita aquí<br></br></Link></button>
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
export default PideCita;