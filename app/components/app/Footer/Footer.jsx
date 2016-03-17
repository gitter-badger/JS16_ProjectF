import React from 'react';
let {Component} = React;
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Router, Route, Link, browserHistory } from 'react-router'

import styles from './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <div className="bottom-line">
                        <div>2016, Rostlab @Technical Universtity Munich</div>
                        <div className="right"><Link to={"/about"}>About &amp; Imprint</Link></div>
                    </div>
                </div>
            </div>
        );
    }
}
