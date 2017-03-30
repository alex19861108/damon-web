import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {Navbar} from "react-bootstrap";
const navbarInstance = (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">react-bootstrap</a>
            </Navbar.Brand>
        </Navbar.Header>
    </Navbar>
);

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
