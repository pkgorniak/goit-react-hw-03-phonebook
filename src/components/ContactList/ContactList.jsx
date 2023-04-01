import ContactListItem from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts().map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
