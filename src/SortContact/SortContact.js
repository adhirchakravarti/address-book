import React from 'react';
import './SortContact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SortContact = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="sortContainer">
                        <div className="form-inline">
                            <div className="form-group">
                                <div className="input-group mb-12">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FontAwesomeIcon icon="sort" aria-hidden="true"/></span>
                                    </div>
                                    <select onChange={props.onSelect} className="form-control" name="sort">
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
        </div> 
    );
}

export default SortContact;