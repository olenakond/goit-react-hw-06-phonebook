import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { Element, Button, Name } from './Contact.styled';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <Element>
      <Name>
        {contact.name}: {contact.number}
      </Name>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </Element>
  );
};

export default Contact;
