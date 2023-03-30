import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import { deleteContact } from 'redux/contactsSlice';
import { Item, Button } from './ContactList.styled';
export const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  
  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <Item>
        <p>
          {name}: {number}
        </p>
        <Button type="button" onClick={() => handleDelete(id)}>
          Delete
        </Button>
      </Item>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
