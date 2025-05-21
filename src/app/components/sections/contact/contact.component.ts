import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import emailjs from '@emailjs/browser';
import { EmailModalComponent } from '../../modal/email-modal/email-modal.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.sass'
})
export class ContactComponent {

  constructor(private dialog: MatDialog) {}

  public sendEmail(form: NgForm) {
    if (form.invalid) {
      return;
    }

    emailjs.send(
      'service_t3bwjym',
      'template_x4anis9',
      {
        from_name: form.value.name,
        from_email: form.value.email,
        subject: form.value.subject,
        message: form.value.message,
      },
      'foLK3gWTFMKvgKfYH'
    )
    .then(() => {
      this.dialog.open(EmailModalComponent, {
        data: {
          title: 'Success',
          message: 'Message sent successfully!'
        }
      });
      form.resetForm();
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      this.dialog.open(EmailModalComponent, {
        data: {
          title: 'Error',
          message: 'Failed to send the message. Please try again later.'
        }
      });
    });
  }
}
