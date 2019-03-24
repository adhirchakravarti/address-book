import React, { Component } from 'react';


class ContactDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            phone:'',
            email:'',
            organization:'',
            notes:''
        };
    }

    componentDidMount(){
        this.setState(()=>{
            return {
                name:this.props.contact.name,
                phone:this.props.contact.phone,
                email:this.props.contact.email,
                organization:this.props.contact.organization,
                notes:this.props.contact.notes
            }
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.contact.name !== prevProps.contact.name || this.props.contact.phone !== prevProps.contact.phone ||
            this.props.contact.email !== prevProps.contact.email || this.props.contact.organization !== prevProps.contact.organization || this.props.contact.notes !== prevProps.contact.notes) {
            this.setState(()=>{
                return {
                    name:this.props.contact.name,
                    phone:this.props.contact.phone,
                    email:this.props.contact.email,
                    organization:this.props.contact.organization,
                    notes:this.props.contact.notes
                }
            });
        }
    }
    
    render() {
        return (
            this.props.show?
            <div className="row">
                <div className="col-12">
                    <h4>{this.state.name}</h4>
                    <h6>Phone: {this.state.phone}</h6>
                    <h6>Email: {this.state.email}</h6>
                    <h6>Organization: {this.state.organization}</h6>
                    <h6>Notes: {this.state.notes}</h6>
                </div>
            </div> : null

        );
    }
}

export default ContactDetail;
