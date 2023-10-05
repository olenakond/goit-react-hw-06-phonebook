import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Container, Title, TitleList } from './App.styled';
import { getContacts, getFilterValue } from 'redux/selectors';
import { addContact, deleteContact } from 'redux/contactsSlice';
import { setFilter } from 'redux/filterSlice';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const createContact = dataFromForm => {
    const isContactExist = contacts.find(
      contact => contact.name === dataFromForm.name
    );
    if (isContactExist) {
      return alert(`${dataFromForm.name} is already in contacts.`);
    }
    dispatch(addContact(dataFromForm));
  };

  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const createContactsByfilter = () => {
    if (!filter) {
      return;
    }
    const ContactsByFilter = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return ContactsByFilter;
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm createContact={createContact} />
      <TitleList>Contacts</TitleList>
      <Filter handleFilter={handleFilter} />
      <ContactList
        contacts={createContactsByfilter() ?? contacts}
        handleDelete={handleDelete}
      />
    </Container>
  );
};

export default App;
