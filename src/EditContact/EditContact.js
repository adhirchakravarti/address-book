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
    }


    render() {
        return (
            <div className="outer">
                <div >
                    <label >Name: 
                        <input type="text" name="name" onChange={this.change} value={this.state.name} />
                    </label>
                </div>
                <div >
                    <label >Phone: 
                        <input type="text" name="phone" onChange={this.change} value={this.state.phone} />
                    </label>
                </div>
                <div >
                    <label >Email: 
                        <input type="text" name="email" onChange={this.change} value={this.state.email} />
                    </label>
                </div>
                <div >
                    <button onClick={this.save}>Save</button>
                    <button onClick={this.props.cancel}>Cancel</button>
                </div>
            </div>
        );
    }
} 

export default EditContact;