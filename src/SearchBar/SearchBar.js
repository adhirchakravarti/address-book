import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    state = {
        query:''
    }

    change = e => {
        e.preventDefault();
        //console.log(e.target.value);
        let input = e.target.value;
        this.setState({
            query: input
        });
        // console.log(this.state.query);
        // wanted to send the query object to the app component with this change, but it always sends one character less.
        // if (this.state.query !== ''){
        //     this.props.onType(this.state);
        // }
        this.props.onType(input);
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
        console.log(this.state);
        this.props.onClear();
    }

    canbeSubmitted = () => {
        const query = this.state.query;
        // console.log(query);
        return query.length > 0? true : false;
    }

    render(){
        const isValid = this.canbeSubmitted();
        return (
            <div className="SearchBar">
                <div className="row">
                    <form className="form-inline" onSubmit={this.submit}>
                        <div className="form-group">
                            {/* <label>Search:</label> */}
                            <input className="form-control" type="text"
                                onChange={this.change} placeholder="Search Contact.."
                                name="search" value={this.state.query}/>
                            <input className="btn btn-success" type="submit" disabled={!isValid} value="Submit" />
                            <input className="btn btn-default" type="button" onClick={this.resetHandler} value="Reset" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;