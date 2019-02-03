import React, { Component }  from 'react';
//import './ContactList.css';
import Contact from './Contact/Contact';


class ContactList extends Component {
  componentWillReceiveProps ( nextProps ) {
      // console.log( '[UPDATE ContactList.js] Inside componentWillReceiveProps', nextProps );
  }

  // shouldComponentUpdate ( nextProps, nextState ) {
  //     console.log( '[UPDATE ContactList.js] Inside shouldComponentUpdate', nextProps, nextState );
  //     return nextProps.contacts !== this.props.contacts ||
  //         nextProps.delete !== this.props.delete ||
  //         nextProps.change !== this.props.change;
  //     // return true;
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //     console.log( '[UPDATE ContactList.js] Inside getDerivedStateFromProps', nextProps, prevState ); // never fired
  // }
  // componentWillUpdate ( nextProps, nextState ) {
  //     console.log( '[UPDATE ContactList.js] Inside componentWillUpdate', nextProps, nextState );
  // }

  // componentDidUpdate () {
  //     console.log( '[UPDATE ContactList.js] Inside componentDidUpdate' );
  // }

  render() {
    // console.log( '[ContactList.js] Inside render()' );  
    return this.props.contacts.map((element, index)=>{
          return (
            
             
              <Contact 
                name={element.name}
                phone={element.phone}
                email={element.email}
                organization={element.organization}
                notes={element.notes}
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
