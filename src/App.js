import React, { Component } from 'react';
import './App.css';
import AddContact from './AddContact/AddContact';
import ContactList from './ContactList/ContactList.js';
import Cockpit from './Cockpit/Cockpit.js';
import SearchBar from './SearchBar/SearchBar.js';
import SortContact from './SortContact/SortContact';
import Modal from './Modal/Modal';

import { library } from '@fortawesome/fontawesome-svg-core';
// eslint-disable-next-line
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faAt, faBuilding, faStickyNote, faTrashAlt, faEdit, faChevronRight,
          faChevronLeft, faUserPlus, faAddressBook, faAddressCard, faSearch, faSort, faTimes } from '@fortawesome/free-solid-svg-icons';
library.add(faUser, faPhone, faAt, faBuilding, faStickyNote, faTrashAlt, faEdit, faChevronRight,
   faChevronLeft, faUserPlus, faAddressBook, faAddressCard, faSearch, faSort, faTimes);



class App extends Component {
  state = {
    contacts:[],
    contactsToDisplay:[],
    sortBy:'',
    newContactModal:false,
    modalHeight:0,
    modalWidth:0,
    modalLeft:'auto',
    modalTop:'auto'
  };
  
  addContactHandler = (newContact) => {
    let contacts = [...this.state.contacts];
    if (newContact.name.length>0 && newContact.phone.length>0 && newContact.email.length>0 && newContact.organization.length>0){
      
      contacts.push(newContact);
      console.log("contacts: ", contacts);
      this.setState({
        contacts:contacts
      });
    }
    this.newContactFormHideHandler();
  };
 

  searchHandler = (queryObj) => {
    let contacts = [...this.state.contacts];
    let foundContacts = [];
    contacts.forEach((el, index)=>{
      let myRe = new RegExp(queryObj,"gi");
      if ((el.name.search(myRe) !==-1) || (el.phone.search(myRe)!==-1) || (el.email.search(myRe)!==-1)) {
        foundContacts.push(el);
      }
    });
    this.setState({
      contactsToDisplay:foundContacts
    });
  }

  resetHandler = () => {
    this.setState({
      contactsToDisplay:[]
    });
  }

  newContactFormShowHandler = () => {
    let modalChildHeight = document.getElementsByClassName('AddContactContainer')[0].clientHeight;
    let modalChildWidth = document.getElementsByClassName('AddContactContainer')[0].clientWidth;
    if (modalChildHeight !== undefined && modalChildWidth !== undefined) {
      let modalLeft = Math.round(50 - (((modalChildWidth / window.innerWidth)/2)*100)) + '%';
      let modalTop = Math.round(50 - (((modalChildHeight / window.innerHeight)/2)*100)) + '%';
      this.setState(()=>{
        return {
          newContactModal:true,  
          modalHeight:modalChildHeight,
          modalWidth:modalChildWidth,
          modalLeft:modalLeft,
          modalTop:modalTop
        }
      });
    }
    
  }
  newContactFormHideHandler = () => {
    this.setState({
      newContactModal:false
    });
  }

  deleteContactHandler = (contactIndex) => {
    const contacts = [...this.state.contacts];
    contacts.splice(contactIndex,1);
    this.setState({
      contacts:contacts
    });
  }

  editContactHandler = (contactObj) => {
    const contacts = [...this.state.contacts];
    const {index:ind, showModal:modal,backup, ...editedContact} = contactObj;
    contacts.splice(ind,1, editedContact);
    this.setState({
      contacts:contacts
    });
  }
  
  sortContactHandler = (event) => {
    const field = event.target.value === 'default' ? null : event.target.value;
    if (this.state.contacts.length > 1 && field !== null) {
      let contacts = [...this.state.contacts];
      contacts.sort(this.compareValues(field, 'asc'));
      this.setState({
        contacts: contacts
      });
    }
    
  }

  compareValues = (key, order='asc') => {
    return function(a, b) {
        if(!a.hasOwnProperty(key) || 
          !b.hasOwnProperty(key)) {
          return 0; 
        }
        
        const varA = (typeof a[key] === 'string') ? 
          a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string') ? 
          b[key].toUpperCase() : b[key];
          
        let comparison = 0;
        if (varA > varB) {
          comparison = 1;
        } else if (varA < varB) {
          comparison = -1;
        }
        return (
          (order === 'desc') ? 
          (comparison * -1) : comparison
        );
    };
  }


  renderContacts = () => {
    let contactList = null;
    if (this.state.contactsToDisplay.length === 0) {
      let contacts = [...this.state.contacts];
      if (contacts.length > 0) {
          contactList = (
            <div className="container">  
              <div className="row">
                <div className="col-12">  
                  <div className="mainContainer">
                    <ContactList
                    contacts = {contacts}
                    delete = {this.deleteContactHandler}
                    change = {this.editContactHandler}
                    
                    />
                  </div>
                </div>
              </div>
            </div>
          );
      }
    } else {
      // eslint-disable-next-line
      let contactsToDisplay = [...this.state.contactsToDisplay];
       contactList = (
        <div className="container">  
          <div className="row">
            <div className="col-12">
              <div className="mainContainer">
                <ContactList
                contacts = {contactsToDisplay}
                delete = {this.deleteContactHandler}
                change = {this.editContactHandler}
                
                />
              </div>
            </div>
          </div>
          
        </div>
      );

    }
    return contactList;
  }

  render() {
    let contactList = this.renderContacts();
    
    return (
      <div className="App">
        <Cockpit/>
        <div className="container">
          <div className="row">
            <SearchBar onType={(query)=>this.searchHandler(query)} onClear={this.resetHandler}/>
            <div className="newContactButtonContainer">
              <button className="btn btn-primary" onClick={this.newContactFormShowHandler}>Create New Contact</button>
            </div>
          </div>
        </div>
        <Modal show={this.state.newContactModal} height={this.state.modalHeight} width={this.state.modalWidth} top={this.state.modalTop} left={this.state.modalLeft}>
          <AddContact cancel={this.newContactFormHideHandler} onAdd={(newContact)=>this.addContactHandler(newContact)}/>
        </Modal>
        <SortContact onSelect={this.sortContactHandler}></SortContact>
        {contactList}
      </div>
    );
  }
}

export default App;

