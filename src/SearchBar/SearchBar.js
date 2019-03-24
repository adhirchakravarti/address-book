import React, { Component } from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            query:''
        }
    }
    

    change = e => {
        e.preventDefault();
        //console.log(e.target.value);
        let input = '';
        if (e.target.value.length > 0) {
            input = e.target.value;
            this.props.onType(input);
        } else if (e.target.value.length === 0) {
            this.props.onClear();
        }
        this.setState({
            query: input
        });
    }


    render(){
        return (
            <div className="SearchBar">
                
                    <form className="form-inline">
                        <div className="form-group col-xs-12 col-md-12">
                            <div className="input-group mb-12">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><FontAwesomeIcon icon="search" aria-hidden="true"/></span>
                                </div>
                                    <input type="text" className="form-control" name="search"
                                    onChange={this.change} value={this.state.query} placeholder="Search Contact.."/>
                            </div>
                        </div>
                    </form>
                
            </div>
        );
    }
}

export default SearchBar;