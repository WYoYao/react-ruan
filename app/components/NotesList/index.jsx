import React,{Component} from 'react';


class NotesLists extends Component{
    render(){
        return(
            <ul>{
                React.Children.map(this.props.children,child=><li>{child}</li> )
            }</ul>
        )
    }
}

export default class NotesList extends Component{
    render(){
        return(
            <NotesLists>
                <h2>Hello World</h2>
                <h2>Hello React</h2>
            </NotesLists>
        )
    }
}