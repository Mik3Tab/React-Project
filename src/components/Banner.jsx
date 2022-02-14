import React, {Component} from 'react';
class Banner extends Component{
    render(){
    return <header className="banner">
        <h1>Mik3Tab</h1>
        <p>Hola! Este es mi portfolio. Aquí encontrarás las tecnologías con las que realizo mis proyectos.</p>
        <a href="https://github.com/Mik3Tab" className="boton bannerbtn">Saber más <i className="fas fa-angle-double-right"></i></a>
    </header>
    }
}
export default Banner;