import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

const ContactListItem = ({ contact, onDeleteContact }) => {
  return (
    <li className={css.contactListItem}>
      {contact.name}: {contact.number}
      <button
        className={css.contactListButton}
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.object,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
