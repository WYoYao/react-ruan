import React,{Component} from 'react';

export default class HelloMessage extends Component{
    render(){
        return(
            <h2>Hello {this.props.name}</h2>
        )
    }
}