import React, { Component } from 'react';
import './EditContact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class EditContact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            phone:'',
            email:'',
            organization:'',
            notes:'',
            backup: {}
        };
        this.change = this.change.bind(this);
        this.save = this.save.bind(this);
    }

    componentDidMount(){
        this.setState(()=>{
            return {
                name:this.props.userDetail.name,
                phone:this.props.userDetail.phone,
                email:this.props.userDetail.email,
                organization:this.props.userDetail.organization,
                notes:this.props.userDetail.notes,
                backup:{...this.props.userDetail}
            }
        });
    }

    componentDidUpdate(prevProps, prevState){
        if (this.props.userDetail.name !== prevProps.userDetail.name || this.props.userDetail.phone !== prevProps.userDetail.phone ||
            this.props.userDetail.email !== prevProps.userDetail.email || this.props.userDetail.organization !== prevProps.userDetail.organization 
            || this.props.userDetail.notes !== prevProps.userDetail.notes) {
            this.setState(()=>{
                return {
                    name:this.props.userDetail.name,
                    phone:this.props.userDetail.phone,
                    email:this.props.userDetail.email,
                    organization:this.props.userDetail.organization,
                    notes:this.props.userDetail.notes,
                    backup:{...this.props.userDetail}
                }
            });
        }
    }
    
    cancel = () => {
        this.setState((prevState)=>{
            return {
                name:prevState.backup.name,
                phone:prevState.backup.phone,
                email:prevState.backup.email,
                organization: prevState.backup.organization,
                notes: prevState.backup.notes
            }
        });
        this.props.cancel();
    }
    
    change = (e) => {
        e.preventDefault();
        if (e.currentTarget.value !== ''){
            this.setState({[e.currentTarget.name]: e.currentTarget.value});
        }
    }
    
    save = (e) => {
        e.preventDefault();
        let {backup, ...currentState} = {...this.state}; 
        this.props.save(currentState);
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
                                    <button className="btn btn-default" type="button" onClick={this.cancel}>Cancel</button>
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