import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, Input, Button } from './ContactForm.styled';

const ContactForm = ({ createContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'name') {
      setName(value);
    } else {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    createContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>Name</label>
      <Input
        onChange={handleChange}
        value={name}
        id={nameInputId}
        type="text"
        name="name"
        pattern="[A-Za-z]{1,32}"
        title="Name may contain only letters. For example Adrian, Jacob."
        required
      />
      <label htmlFor={numberInputId}>Number</label>
      <Input
        onChange={handleChange}
        value={number}
        id={numberInputId}
        type="tel"
        name="number"
        pattern="[0-9]{1,32}"
        title="Phone number must be digits"
        required
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
