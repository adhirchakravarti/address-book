import React from 'react';
import './Modal.css';
import Aux from '../hoc/AuxFile';
import Backdrop from '../Backdrop/Backdrop';


const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div className="Modal"
            style={{
                transform: props.show? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show? '1' : '0',
                // height: props.height? props.height:'auto',
                // width: props.width? props.width:'auto',
                top: props.top? props.top : 'auto !important',
                left: props.left? props.left: 'auto !important'
            }}>
            {props.children}
        </div>
    </Aux>
);


export default modal;
