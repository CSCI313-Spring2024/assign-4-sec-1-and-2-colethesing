import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { Contact } from './Model/contact';
// import { CONTACTS } from './Data/contact-data';
import { filter } from 'rxjs';
import { ContactsService } from './contacts.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactCardComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
title = 'contact-list'

contacts: Contact[] = [];

isAddingContact = false;

constructor(private contactsService: ContactsService, private router: Router) {}
  ngOnInit() {
    this.contacts = this.contactsService.contacts();

  this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: any) => {
      this.isAddingContact = event.urlAfterRedirects === '/add';
    });
}
}
