import React,{Component} from 'react';

let arr=[
    <h1>Hello world!</h1>,
    <h2>React is awesome</h2>,
]

export default class Arr extends Component{
    render() {
        return (
            <div>
                {arr}
            </div>
        );
    }
}