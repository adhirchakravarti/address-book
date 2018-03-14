import React from 'react';
//import './ContactList.css';
import Contact from './Contact/Contact';


const ContactList = (props) => props.contacts.map((element, index)=>{
                return (
                  <Contact 
                    name={element.name}
                    phone={element.phone}
                    email={element.email}
                    key={index}
                    index={index}
                    remove={()=>props.delete(index)}
                    edit={props.change}
                    edit2 = {props.change2}
                    />
                );
              });

              
        
    

export default ContactList;
