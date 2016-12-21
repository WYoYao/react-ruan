import React,{Component} from 'react';

export default class Hello extends Component{
    constructor(props){
        super(props);
        this.state={
            opacity :1.0
        }
    }
    componentDidMount() {
        this.timer=setInterval(()=>{
            let opacity =this.state.opacity;
            opacity-=0.05;
            if(opacity<0.1){
                opacity=1;
            }
            this.setState({
                opacity
            })
        },100)
    }
    render(){
        return(
            <div style={{opacity:this.state.opacity}}>
                <h2>Hello {this.props.name}</h2>
            </div>
        )
    }
    
}