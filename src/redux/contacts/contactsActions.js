import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
// import constants from '../constants.js';

const addContacts = createAction('contact/add', (name, number) => {
  return {
    payload: {
      contact: {
        name,
        id: uuidv4(),
        number
      }
    }
  }
})

const handleDelete = createAction('contact/del', nameId => ({payload: {id: nameId}}))

const handleFilter = createAction('contact/filter', filter=> ({payload: {filter}}) )


export default {
  addContacts,
  handleDelete,
  handleFilter
}