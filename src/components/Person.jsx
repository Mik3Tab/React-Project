import React, {Component} from 'react';
class Person extends Component{
render(){
        return <div>
        <span>Hola {this.props.name}</span>
        <span>{this.props.surname}</span>
        <span>{this.props.age}</span>
        </div>
    }
}


export default Person;