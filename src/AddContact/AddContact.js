// Use at a later stage
import React, { Component } from 'react';
import './AddContact.css';

class AddContact extends Component {
    state = {
        name: "",
        phone: "",
        email: "",
        isValid: false
    }

    submit = e => {
        e.preventDefault();
        const {isValid: valid,...sentContact} = this.state;
        console.log(sentContact);
        console.log(valid);
        this.props.onAdd(sentContact);
        this.setState({
            name: "",
            phone: "",
            email: "",
        });
    }

    change = e => {
        e.preventDefault();
        this.setState({[e.currentTarget.name]: e.currentTarget.value});
    }

    canBeSubmitted = () => {
        const { name, phone, email } = this.state;
        if (
          (name.length > 0) &&
          (phone.length > 0) &&
          (email.length > 0)
        ) {
            return true;
        }
      }

    render() {
        const isValid = this.canBeSubmitted(); // to validate form
        return (
            <div className="container">
                <div className="AddContact">
                    <p>Add New Contact</p>
                    <form onSubmit={this.submit}>
                        <div className="row align-items-center">
                            <div className="form-group col-xs-3 col-md-3">
                                <input className="form-control" type="text" placeholder="Name"
                                 name="name" onChange={this.change} value={this.state.name} />
                            </div>
                            <div className="form-group col-xs-3 col-md-3">
                                <input className="form-control" type="text" placeholder="Phone"
                                 name="phone" onChange={this.change} value={this.state.phone} />
                            </div>    
                            <div className="form-group col-xs-3 col-md-3"> 
                                <input className="form-control" type="email" placeholder="Email"
                                 name="email" onChange={this.change} value={this.state.email} />
                            </div>   
                            <div className="form-group col-xs-2 col-md-2">
                                <input className="btn" type="submit" disabled={!isValid} value="Add Contact" />
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        );
    }
} 

export default AddContact;