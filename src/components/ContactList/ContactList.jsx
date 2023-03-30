import { useSelector } from 'react-redux/es/exports';
import { Contacts } from './ContactList.styled';
import { ContactItem } from './ContactItem';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <Contacts>
      {visibleContacts.map(contact => {
        return <ContactItem key={contact.id} contact={contact} />;
      })}
    </Contacts>
  );
};
