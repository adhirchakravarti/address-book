import React, { Component } from 'react';
import './SearchBar.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class SearchBar extends Component {
    state = {
        query:''
    }

    change = e => {
        e.preventDefault();
        //console.log(e.target.value);
        let input = '';
        if (e.target.value.length > 0) {
            input = e.target.value;
            this.props.onType(input);
        } else if (e.target.value.length === 0) {
            // this.resetHandler();
            this.props.onClear();
        }
        this.setState({
            query: input
        });
    }

    

    submit = e => {
        e.preventDefault();
        //console.log(e.target.children[0].children[0].value);
        console.log(this.state);
        // this.setState({
        //     query:e.target.value
        // });
        this.props.onType(this.state.query);
        this.setState({
            query:''
        });
    }

    resetHandler = () => {
        // this.setState({
        //     query:''
        // });
        // console.log(this.state);
        this.props.onClear();
    }

    canbeSubmitted = () => {
        const query = this.state.query;
        // console.log(query);
        return query.length > 0? true : false;
    }

    render(){
        // eslint-disable-next-line
        const isValid = this.canbeSubmitted();
        return (
            <div className="SearchBar">
                
                    <form className="form-inline" onSubmit={this.submit}>
                    <div className="form-group col-xs-12 col-md-12">
                        <div className="input-group mb-12">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><FontAwesomeIcon icon="search" aria-hidden="true"/></span>
                            </div>
                                <input type="text" className="form-control" name="search"
                                onChange={this.change} value={this.state.query} placeholder="Search Contact.."/>
                        </div>
                    </div>
                        {/*<div className="form-group">
                            <div className="input-group mb-6">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><FontAwesomeIcon icon="user" aria-hidden="true"/></span>
                                </div>
                                <input className="form-control" type="text"
                                    onChange={this.change} placeholder="Search Contact.."
                                    name="search" value={this.state.query}/>
                            </div>
                        </div>*/}
                    </form>
                
            </div>
        );
    }
}

export default SearchBar;