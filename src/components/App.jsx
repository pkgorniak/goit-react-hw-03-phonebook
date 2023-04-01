import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleAddContact = (name, number) => {
    if (
      this.state.contacts.some(
        contac => contac.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is alredy in contacts!`);
    } else {
      const contactId = nanoid();
      const contact = { id: contactId, name: name, number: number };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;

    return (
      <div className={css.wrapper}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={this.handleAddContact} />
        <h1 className={css.title}>Contacts</h1>
        <Filter filterValue={filter} onFilterChange={this.handleFilterChange} />
        <ContactList
          contacts={this.filterContacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App;
