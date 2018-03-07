// Use at a later stage
import React, { Component } from 'react';
import './AddContact.css';

class AddContact extends Component {
    state = {
        name: "",
        phone: "",
        email: "",
    }

    submit = e => {
        e.preventDefault();
        
        this.props.onAdd(this.state);
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

    render() {
        return (
            <div className="FormContainer">
                <p>Add New Contact</p>
                <form className="AddContact" onSubmit={this.submit}>
                    <label className="inputField">Name: 
                        <input type="text" name="name" onChange={this.change} value={this.state.name} />
                    </label>
                    <label className="inputField">Phone: 
                        <input type="text" name="phone" onChange={this.change} value={this.state.phone} />
                    </label>
                    <label className="inputField">Email: 
                        <input type="text" name="email" onChange={this.change} value={this.state.email} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
} 

export default AddContact;