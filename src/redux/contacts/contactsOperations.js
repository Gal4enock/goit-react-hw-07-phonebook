import axios from axios;
import contactsActions from './contactsActions';

const AddContacts = (name, number) => dispatch => {
  dispatch(contactsActions.addContactsRequest())
  axios.post('http://localhost:2000/contacts', { name, number })
  .then(resp => dispatch(contactsActions.addContactsSuccess(resp.data)))
  .catch(err => dispatch(contactsActions.addContactsError(err)))
}

export default {
  AddContacts
}