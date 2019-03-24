// Use at a later stage
import React, { Component } from 'react';
import './AddContact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AddContact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            phone: "",
            email: "",
            organization: "",
            notes: "",
            isValid: false
        }
        this.cancel = this.cancel.bind(this);
        this.submit = this.submit.bind(this);
        this.change = this.change.bind(this);
    }
    

    cancel = () => {
        this.setState(()=>{
            return {
                name: "",
                phone: "",
                email: "",
                organization: "",
                notes: "",
                isValid: false
            }
        })
        this.props.cancel();
    }

    submit = e => {
        e.preventDefault();
        const {isValid: valid,...sentContact} = this.state;
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
            <div className="AddContactContainer">
                <div className="col-12">
                    <div className="AddContact">
                        <div className="card">
                            <div className="card-header">

                                <div>
                                    <span><FontAwesomeIcon icon="user-plus"/> Add Contact</span>
                                </div>
                                <span className="close-modal-btn" onClick={this.cancel}><FontAwesomeIcon icon="times"/></span>

                            </div>
                            <div className="card-body">
                                <form onSubmit={this.submit}>

                                    <div className="row">
                                        <div className="form-group col-xs-6 col-md-6">
                                            <div className="input-group mb-6">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><FontAwesomeIcon icon="user" aria-hidden="true"/></span>
                                                </div>
                                                    <input type="text" className="form-control" name="name"
                                                    onChange={this.change} value={this.state.name} placeholder="Name"/>
                                            </div>
                                        </div>
                                        <div className="form-group col-xs-6 col-md-6">
                                            <div className="input-group mb-6">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><FontAwesomeIcon icon="phone" aria-hidden="true"/></span>
                                                </div>
                                                <input type="text" className="form-control" name="phone"
                                                onChange={this.change} value={this.state.phone} placeholder="Phone"/>
                                            </div>
                                        </div>
                                        

                                    </div>
                                    <div className="row">
                                        <div className="form-group col-xs-6 col-md-6">
                                            <div className="input-group mb-6">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><FontAwesomeIcon icon="at" aria-hidden="true"/></span>
                                                </div>
                                                <input type="email" className="form-control" name="email"
                                                onChange={this.change} value={this.state.email} placeholder="Email"/>
                                            </div>
                                        </div>
                                        <div className="form-group col-xs-6 col-md-6">
                                            <div className="input-group mb-6">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><FontAwesomeIcon icon="building" aria-hidden="true"/></span>
                                                </div>
                                                <input type="text" className="form-control" name="organization"
                                                onChange={this.change} value={this.state.organization} placeholder="Organization"/>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-xs-8 col-md-8">
                                            <div className="input-group mb-8">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><FontAwesomeIcon icon="sticky-note" aria-hidden="true"/></span>
                                                </div>
                                                <input type="text" className="form-control" name="notes"
                                                onChange={this.change} value={this.state.notes} placeholder="Notes"/>
                                            </div>
                                        </div>
                                        <div className="form-group col-xs-4 col-md-4">
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
        );
    }
} 

export default AddContact;