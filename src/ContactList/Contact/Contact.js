import React, { Component } from 'react';
import './Contact.css';
import Aux from '../../hoc/Aux';
import Modal from '../../Modal/Modal';
import EditContact from '../../EditContact/EditContact';
import ContactDetail from './ContactDetail/ContactDetail';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class Contact extends Component {
    constructor( props ) {
        super( props );
        // console.log( '[Contact.js] Inside Constructor', props );
        this.state = {
            name:this.props.name,
            phone:this.props.phone,
            email:this.props.email,
            organization:this.props.organization,
            notes:this.props.notes,
            index:this.props.index,
            showModal: false,
            showDetail: false
        };
    }
    
    

    componentWillReceiveProps ( nextProps ) {
        // console.log( '[UPDATE Contact.js] Inside componentWillReceiveProps', nextProps );
        if (this.props.name !== nextProps.name || this.props.phone !== nextProps.phone ||
            this.props.email !== nextProps.email || this.props.organization !== nextProps.organization 
            || this.props.notes !== nextProps.notes) {
            this.setState({
                name:nextProps.name,
                phone:nextProps.phone,
                email:nextProps.email,
                organization:nextProps.organization,
                notes:nextProps.notes,
                index:nextProps.index
            });
        }
    }

    // shouldComponentUpdate ( nextProps, nextState ) {
    //     console.log( '[UPDATE Contact.js] Inside shouldComponentUpdate', nextProps, nextState );
    //     return nextProps.name !== this.props.name ||
    //         nextProps.phone !== this.props.phone ||
    //         nextProps.email !== this.props.email;
    //     // return true;
    // }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log( '[UPDATE Contact.js] Inside getDerivedStateFromProps', nextProps, prevState ); // never fired
    // }

    // componentWillUpdate ( nextProps, nextState ) {
    //     console.log( '[UPDATE Contact.js] Inside componentWillUpdate', nextProps, nextState );
    // }

    // componentDidUpdate () {
    //     console.log( '[UPDATE Contact.js] Inside componentDidUpdate' );
    // }

    change = e => {
        e.preventDefault();
        //console.log(e.currentTarget);
        
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
        //console.log(this.state);
    }

    save = (contactObj) => {
        //e.preventDefault();
        // console.log(e.target.children[0].children[0].value);
        // let name = e.target.children[0].children[0].value;
        // let phone = e.target.children[1].children[0].value;
        // let email = e.target.children[2].children[0].value;
        // this.setState({
        //     name:name,
        //     phone:phone,
        //     email:email
        // });
        console.log(contactObj);
        contactObj.index = this.state.index;
        console.log(contactObj);
        // let currentState = {
        //     ...this.state
        // };
        this.setState({
            name: contactObj.name,
            phone: contactObj.phone,
            email: contactObj.email,
            organization: contactObj.organization,
            notes: contactObj.notes,
            showModal: false
        });
        // console.log(this.state);
        this.props.edit(contactObj);
        
    }

    
    
    displayModalHandler = () => {
        this.setState({
          showModal:true
        });
      }
    
      hideModalHandler = () => {
        this.setState({
          showModal:false
        });
      }

      iconClickTest = () => {
          console.log("icon clicked!");
      }

      showDetailHandler = () => {
        if (this.state.showDetail === false) {
            this.setState({showDetail: true});
        } else {
            this.setState({showDetail: false});
        }
      }

    render() {
        // let editForm = this.state.editForm; // deprecated
        // console.log( '[Contact.js] Inside render()' );
        return (
            <Aux>
                <div className="row">
                    <div className="col-12">
                        <div className="col-8 float-left">
                            <div className="list-group-item clearfix">
                                <div className="float-left">
                                    <h4 className="list-group-item-heading">{this.props.name}</h4>
                                    <h6 className="list-group-item-text">Phone: {this.props.phone}</h6>
                                    <h6 className="list-group-item-text">Email: {this.props.email}</h6>
                                </div>
                                <div className="float-right">
                                    <button className="btn btn-light" onClick={this.props.remove}><FontAwesomeIcon icon="trash-alt"/></button>
                                    <button className="btn btn-light" onClick={this.displayModalHandler}><FontAwesomeIcon icon="edit"/></button>
                                    <button className="btn btn-light" onClick={this.showDetailHandler}><FontAwesomeIcon icon={this.state.showDetail? "chevron-left": "chevron-right"}/></button>
                                    {/* <button className="btn btn-light"><FontAwesomeIcon icon="fas fa-chevron-left"/>></button> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-4 float-right">
                            <ContactDetail show={this.state.showDetail} contact={this.state}></ContactDetail>
                        </div>
                    </div>
                </div>
                {/* <div className="ContactRow">
                    <div className="ContactColumn">Name: {this.props.name}</div>
                    <div className="ContactColumn">Phone: {this.props.phone}</div>
                    <div className="ContactColumn">Email: {this.props.email}</div>
                    <div className="ContactColumn">
                        <button className="btn btn-light" onClick={this.props.remove}><FontAwesomeIcon icon="trash-alt" size="lg" color="red" onClick={this.iconClickTest}/></button>
                    </div>
                    <div className="ContactColumn">
                        <button className="btn btn-light" onClick={this.displayModalHandler}><FontAwesomeIcon icon="pen-square" size="lg"/></button>
                    </div>
                    
                </div> */}
                {/* {editForm} */}
                <Modal show={this.state.showModal} modalClosed={this.hideModalHandler}>
                    <EditContact cancel={this.hideModalHandler} save={this.save} name={this.state.name}/>
                </Modal>
            </Aux>
        );
    }
}


export default Contact;

