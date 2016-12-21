import React,{Component} from 'react';

class PropTypesdev extends Component{
    render(){
        return(
            <h2>{this.props.title}</h2>
        )
    }
}

PropTypesdev.propTypes={
    title:React.PropTypes.string,
}

PropTypesdev.defaultProps={
    title:'Hello Leo',
}

export default class PropTypes extends Component{
    render(){
        return <PropTypesdev/>
    }
}