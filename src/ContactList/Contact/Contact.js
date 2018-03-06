import React from 'react';
import './Contact.css';

const Contact = (props) => {
    
    return (
        <div className="ContactRow">
            <div className="ContactColumn">Name:{props.name}</div>
            <div className="ContactColumn">Phone:{props.phone}</div>
            <div className="ContactColumn">Email:{props.email}</div>
        </div>
    );
};

export default Contact;

