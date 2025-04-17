import { Injectable, signal } from '@angular/core';
import { Contact } from './Model/contact';
import {CONTACTS } from './Data/contact-data';



@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  
  private _contacts = signal<Contact[]>(CONTACTS);

  get contacts() {
    return this._contacts.asReadonly();
  }

  addContact(contact: Contact) {
    this._contacts.update(contacts => [...contacts, contact]);
    console.log('Contact added:', contact);
  }
  deleteContact(contactToDelete: Contact) {
    console.log('Deleting contact:', contactToDelete);
    console.log('Current contacts before:', this._contacts());
    this._contacts.update(contacts => contacts.filter(c => c.id !== contactToDelete.id));
    console.log('Updated contacts before:', this._contacts());
  }
  }

