import { Component } from 'react';
import { nanoid } from 'nanoid';
import './App.css';

import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

  handleAddContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name: name, number: number };
    const isContactExist = this.state.contacts.find(
      contact => contact.name === newContact.name
    );
    if (isContactExist) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      this.setState(
        e => ({
          contacts: [...e.contacts, newContact],
        }),
        () => {
          localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
        }
      );
    }
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  handleDisplayContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  handleDeleteContact = id => {
    const updatedContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({ contacts: updatedContacts }, () => {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    });
  };

  render() {
    return (
      <section>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          onFilterChange={this.handleFilterChange}
        />
        <ContactList
          contacts={this.handleDisplayContacts()}
          onDeleteContact={this.handleDeleteContact}
        />
      </section>
    );
  }
}
