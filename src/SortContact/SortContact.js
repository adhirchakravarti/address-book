import React, { Component } from 'react';
import './SortContact.css';

class SortContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected:'default'
        };
    }
    
    change = (e) => {
        // console.log(e.target.value);
        this.setState({
            selected:e.target.value
        });
        this.props.onSelect(e.target.value);
    }
    
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="sortContainer">
                            <div className="form-inline">
                                <div className="form-group">
                                    <label>Sort By:</label>
                                    <select onChange={this.change} className="form-control" name="sort">
                                        <option value="default">Choose</option>
                                        <option name="name" value="name">Name</option> 
                                        <option name="phone" value="phone">Phone</option>
                                        <option name="email" value="email">Email</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default SortContact;