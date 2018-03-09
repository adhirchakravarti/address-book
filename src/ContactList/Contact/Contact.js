import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    state = {
        name:this.props.name,
        phone:this.props.phone,
        email:this.props.email,
        index:this.props.index,
        showEditForm: false,
        editForm:<div></div>
    };

    
    change = e => {
        e.preventDefault();
        //console.log(e.currentTarget);
        
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
        //console.log(this.state);
    }

    save = e => {
        e.preventDefault();
        // console.log(e.target.children[0].children[0].value);
        // let name = e.target.children[0].children[0].value;
        // let phone = e.target.children[1].children[0].value;
        // let email = e.target.children[2].children[0].value;
        // this.setState({
        //     name:name,
        //     phone:phone,
        //     email:email
        // });
        console.log(this.state);

        this.props.edit(this.state);
        this.setState({
            editForm:<div></div>
        });
    }

    editContact = () => {
        let editForm = (
            <form className="EditRow" onSubmit={this.save}>
                <label className="EditColumn">Name:
                    <input type="text" name="name"  onChange={this.change}/>
                </label>
                <label className="EditColumn">Phone:
                    <input type="text" name="phone"  onChange={this.change}/>
                </label>
                <label className="EditColumn">Email:
                    <input type="text" name="email"  onChange={this.change}/>
                </label>
                <input type="submit" className="SaveButton"
                    value="Save"/>
            </form>
        );
        let noEditForm = <div></div>;
        if (this.state.showEditForm === false) {
            this.setState({
                editForm:editForm,
                showEditForm: true
            });
        } else {
            this.setState({
                editForm:noEditForm,
                showEditForm:false
            });
        }
        
    }

    render() {
        let editForm = this.state.editForm;
        return (
            <div>
                <div className="ContactRow">
                    <div className="ContactColumn">Name:{this.props.name}</div>
                    <div className="ContactColumn">Phone:{this.props.phone}</div>
                    <div className="ContactColumn">Email:{this.props.email}</div>
                    <input type="button" className="ContactButton"
                    onClick={this.props.remove} value="x"/>
                    <input type="button" className="EditButton"
                    onClick={this.editContact} value="E"/>
                </div>
                {editForm}
            </div>
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

