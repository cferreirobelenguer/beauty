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