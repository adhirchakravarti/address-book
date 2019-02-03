import React, { Component } from 'react';


class ContactDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:this.props.contact.name,
            phone:this.props.contact.phone,
            email:this.props.contact.email,
            organization:this.props.contact.organization,
            notes:this.props.contact.notes
        };
    }

    componentWillReceiveProps ( nextProps ) {
        // console.log( '[UPDATE ContactDetail.js] Inside componentWillReceiveProps', nextProps );
        if (this.props.contact.name !== nextProps.contact.name || this.props.contact.phone !== nextProps.contact.phone ||
            this.props.contact.email !== nextProps.contact.email || this.props.contact.organization !== nextProps.contact.organization || this.props.contact.notes !== nextProps.contact.notes) {
            this.setState({
                name:nextProps.contact.name,
                phone:nextProps.contact.phone,
                email:nextProps.contact.email,
                organization:nextProps.contact.organization,
                notes:nextProps.contact.notes
            });
        }
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("inside ContactDetail shouldComponentUpdate()");
    //     console.log(nextProps, nextState);
    //     if (this.props.contact.name !== nextProps.contact.name || this.props.contact.phone !== nextProps.contact.phone ||
    //         this.props.contact.email !== nextProps.contact.email || this.props.contact.organization !== nextProps.contact.organization || this.props.contact.notes !== nextProps.contact.notes) {
    //         return true;
    //     } else {
    //         return false;
    //     }

    // }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log("inside ContactDetail componentWillUpdate()");
    //     console.log(nextProps, nextState);
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log("inside ContactDetail componentDidUpdate()");
    //     console.log(prevProps, prevState);
    // }
    
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
