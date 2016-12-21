import React,{Component} from 'react';

export default class LikeButton extends Component{
    constructor(props){
        super(props);
        this.state={
            liked:true
        }
    }
    onClickHandle=(e)=>{
        this.setState({
            liked:!this.state.liked,
        })
    }
    render(){
        let text=this.state.liked?'like':'haven\'t like';
        return(
            <div>
                <p onClick={this.onClickHandle}>you {text} React</p>
            </div>
        )
    }
}