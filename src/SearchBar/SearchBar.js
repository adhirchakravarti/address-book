import React, { Component } from 'react';
import './SearchBar.css';

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
                <div className="row">
                    <form className="form-inline" onSubmit={this.submit}>
                        <div className="form-group">
                            {/* <label>Search:</label> */}
                            <input className="form-control" type="text"
                                onChange={this.change} placeholder="Search Contact.."
                                name="search" value={this.state.query}/>
                            {/* <input className="btn btn-success" type="submit" disabled={!isValid} value="Submit" />
                            <input className="btn btn-default" type="button" onClick={this.resetHandler} value="Reset" /> */}
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;