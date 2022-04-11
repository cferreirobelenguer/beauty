import React,{Component} from "react";
import logo from '../assets/images/logo.png';
import menuhamburguesa from '../assets/images/menuhamburguesa.png';
import {NavLink} from 'react-router-dom';
import styles from '../assets/css/estilos.module.css';
import { Transition, animated } from 'react-spring';
import FadeIn from 'react-fade-in';


class Header extends Component{
    //Animación en icono reloj de Pide Cita
    constructor() {
        super()
    
        this.state = {
            show: false,
        }
    }
    render(){
        const { show } = this.state
        return(
            <div>
                {/*menú de navegación y logo*/}
                
        
            <div className="d-flex  justify-content-center" id={styles.cabeceraRedes1}>
                <Transition
                                //Animación con react-spring en icono reloj de pide cita
                                    items={show}
                                    from={{ opacity: 0 }}
                                    enter={{ opacity: 1 }}
                                    leave={{ opacity: 0 }}
                                    reverse={show}
                                    delay={200}
                                    onRest={() =>
                                        this.setState({
                                        show: !show,
                                        })
                                    }>
                                {(styles, item) =>
                                    item && <animated.div style={styles}>
                                10% de descuento en tratamientos</animated.div>
                                }
                </Transition>
            </div>
            <div className="d-flex flex-row-reverse" id={styles.cabeceraRedes}>               
                        <h6><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                        </svg></h6>&nbsp;&nbsp;<h6><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg></h6>&nbsp;&nbsp;<h6></h6><h6 ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg></h6></div>
        
        <div className={styles.contenidoNavegacion}>
            {/*Menú de navegación*/}
                <nav>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link"><NavLink class="text-decoration-none text-light" to="/"><h6><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L8 2.207l6.646 6.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
                            <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Zm0 5.189c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018Z"/>
                            </svg>&nbsp;&nbsp;Home</h6></NavLink></a>&nbsp;&nbsp;&nbsp;&nbsp;
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><NavLink className="text-decoration-none text-light" to="/Tratamientos"><h6 id={styles.copy}>Tratamientos</h6></NavLink></a>&nbsp;&nbsp;&nbsp;&nbsp;
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><NavLink className="text-decoration-none text-light" to="/Blog"><h6>Blog</h6></NavLink></a>&nbsp;&nbsp;&nbsp;&nbsp;
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><NavLink className="text-decoration-none text-light" to="/SobreNosotros"><h6 id={styles.copy}>Sobre Nosotros</h6></NavLink></a>&nbsp;&nbsp;&nbsp;&nbsp;
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><NavLink className="text-decoration-none text-light" to="/Contacto"><h6>Contacto</h6></NavLink></a>&nbsp;&nbsp;&nbsp;&nbsp;
                        </li>
                        <li className="nav-item">
                        <a className="nav-link"><NavLink className="text-decoration-none text-light" to="/menuCita">
                            <h6 id={styles.copy}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stopwatch-fill" viewBox="0 0 16 16">
                                    <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584.531.531 0 0 0 .013-.012l.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354a.717.717 0 0 0-.012.012A6.973 6.973 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1h-3zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0z"/>
                                    </svg>&nbsp;&nbsp;&nbsp;Pide Cita
                            </h6>
                            </NavLink></a>
                        </li>
                    </ul>
                </nav>
            
        </div>
        <div className={styles.contenidoNavResponsive}>
            <input type="checkbox"/>
                <i class="fas fa-bars"></i>
                <i class="fas fa-times"></i><img id={styles.hamburguesa} src={menuhamburguesa} width="50" heigth="50" class="img-fluid"/>
            <nav>
            <ul>
                <li><a className="nav-link"><NavLink class="text-decoration-none text-light" to="/"><h6><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L8 2.207l6.646 6.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
                            <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Zm0 5.189c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018Z"/>
                            </svg>&nbsp;&nbsp;Home</h6></NavLink></a>&nbsp;&nbsp;&nbsp;&nbsp;</li>
                <li><a className="nav-link"><NavLink className="text-decoration-none text-light" to="/Tratamientos"><h6 id={styles.copy}>Tratamientos</h6></NavLink></a>&nbsp;&nbsp;&nbsp;&nbsp;</li>
                <li><a className="nav-link"><NavLink className="text-decoration-none text-light" to="/Blog"><h6>Blog</h6></NavLink></a>&nbsp;&nbsp;&nbsp;&nbsp;</li>
                <li><a className="nav-link"><NavLink className="text-decoration-none text-light" to="/SobreNosotros"><h6 id={styles.copy}>Sobre Nosotros</h6></NavLink></a>&nbsp;&nbsp;&nbsp;&nbsp;</li>
                <li><a className="nav-link"><NavLink className="text-decoration-none text-light" to="/Contacto"><h6>Contacto</h6></NavLink></a>&nbsp;&nbsp;&nbsp;&nbsp;</li>
                <li><a className="nav-link"><NavLink className="text-decoration-none text-light" to="/menuCita">
                            <h6 id={styles.copy}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stopwatch-fill" viewBox="0 0 16 16">
                                    <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584.531.531 0 0 0 .013-.012l.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354a.717.717 0 0 0-.012.012A6.973 6.973 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1h-3zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0z"/>
                                    </svg>&nbsp;&nbsp;&nbsp;Pide Cita
                            </h6>
                            </NavLink></a></li>
            </ul>
            </nav>
        </div>
        <FadeIn>
            <div className={styles.contenidoLogo}>
                <img src={logo} width="200" height="200" className="img-fluid" alt="logo"/>
            </div>
        </FadeIn>
        
        
    </div>
            
        );
    }
}
export default Header;