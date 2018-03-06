import React, { Component } from 'react';
import './App.css';
import AddContact from './AddContact/AddContact';
//import './AddContact/AddContact.css';
import ContactList from './ContactList/ContactList.js';
import Cockpit from './Cockpit/Cockpit.js';


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

  render() {
    let contactList = null;
    let contacts = [...this.state.contacts];
    if (contacts.length > 0) {
        contactList = (
          <ContactList
          contacts = {contacts}
          />
        );
    }
    return (
      <div className="App">
        <Cockpit/>
        <AddContact onAdd={(newContact)=>this.addContactHandler(newContact)}/> 
        {contactList}
      </div>
    );
  }
}

export default App;

