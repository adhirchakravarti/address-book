import React from 'react';
import './Cockpit.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import logo from '../logo.svg';

const Cockpit = (props) => {
    return (
        <header className="Cockpit-header">
            <div className="container">
                <div className="row">
                <div className="box1">
                    <div className="container">
                        <FontAwesomeIcon icon="address-book" size="5x"/>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="box2">
                    <h2 className="Cockpit-title">Address-Book</h2>
                </div>
                </div>
            </div>
        </header>
    );
}

export default Cockpit;
