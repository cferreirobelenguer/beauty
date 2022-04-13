import React,{Component} from "react";
import styles from '../assets/css/estilos.module.css';
import decoracion4 from '../assets/images/decoracion4.png';
import decoracion5 from '../assets/images/decoracion5.png';
import decoracion7 from '../assets/images/decoracion7.png';

class Contacto extends Component{
        //Creamos referencias vinculadas a los datos que recogemos del formulario
    //Identifica cada uno de los campos del formulario
    
    nombreRef=React.createRef();
    emailRef=React.createRef();
    telefonoRef=React.createRef();
    ComentariosRef=React.createRef();
    
    state={
        user:{}
    };
    
    recibirFormulario=(e)=>{
        //  No se recarga la página
        e.preventDefault();
        
        //Se crea un objeto user y se le atribuyen los valores de los input
        //current.value se usa para coger los valores
        var user={
            nombre:this.nombreRef.current.value,
            email:this.emailRef.current.value,
            telefono:this.telefonoRef.current.value,
            comentarios:this.ComentariosRef.current.value,

        };
        this.setState({
            user:user
        });
        //Debug de los valores de los input
        console.log(this.nombreRef.current.value);
        console.log(this.emailRef.current.value);
        console.log(this.telefonoRef.current.value);
        console.log(this.ComentariosRef.current.value);

    }
    recibido=()=>{
        alert("Hola hemos recibido tus datos correctamente, en breves nos pondremos en contacto contigo");
    }
      //Funciones de los eventos onChange que cambian de color el fondo de la caja cuando se aplican cambios en el input
    cajaNombre=()=>{
        
        document.getElementsByName("nombre")[0].style.backgroundColor="#F3AFC9";
    }
    cajaEmail=()=>{
        
        document.getElementsByName("email")[0].style.backgroundColor="#F3AFC9";
    }
    cajaTelefono=()=>{
        
        document.getElementsByName("telefono")[0].style.backgroundColor="#F3AFC9";
        
    }
    cajaComentario=()=>{
        
        document.getElementsByName("comentarios")[0].style.backgroundColor="#F3AFC9";
        
    }
    
    render(){
         //Se crea una variable user que señala al objeto
        if(this.state.user.nombre){
            var user=this.state.user;
        }
        return(
            <div className={styles.ContactoFondo}>
            
                <div className="d-flex flex-column bd-highlight mb-3" id={styles.contenidoNosotros}>
                    <div class="d-flex flex-row-reverse" data-aos="zoom-in"><img src={decoracion4} id={styles.decoracion4} width="110" heigth="110" className="img-fluid"></img></div>
                    <div class="d-flex justify-content-center"><h1 className={styles.tituloNosotros}>¡Contacta con nosotros!</h1></div>
                    <div class="d-flex justify-content-center"><br></br></div>
                    <div class="d-flex justify-content-center"><h6 id={styles.blogCabecera}>¡No dudes en contactarnos, estamos en tu disposición!</h6></div>
                    <div class="d-flex justify-content-rigth" data-aos="zoom-in"><img src={decoracion5} id={styles.decoracion5} width="110" heigth="110" className="img-fluid"></img></div>
                    <div class="d-flex justify-content-center"><br></br></div>
                </div>
                <div className="d-flex flex-column bd-highlight mb-3" id={styles.contenidoFormulario}>
                    <center>
                {/*Mostrar datos del formulario
                Se imprimen los datos del objeto user a medida 
                que se van escribiendo en el formulario*/}
            
                {/*Formulario con React*/}
                {/*Eventos onChange para aplicar el foco en la siguiente caja*/}
                    <form className="formulario" onSubmit={this.recibirFormulario} onChange={this.recibirFormulario}>
                        <p>
                            <label htmlFor="">Nombre&nbsp;&nbsp;&nbsp;</label>
                            <input type="text" ref={this.nombreRef} name='nombre' onChange={this.cajaNombre} id={styles.estiloCajas}/>
                        </p>
                        <p>
                            <label htmlFor="">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <input type="email" ref={this.emailRef} name='email' onChange={this.cajaEmail} id={styles.estiloCajas}/>
                        </p>
                        <p>
                            <label htmlFor="">Teléfono&nbsp;&nbsp;&nbsp;</label>
                            <input type="text" ref={this.telefonoRef} name='telefono' onChange={this.cajaTelefono} id={styles.estiloCajas}/>
                        </p>
                        <p>
                            <br></br>
                            <textarea cols="32" rows='10' ref={this.ComentariosRef} name='comentarios' onChange={this.cajaComentario} id={styles.estiloCajas}></textarea>
                        </p>
                    
                        <input type="submit" className="text-decoration-none btn" value="Enviar" id={styles.botonTratamientos} onClick={this.recibido}/>&nbsp;&nbsp;&nbsp;
                        <input type="reset" className="text-decoration-none btn" value="Limpiar" id={styles.botonTratamientos}/>
                </form>
                <div className="d-flex  justify-content-center"><br></br></div>
                <div className="d-flex  justify-content-center"><br></br></div>
                {this.state.user.nombre && 
                    <div id="user-data">
                        
                        <h1>Gracias por escribirnos {user.nombre}</h1>
                        
                    </div>
                }
                </center>
                
                <div class="d-flex justify-content-center" data-aos="zoom-in"><img src={decoracion7} id={styles.decoracion7} width="150" heigth="150" className="img-fluid"></img></div>
                </div>
            </div>
            
        );
    }
}
export default Contacto;