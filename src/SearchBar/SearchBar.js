import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    state = {
        query:''
    }

    change = e => {
        e.preventDefault();
        //console.log(e.target.value);
        this.setState({
            query:e.target.value
        });
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

    render(){
        return (
            <div className="SearchBar">
                <form className="AddContact" onSubmit={this.submit}>
                    <label>Search:
                        <input type="text"
                        onChange={this.change} placeholder="Search Contact.." name="search" value={this.state.query}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default SearchBar;