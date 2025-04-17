// In contact-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../Model/contact';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private contactsService: ContactsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Generate a new ID
      const newId = Math.max(...this.contactsService.contacts().map(c => c.id), 0) + 1;
      
      // Create a new contact object
      const newContact: Contact = {
        id: newId,
        ...this.contactForm.value
      };
      
      // Add the contact using the service
      this.contactsService.addContact(newContact);
      
      // Reset form and navigate back to the list
      this.contactForm.reset();
      this.router.navigate(['/']);
    }
  }

  onCancel() {
    this.contactForm.reset();
    this.router.navigate(['/']);
  }
}
