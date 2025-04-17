// import { Routes } from '@angular/router';

// export const routes: Routes = [];
import { Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';

export const routes: Routes = [
    {
        path: 'add',
        component: ContactFormComponent,
        title: 'Add Contact'
    },
    {
        path: 'edit/:email',
        component: ContactFormComponent,
        title: 'Edit Contact'
    }

];
