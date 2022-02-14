import React, {Component} from 'react';
class Footer extends Component{
render(){
    return <section className="redes">
    <p>Sigue a Mik3Tab a través de sus redes sociales</p>
    <div className="links">
        <a href="https://es-es.facebook.com/" target="_blank">
            <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/?hl=es" target="_blank">
            <i className="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com/" target="_blank">
            <i className="fab fa-twitter"></i>
        </a>
        <a href="https://github.com/" target="_blank">
            <i className="fab fa-github"></i>
        </a>
    </div>
</section>
    }
}
export default Footer;