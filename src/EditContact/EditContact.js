import React, { Component } from 'react';
import './EditContact.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


class EditContact extends Component {
    state = {
        name:'',
        phone:'',
        email:'',
        organization:'',
        notes:''
    };
    
    change = (e) => {
        e.preventDefault();
        //console.log(e.currentTarget);
        
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
        //console.log(this.state);
    }
    
    save = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.save(this.state);
        this.setState({
            name:'',
            phone:'',
            email:'',
            organization:'',
            notes:''
        });
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
            <div className="outer">
                <div className="inner">
                    <div className="col-12">
                        <div className="editContactContainer">
                            <div className="card-header">

                                <div>
                                    <span><FontAwesomeIcon icon="user"/> <strong>Edit Contact: {this.props.name}</strong></span>
                                </div>

                            </div>
                        </div>
                        <form>
                            
                            <div className="form-group col-xs-12 col-md-12">
                                <div className="input-group mb-12">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FontAwesomeIcon icon="user" aria-hidden="true"/></span>
                                    </div>
                                        <input type="text" className="form-control" name="name"
                                        onChange={this.change} value={this.state.name} placeholder="Name"/>
                                </div>
                            </div>
                            <div className="form-group col-xs-12 col-md-12">
                                <div className="input-group mb-12">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FontAwesomeIcon icon="phone" aria-hidden="true"/></span>
                                    </div>
                                    <input type="text" className="form-control" name="phone"
                                    onChange={this.change} value={this.state.phone} placeholder="Phone"/>
                                </div>
                            </div>
                            <div className="form-group col-xs-12 col-md-12">
                                <div className="input-group mb-12">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FontAwesomeIcon icon="at" aria-hidden="true"/></span>
                                    </div>
                                    <input type="email" className="form-control" name="email"
                                    onChange={this.change} value={this.state.email} placeholder="Email"/>
                                </div>
                            </div>
                            <div className="form-group col-xs-12 col-md-12">
                                <div className="input-group mb-12">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FontAwesomeIcon icon="building" aria-hidden="true"/></span>
                                    </div>
                                    <input type="text" className="form-control" name="organization"
                                    onChange={this.change} value={this.state.organization} placeholder="Organization"/>
                                </div>
                            </div>
                            <div className="form-group col-xs-12 col-md-12">
                                <div className="input-group mb-12">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FontAwesomeIcon icon="sticky-note" aria-hidden="true"/></span>
                                    </div>
                                    <input type="text" className="form-control" name="notes"
                                    onChange={this.change} value={this.state.notes} placeholder="Notes"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-xs-6 col-md-6">
                                    <button className="btn btn-primary" type="submit" disabled={!isValid} onClick={this.save}>Save</button>
                                </div>
                                <div className="form-group col-xs-6 col-md-6">
                                    <button className="btn btn-default" type="button" onClick={this.props.cancel}>Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
} 

export default EditContact;