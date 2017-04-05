import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {DHeaderBar} from './components/DHeaderBar.js';
import {HeaderBar} from "adminlte-reactjs";


class App extends Component {
    render() {
        return (
            <HeaderBar></HeaderBar>
        );
    }
}

export default App;
