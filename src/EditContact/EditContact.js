import React, { Component } from 'react';
import './EditContact.css';


class EditContact extends Component {
    state = {
        name:'',
        phone:'',
        email:''
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
            email:''
        });
    }


    render() {
        return (
            <div className="outer">
                <p><strong>Edit Contact: {this.props.name}</strong></p>
                <div className="inner">
                    <label >Name: 
                        <input type="text" name="name" onChange={this.change} value={this.state.name} />
                    </label>
                </div>
                <div className="inner">
                    <label >Phone: 
                        <input type="text" name="phone" onChange={this.change} value={this.state.phone} />
                    </label>
                </div>
                <div className="inner">
                    <label >Email: 
                        <input type="text" name="email" onChange={this.change} value={this.state.email} />
                    </label>
                </div>
                <div className="inner">
                    <button onClick={this.save}>Save</button>
                    <button onClick={this.props.cancel}>Cancel</button>
                </div>
            </div>
        );
    }
} 

export default EditContact;