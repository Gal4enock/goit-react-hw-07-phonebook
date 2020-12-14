import React from 'react';

import Contacts from '../Contacts/Contacts';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../FilterContacts/FilterContacts';

import Style from './App.module.css'


const App = function () {
    
    return (
      <div className={Style.Container}>
        
        <h1 className={Style.fontColor}>Phonebook</h1>
        <ContactForm />
        <h2>Find contacts by name</h2>
        <Filter />
        <Contacts />
      </div>
    )
  
}

export default App;
