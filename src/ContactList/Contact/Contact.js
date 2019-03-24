import React, { Component } from 'react';
import './Contact.css';
import Aux from '../../hoc/AuxFile';
import Modal from '../../Modal/Modal';
import EditContact from '../../EditContact/EditContact';
import ContactDetail from './ContactDetail/ContactDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Contact extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            name:this.props.name,
            phone:this.props.phone,
            email:this.props.email,
            organization:this.props.organization,
            notes:this.props.notes,
            index:this.props.index,
            showModal: false,
            modalHeight:0,
            modalWidth:0,
            modalLeft:'auto',
            modalTop:'auto',
            showDetail: false
        };
        this.change = this.change.bind(this);
        this.save = this.save.bind(this);
        this.displayModalHandler = this.displayModalHandler.bind(this);
        this.hideModalHandler = this.hideModalHandler.bind(this);
        this.showDetailHandler = this.showDetailHandler.bind(this);
    }
    

    componentDidUpdate(prevProps, prevState) {
        if (this.props.name !== prevProps.name || this.props.phone !== prevProps.phone ||
            this.props.email !== prevProps.email || this.props.organization !== prevProps.organization 
            || this.props.notes !== prevProps.notes) {
            this.setState({
                name:this.props.name,
                phone:this.props.phone,
                email:this.props.email,
                organization:this.props.organization,
                notes:this.props.notes,
                index:this.props.index
            });
        }
    }

    change = e => {
        e.preventDefault();
        
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    save = (contactObj) => {
        contactObj.index = this.state.index;
        this.setState(()=>{
            return {
                name: contactObj.name,
                phone: contactObj.phone,
                email: contactObj.email,
                organization: contactObj.organization,
                notes: contactObj.notes,
                showModal: false
            };
        });
        this.props.edit(contactObj);
        
    }
    
    displayModalHandler = () => {
        let modalChildHeight = document.getElementsByClassName('outer')[0].clientHeight;
        let modalChildWidth = document.getElementsByClassName('outer')[0].clientWidth;
        if (modalChildHeight !== undefined && modalChildWidth !== undefined) {
            let modalLeft = Math.round(50 - (((modalChildWidth / window.innerWidth)/2)*100)) + '%';
            let modalTop = Math.round(50 - (((modalChildHeight / window.innerHeight)/2)*100)) + '%';
            this.setState(()=>{
                return {
                    showModal:true,
                    modalHeight:modalChildHeight,
                    modalWidth:modalChildWidth,
                    modalLeft:modalLeft,
                    modalTop:modalTop
                }
            });
        }
        
      }
    
      hideModalHandler = () => {
        this.setState({
          showModal:false
        });
      }

      showDetailHandler = () => {
        this.setState((prevState)=>({showDetail: !prevState.showDetail}));
      }

    render() {
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
                                </div>
                            </div>
                        </div>
                        <div className="col-4 float-right">
                            <ContactDetail show={this.state.showDetail} contact={this.state}></ContactDetail>
                        </div>
                    </div>
                </div>
                <Modal show={this.state.showModal} height={this.state.modalHeight} width={this.state.modalWidth} top={this.state.modalTop} left={this.state.modalLeft}>
                    <EditContact cancel={this.hideModalHandler} save={this.save} name={this.state.name} userDetail={this.state}/>
                </Modal>
            </Aux>
        );
    }
}


export default Contact;

