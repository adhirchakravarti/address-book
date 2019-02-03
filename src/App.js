import React, { Component } from 'react';
import './App.css';
import AddContact from './AddContact/AddContact';
//import './AddContact/AddContact.css';
import ContactList from './ContactList/ContactList.js';
import Cockpit from './Cockpit/Cockpit.js';
import SearchBar from './SearchBar/SearchBar.js';
import SortContact from './SortContact/SortContact';
import fontawesome from '@fortawesome/fontawesome';
// eslint-disable-next-line
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPenSquare from '@fortawesome/fontawesome-free-solid/faPenSquare';
//import faTrashAlt from '@fortawesome/fontawesome-free-solid/faTrashAlt';
import {faTrashAlt, faEdit, faChevronRight, faChevronLeft, faUser, faUserPlus,
  faBuilding, faStickyNote, faAddressBook, faAddressCard, faAt, faPhone} from '@fortawesome/fontawesome-free-solid';
import Modal from './Modal/Modal';
// import EditContact from './EditContact/EditContact';
fontawesome.library.add(faPenSquare, faEdit, faTrashAlt, faChevronLeft, faPhone,
  faUser, faBuilding, faAddressBook, faAddressCard, faAt, faChevronRight, faStickyNote, faUserPlus);

// Add a function to sort contacts alphabetically



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
    //event.preventDefault();
    //console.log(event.target[0].value);
    //console.log(event.target.name.value);
    // console.log(newContact);
    let contacts = [...this.state.contacts];
    if (newContact.name.length>0 && newContact.phone.length>0 && newContact.email.length>0 && newContact.organization.length>0){
      
      contacts.push(newContact);
      console.log("contacts: ", contacts);
      this.setState({
        contacts:contacts
      });
    } else {
      alert("Please enter the name, phone and email address of a contact before pressing Submit");
    }
    this.newContactFormHideHandler();
  };
 

  searchHandler = (queryObj) => {
    let contacts = [...this.state.contacts];
    //let results = [];
    // console.log("Query object: ",queryObj);
    let foundContacts = [];
    contacts.forEach((el, index)=>{
      let myRe = new RegExp(queryObj,"gi");
      if ((el.name.search(myRe) !==-1) || (el.phone.search(myRe)!==-1) || (el.email.search(myRe)!==-1)) {
        //results.push(el.name.match(myRe));
        foundContacts.push(el);
      }
    })
    //console.log(results);
    // console.log("FoundContacts: ",foundContacts);
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
    this.setState({
      newContactModal:true
    });
    console.log(document.getElementsByClassName('AddContactContainer')[0].clientHeight);
    let modalChildHeight = document.getElementsByClassName('AddContactContainer')[0].clientHeight;
    let modalChildWidth = document.getElementsByClassName('AddContactContainer')[0].clientWidth;
    console.log(modalChildHeight, modalChildWidth);
    console.log(window.screen.width, window.screen.height);
    console.log(window.innerWidth, window.innerHeight);
    if (modalChildHeight !== undefined && modalChildWidth !== undefined) {
      console.log("(modal width / screenwidth) / 2 * 100 ", (((modalChildWidth / window.screen.width)/2)*100));
      console.log("(modal height / screenheight) / 2 * 100 ", (((modalChildHeight / window.screen.height)/2)*100));
      let modalLeft = Math.round(50 - (((modalChildWidth / window.innerWidth)/2)*100)) + '%';
      let modalTop = Math.round(50 - (((modalChildHeight / window.innerHeight)/2)*100)) + '%';
      console.log(modalLeft, modalTop);
      this.setState({
          modalHeight:modalChildHeight,
          modalWidth:modalChildWidth,
          modalLeft:modalLeft,
          modalTop:modalTop
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
    console.log(contactObj);
    //let index, editedContact, form;
    // const index = contactObj[index];
    const {index:ind, showModal:modal,...editedContact} = contactObj;
    console.log(ind);
    //console.log(form);
    console.log(editedContact);
    //console.log(contactObj);
    // console.log("before: ",contacts);
    contacts.splice(ind,1, editedContact);
    // console.log("after: ",contacts);
    this.setState({
      contacts:contacts
    });
  }
  
  sortContactHandler = (selectedValue) => {
    // contacts.sort(compareValues('phone', 'asc'))
    // console.log(selectedValue);
    const field = selectedValue === 'default' ? null : selectedValue;
    if (this.state.contacts.length > 1 && field !== null) {
      let contacts = [...this.state.contacts];
      contacts.sort(this.compareValues(field, 'asc'));
      console.log(contacts);
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
      //let displayedContacts = [];
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
    //console.log(contactList);
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
        <Modal show={this.state.newContactModal} modalClosed={this.newContactFormHideHandler} height={this.state.modalHeight} width={this.state.modalWidth} top={this.state.modalTop} left={this.state.modalLeft}>
          <AddContact cancel={this.newContactFormHideHandler} onAdd={(newContact)=>this.addContactHandler(newContact)}/>
        </Modal>
        <SortContact onSelect={this.sortContactHandler}></SortContact>
        {contactList}
      </div>
    );
  }
}

export default App;

