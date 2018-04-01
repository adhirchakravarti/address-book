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
                <form>
                    <p><strong>Edit Contact: {this.props.name}</strong></p>
                    <div className="form-group">
                        <input type="text" class="form-control" name="name"
                        onChange={this.change} value={this.state.name} placeholder="Name"/>
                    </div>
                    <div className="form-group">
                        <input type="text" class="form-control" name="phone" 
                        onChange={this.change} value={this.state.phone} placeholder="Phone" />
                    </div>
                    <div className="form-group">
                        <input type="email" class="form-control" name="email" 
                        onChange={this.change} value={this.state.email} placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit" disabled={!isValid} onClick={this.save}>Save</button>
                        <button className="btn btn-default" type="button" onClick={this.props.cancel}>Cancel</button>
                    </div>
                </form>
            </div>
        );
    }
} 

export default EditContact;