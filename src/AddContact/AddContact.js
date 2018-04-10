// Use at a later stage
import React, { Component } from 'react';
import './AddContact.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class AddContact extends Component {
    state = {
        name: "",
        phone: "",
        email: "",
        organization: "",
        notes: "",
        isValid: false
    }

    submit = e => {
        e.preventDefault();
        const {isValid: valid,...sentContact} = this.state;
        // console.log(sentContact);
        // console.log(valid);
        this.props.onAdd(sentContact);
        this.setState({
            name: "",
            phone: "",
            email: "",
            organization: "",
            notes: ""
        });
    }

    change = e => {
        e.preventDefault();
        this.setState({[e.currentTarget.name]: e.currentTarget.value});
    }

    canBeSubmitted = () => {
        const { name, phone, email, organization } = this.state;
        if (
          (name.length > 0) &&
          (phone.length > 0) &&
          (email.length > 0) &&
          (organization.length > 0)
        ) {
            return true;
        }
      }

    render() {
        const isValid = this.canBeSubmitted(); // to validate form
        return (
            <div className="container">
                {/* <div classNameName="AddContact">
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
                        <FontAwesomeIcon icon="address-book" size="5x"/>
                    </form>
                </div> */}
                <div className="row">
                    <div className="col-12">
                        <div className="AddContact">
                        <div className="card">
                            <div className="card-header">

                                <div>
                                    <span><FontAwesomeIcon icon="user-plus"/> Add Contact</span>
                                </div>

                            </div>
                            <div className="card-body">
                            <form onSubmit={this.submit}>

                                <div className="row">
                                    <div className="form-group col-xs-3 col-md-3">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><FontAwesomeIcon icon="user" aria-hidden="true"/></span>
                                            </div>
                                                <input type="text" className="form-control" name="name"
                                                onChange={this.change} value={this.state.name} placeholder="Name"/>
                                        </div>
                                    </div>
                                    <div className="form-group col-xs-3 col-md-3">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><FontAwesomeIcon icon="phone" aria-hidden="true"/></span>
                                            </div>
                                            <input type="text" className="form-control" name="phone"
                                            onChange={this.change} value={this.state.phone} placeholder="Phone"/>
                                        </div>
                                    </div>
                                    <div className="form-group col-xs-3 col-md-3">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><FontAwesomeIcon icon="at" aria-hidden="true"/></span>
                                            </div>
                                            <input type="email" className="form-control" name="email"
                                            onChange={this.change} value={this.state.email} placeholder="Email"/>
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="form-group col-xs-3 col-md-3">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><FontAwesomeIcon icon="building" aria-hidden="true"/></span>
                                            </div>
                                            <input type="text" className="form-control" name="organization"
                                            onChange={this.change} value={this.state.organization} placeholder="Organization"/>
                                        </div>
                                    </div>
                                    <div className="form-group col-xs-3 col-md-3">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><FontAwesomeIcon icon="sticky-note" aria-hidden="true"/></span>
                                            </div>
                                            <input type="text" className="form-control" name="notes"
                                            onChange={this.change} value={this.state.notes} placeholder="Notes"/>
                                        </div>
                                    </div>
                                    <div className="form-group col-xs-2 col-md-2">
                                        <button className="btn btn-primary" disabled={!isValid}
                                            type="submit">Add Contact</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        </div>
                        </div>
                    </div>
                    </div>

            </div>
        );
    }
} 

export default AddContact;