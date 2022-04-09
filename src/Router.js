import React, {Component} from 'react';

import { BrowserRouter, Route , Switch} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Tratamientos from './components/Tratamientos';
import Blog from './components/Blog';
import SobreNosotros from './components/SobreNosotros';
import Contacto from './components/Contacto';
import PideCita from './components/PideCita';
import VeCita from './components/VeCita';
import ModificaCita from './components/ModificaCita';
import EliminaCita from './components/EliminaCita';
import menuCita from './components/menuCita';
import Footer from './components/Footer';

class Router extends Component{
    render(){
        return(
            <div>
                
                <BrowserRouter>
                    <Header/>

                        <Switch>
                            {/*Instalación del router de react-router-dom*/}
                            {/*Rutas de navegación, con cada uno de los componentes asignados*/}
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/Tratamientos" component={Tratamientos}/>
                            <Route exact path="/Blog" component={Blog}/>
                            <Route exact path="/SobreNosotros" component={SobreNosotros}/>
                            <Route exact path="/Contacto" component={Contacto}/>
                            <Route exact path="/menuCita" component={menuCita}/>
                            <Route exact path="/PideCita" component={PideCita}/>
                            <Route exact path="/VeCita" component={VeCita}/>
                            <Route exact path="/ModificaCita" component={ModificaCita}/>
                            <Route exact path="/EliminaCita" component={EliminaCita}/>
                        </Switch>
                    <Footer/>
                    
                </BrowserRouter>
            </div>
            
            );
    }
}
export default Router;