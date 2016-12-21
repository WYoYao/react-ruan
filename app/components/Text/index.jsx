import React,{Component} from 'react';

export default class Text extends Component{
    
    _handleClick = (e) => {
        this.refs.word.value="";
    }
    render(){
        return(
            <div>
                <input type="text" ref="word" placeholder="Entry The Word"/>
                <input type="button" value="Clear the text input" onClick={this._handleClick}/>
            </div>
        )
    }
}