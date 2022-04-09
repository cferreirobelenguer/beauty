import React,{Component} from "react";
import Button from '@mui/material/Button';
import styles from '../assets/css/estilos.module.css';
import onda from '../assets/images/onda.png';

class Blog extends Component{
    render(){
        return(
            <div className={styles.blogFondo}>
                {/*Onda decorativa en todas las vistas*/}
                <div className="d-flex flex-column bd-highlight mb-3">
                        <img src={onda} width="1500" height="300" className="img-fluid"></img>
                </div>
            </div>
        );
    }
}
export default Blog;