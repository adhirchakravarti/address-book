import React, { Component }  from 'react';
//import './ContactList.css';
import Contact from './Contact/Contact';


class ContactList extends Component {
    
  render() {
      return this.props.contacts.map((element, index)=>{
          return (
            <Contact 
              name={element.name}
              phone={element.phone}
              email={element.email}
              key={index}
              index={index}
              remove={()=>this.props.delete(index)}
              edit={this.props.change}
              edit2 = {this.props.change2}
              />
          );
      });
    }
}

export default ContactList;
