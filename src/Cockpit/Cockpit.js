import React from 'react';
import './Cockpit.css';
import logo from '../logo.svg';

const Cockpit = (props) => {
    return (
        <header className="Cockpit-header">
          <img src={logo} className="Cockpit-logo" alt="logo" />
          <h1 className="Cockpit-title">Address Book</h1>
        </header>
    );
}

export default Cockpit;
