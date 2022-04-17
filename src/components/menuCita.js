import React,{Component} from "react";
import styles from '../assets/css/estilos.module.css';
import decoracion4 from '../assets/images/decoracion4.png';
import decoracion5 from '../assets/images/decoracion5.png';
import modificarcita from '../assets/images/modifcaCita.png';
import vercita from '../assets/images/verCita.png';
import pedircita from '../assets/images/pedirCita.png';
import eliminarcita from '../assets/images/eliminacita.png';
import { Link } from 'react-router-dom';



var total=[];
class menuCita extends Component{
    //Definimos el state que va a ser el objeto que almacene los datos de la petición ajax
/* state ={
        resultados:[],
        status:null
    }
    //Definimos componentWillMount para que se ejecute clientes antes de cargar la vista
    componentWillMount(){
        this.getClientes();
    }
    //En getClientes se realiza la petición ajax
    /*getClientes=()=>{
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
    }*/


    
    render(){
        
        return(
            <div className={styles.menuCitaFondo}>
                <div className="d-flex flex-column bd-highlight mb-3" id={styles.contenidoNosotros}>
                    <div className="d-flex flex-row-reverse" data-aos="zoom-in"><img src={decoracion4} id={styles.decoracion4} width="110" heigth="110" className="img-fluid"></img></div>
                    <div className="d-flex justify-content-center"><h1 className={styles.tituloNosotros}>Menú de citas</h1></div>
                    <div className="d-flex justify-content-center"><br></br></div>
                    <div className="d-flex justify-content-center"><h6 id={styles.blogCabecera}>Aquí puedes gestionar tus citas</h6></div>
                    <div className="d-flex justify-content-rigth" data-aos="zoom-in"><img src={decoracion5} id={styles.decoracion5} width="110" heigth="110" className="img-fluid"></img></div>
                    <div className="d-flex justify-content-center"><br></br></div>
                </div>
                
                <section className={styles.menuOpciones}>
                    <img src={pedircita} width="1500" height="500" className="img-fluid"></img>
                    <button className="text-decoration-none btn" id={styles.botonTratamientos}><Link to="/PideCita" className="text-decoration-none text-light" >Pedir cita</Link></button>
                    <div className="d-flex justify-content-center"><br></br></div>
                    <div className="d-flex justify-content-center"><br></br></div>
                    <img src={vercita} width="1500" height="500" className="img-fluid"></img>
                    <button className="text-decoration-none btn" id={styles.botonTratamientos}><Link  to="/VeCita" className="text-decoration-none text-light" >Ver citas</Link></button>
                    <div className="d-flex justify-content-center"><br></br></div>
                    <div className="d-flex justify-content-center"><br></br></div>
                    <img src={modificarcita} width="1500" height="500" className="img-fluid"></img>
                    <button className="text-decoration-none btn" id={styles.botonTratamientos}><Link to="/ModificaCita" className="text-decoration-none text-light" >Modificar cita</Link></button>
                    <div className="d-flex justify-content-center"><br></br></div>
                    <div className="d-flex justify-content-center"><br></br></div>
                    <img src={eliminarcita} width="1500" height="500" className="img-fluid"></img>
                    <button className="text-decoration-none btn" id={styles.botonTratamientos}><Link to="/EliminaCita" className="text-decoration-none text-light" >Eliminar cita</Link></button>
                    <div className="d-flex justify-content-center"><br></br></div>
                </section>
                </div> 
                /* {
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
                    })}*/
            
                
        
        );
    }
}
export default menuCita;