import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    state = {
        query:''
    }

    change = e => {
        e.preventDefault();
        console.log(e.target.value);
        let input = e.target.value;
        this.setState({
            query:input
        });
        console.log(this.state.query);
        // wanted to send the query object to the app component with this change, but it always sends one character less.
        // if (this.state.query !== ''){
        //     this.props.onType(this.state);
        // }
        
    }

    submit = e => {
        e.preventDefault();
        console.log(e.target.children[0].children[0].value);
        console.log(this.state);
        // this.setState({
        //     query:e.target.value
        // });
        this.props.onType(this.state);
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

    render(){
        return (
            <div className="SearchBar">
                <form className="SearchContact" onSubmit={this.submit}>
                    <label>Search:
                        <input type="text"
                        onChange={this.change} placeholder="Search Contact.." name="search" value={this.state.query}/>
                    </label>
                    <input type="submit" value="Submit" />
                    <input type="button" onClick={this.resetHandler} value="Reset" />
                </form>
            </div>
        );
    }
}

export default SearchBar;