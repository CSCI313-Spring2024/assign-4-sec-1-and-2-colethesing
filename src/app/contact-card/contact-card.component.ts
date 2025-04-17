import { Component, Input } from '@angular/core';
import { Contact } from '../Model/contact';
import { ContactsService } from '../contacts.service';



@Component({
  selector: 'app-contact-card',
  imports: [],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.css'
})
export class ContactCardComponent {
  @Input() contact!: Contact;
  @Input() index !: number;

  constructor(private ContactsService: ContactsService) {}

  editContact() {
    this.contact = { ...this.contact };
    const contactEmail = this.contact.email;
  }
  onDelete() {
    console.log('Delete contact:', this.contact);
    this.ContactsService.deleteContact(this.contact);
    }
      
  }