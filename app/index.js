import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Text,LikeButton,Hello } from './components';

class App extends Component {
    render() {
        return (
            <div>
                <Hello name="leo" />
            </div>
        )
    }
}



let root = document.getElementById('app');
render(<App />, root);