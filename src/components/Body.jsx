import React, {Component} from 'react';

class Body extends Component{
    render(){
        return <div className ="Body">
    <section className="tecnologias">
    <ul className="cartas">
        <li>
        <div className="imagenes">
        </div>
            <h3>HTML 5</h3>
            <p>El Lenguaje de Marcado de Hipertexto (HTML) es el código que se utiliza para estructurar y desplegar una página web y sus contenidos. Por ejemplo, sus contenidos podrían ser párrafos, una lista con viñetas, o imágenes.</p>
            <a target="_blank" className="boton">Saber más <i className="fas fa-angle-double-right"></i></a>
        </li>
        <li>   
        <div className="imagenes">
        </div>
            <h3>Cascade StyleSheet</h3>
            <p>CSS (CASCADING Style Sheets) son hojas de estilo en cascada. CSS es un lenguaje que complementa y formatea HTML (HyperText Markup Language, Lenguaje de Marcación de Hipertexto).</p>
            <a target="_blank" className="boton">Saber más <i className="fas fa-angle-double-right"></i></a>
        </li>
        <li>
        <div className="imagenes">
        </div>
            <h3>JavaScript</h3>
            <p>JavaScript es el lenguaje de programación que debes usar para añadir características interactivas a tu sitio web, (por ejemplo, juegos, eventos que ocurren cuando los botones son presionados).</p>
            <a target="_blank" className="boton">Saber más <i className="fas fa-angle-double-right"></i></a>
        </li>
        <li>
        <div className="imagenes">
            
        </div>
            <h3>GIT</h3>
            <p>Git es un sistema de control de versiones distribuido. Esto significa que un clon local del proyecto es un repositorio de control de versiones completo. Estos repositorios locales son plenamente funcionales.</p>
            <a target="_blank" className="boton">Saber más <i className="fas fa-angle-double-right"></i></a>
        </li>
    </ul>
    </section>
        </div>
    }
}

export default Body;