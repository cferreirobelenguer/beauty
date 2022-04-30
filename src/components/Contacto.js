import React,{Component} from "react";
import styles from '../assets/css/estilos.module.css';
import decoracion4 from '../assets/images/decoracion4.png';
import decoracion5 from '../assets/images/decoracion5.png';
import decoracion8 from '../assets/images/decoracion8.png';
import newsletter from '../assets/images/newsletter.jpg';
import Swal from 'sweetalert2';
var nombreNewsletter;
var emailNewsletter;
var emailCorrecto=false;
var nombreCorrecto=false;

class Contacto extends Component{
    //Creamos referencias vinculadas a los datos que recogemos del formulario
    //Identifica cada uno de los campos del formulario
    
    nombreRef=React.createRef();
    emailRef=React.createRef();
    telefonoRef=React.createRef();
    ComentariosRef=React.createRef();
    nombreRef2=React.createRef();
    emailRef2=React.createRef();
    state={
        user:{}
    };
    //Método que recoge los datos de formulario de contacto y los valida
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
    //Método que coge los datos del formulario de newsletter y valida los datos de newsletter
    recibirFormulario2=(e)=>{
        //  No se recarga la página
        e.preventDefault();
        //Debug de los valores de los input
        console.log(this.nombreRef2.current.value);
        console.log(this.emailRef2.current.value);
        if(isNaN(this.nombreRef2.current.value)){
            nombreNewsletter=this.nombreRef2.current.value;
            nombreCorrecto=true;
            console.log("No es número nombre: "+nombreNewsletter);
            console.log("No es número nombre: "+nombreCorrecto);
        }else{
            nombreCorrecto=false;
            console.log("Sí es número nombre: "+nombreNewsletter);
            console.log("Sí es número nombre: "+nombreCorrecto);
        }
        if(this.emailRef2.current.value.indexOf("@",0)!=-1){
            emailNewsletter=this.emailRef.current.value;
            emailCorrecto=true;
            console.log("Email contiene arroba: "+emailNewsletter);
            console.log("Email contiene arroba: "+emailCorrecto);
        }else{
            emailCorrecto=false;
            console.log("Email no contiene arroba: "+emailNewsletter);
            console.log("Email no contiene arroba: "+emailCorrecto);
        }

        

    }
    //Mensaje de confirmación de que se han recibido los datos del formulario
    recibido=()=>{
        //Usamos la librería SweetAlert2 para las alertas
        
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Hemos recibido sus datos, en breves nos pondremos en contacto con usted',
                showConfirmButton: false,
                timer: 1500,
                width: 600,
                padding: '3em',
                color: '#FFF7EF',
                background: '#F3AFC9'
        
            })
    
}
     //Mensaje de confirmación de que se han recibido los datos del formulario
    recibido2=()=>{
        //Usamos la librería SweetAlert2 para las alertas
        //Si los datos de Newsletter están correctamente validados se muestra el alert sucess y si no se muestra el alert error
        if((nombreCorrecto==true)&&(emailCorrecto==true)){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Gracias por suscribirte a nuestra Newsletter',
                showConfirmButton: false,
                timer: 1500,
                width: 600,
                padding: '3em',
                color: '#FFF7EF',
                background: '#F3AFC9'
        
            })
    
        }else{
            
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'No se ha podido procesar su solicitud',
                showConfirmButton: false,
                timer: 1500,
                width: 600,
                padding: '3em',
                color: '#FFF7EF',
                background: '#F3AFC9'
        
            })
        }
}

    
    render(){
         //Se crea una variable user que señala al objeto
        if(this.state.user.nombre){
            var user=this.state.user;
        }
        return(
            
            <div className={styles.ContactoFondo}>
                
                <div className="container-fluid">
                <div className="d-flex flex-column bd-highlight mb-3" id={styles.contenidoNosotros}>
                    <div className="d-flex flex-row-reverse" data-aos="zoom-in"><img src={decoracion4} id={styles.decoracion4} width="110" heigth="110" className="img-fluid"></img></div>
                    <div className="d-flex justify-content-center"><h1 className={styles.tituloNosotros}>¡Contacta con nosotros!</h1></div>
                    <div className="d-flex justify-content-center"><br></br></div>
                    <div className="d-flex justify-content-center"><h6 id={styles.blogCabecera}>¡No dudes en contactarnos, estamos en tu disposición!</h6></div>
                    <div className="d-flex justify-content-rigth" data-aos="zoom-in"><img src={decoracion5} id={styles.decoracion5} width="110" heigth="110" className="img-fluid"></img></div>
                    <div className="d-flex justify-content-center"><br></br></div>
                </div>
                <div className="d-flex flex-column bd-highlight mb-3" id={styles.contenidoFormulario}>
                    <center>
            
                {/*Formulario con React*/}
                
                    <form className="mid-form" onSubmit={this.recibirFormulario} onChange={this.recibirFormulario}>
                    <div className="row g-3 align-items-center">
                        <div className="col-auto">
                            <label htmlFor=""  className="col-form-label">Nombre&nbsp;&nbsp;&nbsp;</label>
                            <input type="text" className="form-control" ref={this.nombreRef} name='nombre'  id={styles.estiloCajas} required="required"/>
                        </div> 
                        <div className="d-flex justify-content-center"><br></br></div>
                        <div className="col-auto">
                            <label htmlFor="" className="col-form-label">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                        
                            <input type="email" className="form-control" ref={this.emailRef} name='email'  id={styles.estiloCajas} required="required"/>
                        </div>
                        <div className="d-flex justify-content-center"><br></br></div>
                        <div className="col-auto">
                            <label htmlFor="" class="col-form-label">Teléfono&nbsp;&nbsp;&nbsp;</label>
                        
                            <input type="text" className="form-control" ref={this.telefonoRef} name='telefono' id={styles.estiloCajas} required="required"/>
                        </div>
                        <div className="d-flex justify-content-center"><br></br></div>
                        <div className="mb-3">
                            
                            <textarea className="form-control" cols="215" rows='10' ref={this.ComentariosRef} name='comentarios'  id={styles.estiloCajas} required="required"></textarea>
                        </div>
                    </div>
                        <input type="submit" className="btn text-decoration-none btn" value="Enviar" id={styles.botonTratamientos} onClick={this.recibido} />&nbsp;&nbsp;&nbsp;
                        <input type="reset" className="btn text-decoration-none btn" value="Limpiar" id={styles.botonTratamientos}/>
                    
                    </form>
                <div className="d-flex  justify-content-center"><br></br></div>
                <div className="d-flex  justify-content-center"><br></br></div>
                {/*Mensaje de saludo por enviar los datos*/}
                {this.state.user.nombre && 
                    <div id="user-data">
                {/*Mostrar datos del formulario
                Se imprimen el nombre de forma reactiva a medida 
                que se va escribiendo en el formulario*/}
                        <h1>Gracias por escribirnos {user.nombre}</h1>
                        
                    </div>
                }
                </center>
                
                <div class="d-flex justify-content-center" data-aos="zoom-in"><img src={decoracion8}  width="150" heigth="150" className="img-fluid"></img></div>
                </div>
                <div className="d-flex flex-row bd-highlight mb-3" id={styles.contenedorNewsletter}>
                <div className="d-flex flex-column bd-highlight mb-3">
                        <div className="d-flex  justify-content-center"><br></br></div>
                        <div className="d-flex  justify-content-center"><br></br></div>
                        <div className="d-flex  justify-content-center"><br></br></div>
                        <div class="d-flex justify-content-center"><h1 className={styles.tituloNews}>¡Subscribete a nuestra Newsletter!&nbsp;&nbsp;&nbsp;&nbsp;</h1></div>
                        <div className="d-flex  justify-content-center"><br></br></div>
                        <div className="d-flex  justify-content-center"><br></br></div>
                        
                        <div class="d-flex justify-content-center">
                        <form className="mid-form" onSubmit={this.recibirFormulario2} onChange={this.recibirFormulario2}>
                            <div class="row g-3 align-items-center">
                            <div class="col-auto">
                                <label htmlFor="" class="col-form-label">Nombre&nbsp;&nbsp;&nbsp;</label>
                                <input type="text" class="form-control" ref={this.nombreRef2} name='nombre2' required="required"/>
                            </div>
                            <div className="d-flex  justify-content-center"><br></br></div>
                            <div class="col-auto">
                                <label htmlFor="" class="col-form-label">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                <input type="email" class="form-control" ref={this.emailRef2} name='email2' required="required"/>
                            </div>
                            <div className="d-flex  justify-content-center"><br></br></div>
                            <div className="d-flex  justify-content-center"><br></br></div>
                        </div>  
                            <input type="submit" className="btn text-decoration-none btn" value="Enviar" id={styles.botonTratamientos} onClick={this.recibido2} />&nbsp;&nbsp;&nbsp;
                            <input type="reset" className="btn text-decoration-none btn" value="Limpiar" id={styles.botonTratamientos}/>
                        </form>
                            </div>
                    </div>
                    <div className="d-flex flex-column-reverse">
                        <img src={newsletter}  data-aos="flip-up"  width="400" heigth="400" className="img-fluid"></img>
                    </div>
                </div>
                </div>
            </div>

            
        );
    }
}
export default Contacto;