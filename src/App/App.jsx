import React, { Component } from 'react';
import { connect } from 'react-redux';

import Contacts from '../Contacts/Contacts';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../FilterContacts/FilterContacts';
import contactsOperations from '../redux/contacts/contactsOperations'

import Style from './App.module.css'


class App extends Component {

  componentDidMount() {
    this.props.toFetchContacts()
  }
  
  render() {
    console.log(this.props);
    return (
      <div className={Style.Container}>
        
        <h1 className={Style.fontColor}>Phonebook</h1>
        <ContactForm />
        <h2>Find contacts by name</h2>
        <Filter />
        <Contacts />
      </div>
    )}
  
}

const mapDispatchToProps = {
  toFetchContacts: contactsOperations.fetchContacts
}

export default connect(null, mapDispatchToProps)(App);
