import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Container, Title, TitleList } from './App.styled';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('contacts'));
    if (localData && localData.length > 0) {
      setContacts(localData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const createContact = dataFromForm => {
    const isContactExist = contacts.find(
      contact => contact.name === dataFromForm.name
    );
    if (isContactExist) {
      return alert(`${dataFromForm.name} is already in contacts.`);
    }
    const newContact = {
      ...dataFromForm,
      id: nanoid(),
    };
    setContacts(prev => [...prev, newContact]);
  };

  const handleFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  const handleDelete = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
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
