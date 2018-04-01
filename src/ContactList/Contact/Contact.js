import React, { Component } from 'react';
import './Contact.css';
import Aux from '../../hoc/Aux';
import Modal from '../../Modal/Modal';
import EditContact from '../../EditContact/EditContact';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class Contact extends Component {
    state = {
        name:this.props.name,
        phone:this.props.phone,
        email:this.props.email,
        index:this.props.index,
        showModal: false
    };

    
    change = e => {
        e.preventDefault();
        //console.log(e.currentTarget);
        
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
        //console.log(this.state);
    }

    save = (contactObj) => {
        //e.preventDefault();
        // console.log(e.target.children[0].children[0].value);
        // let name = e.target.children[0].children[0].value;
        // let phone = e.target.children[1].children[0].value;
        // let email = e.target.children[2].children[0].value;
        // this.setState({
        //     name:name,
        //     phone:phone,
        //     email:email
        // });
        console.log(contactObj);
        contactObj.index = this.state.index;
        console.log(contactObj);
        // let currentState = {
        //     ...this.state
        // };
        this.setState({
            name: contactObj.name,
            phone: contactObj.phone,
            email: contactObj.email,
            showModal: false
        });
        // console.log(this.state);
        this.props.edit(contactObj);
        
    }

    
    // This function is deprecated and no longer used

    // editContact = () => {
    //     let editForm = (
    //         <form className="EditRow" onSubmit={this.save}>
    //             <label className="EditColumn">Name:
    //                 <input type="text" name="name"  onChange={this.change}/>
    //             </label>
    //             <label className="EditColumn">Phone:
    //                 <input type="text" name="phone"  onChange={this.change}/>
    //             </label>
    //             <label className="EditColumn">Email:
    //                 <input type="text" name="email"  onChange={this.change}/>
    //             </label>
    //             <input type="submit" className="SaveButton"
    //                 value="Save"/>
    //         </form>
    //     );
    //     let noEditForm = <div></div>;
    //     if (this.state.showEditForm === false) {
    //         this.setState({
    //             editForm:editForm,
    //             showEditForm: true
    //         });
    //     } else {
    //         this.setState({
    //             editForm:noEditForm,
    //             showEditForm:false
    //         });
    //     }
        
    // }

    displayModalHandler = () => {
        this.setState({
          showModal:true
        });
      }
    
      hideModalHandler = () => {
        this.setState({
          showModal:false
        });
      }

      iconClickTest = () => {
          console.log("icon clicked!");
      }

    render() {
        // let editForm = this.state.editForm; // deprecated
        return (
            <Aux>
                
                <div className="ContactRow">
                    <div className="ContactColumn">Name: {this.props.name}</div>
                    <div className="ContactColumn">Phone: {this.props.phone}</div>
                    <div className="ContactColumn">Email: {this.props.email}</div>
                    <div className="ContactColumn">
                        <button className="btn btn-light" onClick={this.props.remove}><FontAwesomeIcon icon="trash-alt" size="lg" onClick={this.iconClickTest}/></button>
                    </div>
                    <div className="ContactColumn">
                        <button className="btn btn-light" onClick={this.displayModalHandler}><FontAwesomeIcon icon="pen-square" size="lg"/></button>
                    </div>
                    
                </div>
                {/* {editForm} */}
                <Modal show={this.state.showModal} modalClosed={this.hideModalHandler}>
                    <EditContact cancel={this.hideModalHandler} save={this.save} name={this.state.name}/>
                </Modal>
            </Aux>
        );
    }
}

/*
const Contact = (props) => {
    
    return (
        <div className="ContactRow">
            <div className="ContactColumn">Name:{props.name}</div>
            <div className="ContactColumn">Phone:{props.phone}</div>
            <div className="ContactColumn">Email:{props.email}</div>
            <input type="button" className="ContactButton"
            onClick={props.remove} value="x"/>
            <input type="button" className="EditButton"
             value="Edit"/>
        </div>
    );
};
*/

export default Contact;

