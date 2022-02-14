import React, {Component} from 'react';
const numbers = ["Home","Portfolio","Contacto","Sobre mí"]
const listItems = numbers.map((number) => <li>{number}</li>);
class Header extends Component{
    render(){
        return <div className="container">
    <nav className="nav-main">
        <a href="index.html"></a>
        <ul className="nav-menu show">
            <li>
                <a>HTML</a>
            </li>
            <li>
                <a>Portfolio</a>
            </li>
            <li>
                <a>Contacto</a>
            </li>
            <li>
                <a>Sobre mí</a>
            </li>
        </ul>
    </nav>
    </div>
        
    }
}
export default Header;