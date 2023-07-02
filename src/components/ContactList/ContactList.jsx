import PropTypes from 'prop-types';
import './ContactList.css';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="contacts-content">
      {contacts.map(contact => (
        <li key={contact.id}>
          <span>
            {contact.name}: {contact.number}
          </span>
          <button
            className="contacts-btn"
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
