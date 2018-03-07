import React, { Component } from 'react';
import './App.css';
import AddContact from './AddContact/AddContact';
//import './AddContact/AddContact.css';
import ContactList from './ContactList/ContactList.js';
import Cockpit from './Cockpit/Cockpit.js';
import SearchBar from './SearchBar/SearchBar.js';


class App extends Component {
  state = {
    contacts:[]
  };
  
  addContactHandler = (newContact) => {
    //event.preventDefault();
    //console.log(event.target[0].value);
    //console.log(event.target.name.value);
    
    let contacts = [...this.state.contacts];
    if (newContact.name.length>0 && newContact.phone.length>0 && newContact.email.length>0){
      
      contacts.push(newContact);
      console.log("contacts: ", contacts);
      this.setState({
        contacts:contacts
      });
    } else {
      console.log("Please enter the name, phone and email address of a contact before pressing Submit");
    }

  };

  searchHandler = (queryObj) => {
    console.log(queryObj);
    let contacts = [...this.state.contacts];
    let result = contacts.filter((el,index)=>{
      return el.name.toLowerCase()===queryObj.query.toLowerCase() });
    console.log(result);
    let newContacts = [...result];
    this.setState({
      contacts:newContacts
    });
  };

  searchHandler2 = (queryObj) => {
    let contacts = [...this.state.contacts];
    //let results = [];
    let foundContacts = [];
    contacts.forEach((el, index)=>{
      let myRe = new RegExp(queryObj.query,"gi");
      if ((el.name.search(myRe) !==-1) || (el.phone.search(myRe)!==-1) || (el.email.search(myRe)!==-1)) {
        //results.push(el.name.match(myRe));
        foundContacts.push(el);
      }
    })
    //console.log(results);
    console.log(foundContacts);
    this.setState({
      contacts:foundContacts
    });
  }

  deleteContactHandler = (contactIndex) => {
    const contacts = [...this.state.contacts];
    contacts.splice(contactIndex,1);
    this.setState({
      contacts:contacts
    });
  }

  render() {
    let contactList = null;
    let contacts = [...this.state.contacts];
    if (contacts.length > 0) {
        contactList = (
          <ContactList
          contacts = {contacts}
          delete = {this.deleteContactHandler}
          />
        );
    }
    return (
      <div className="App">
        <Cockpit/>
        <SearchBar onType={(query)=>this.searchHandler2(query)}/>
        <AddContact onAdd={(newContact)=>this.addContactHandler(newContact)}/> 
        {contactList}
      </div>
    );
  }
}

export default App;

