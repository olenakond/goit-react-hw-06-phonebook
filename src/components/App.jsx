import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Container, Title, TitleList } from './App.styled';

const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <TitleList>Contacts</TitleList>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;
