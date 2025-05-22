import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, Validators, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
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
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.sass'
})
export class ContactComponent {
  emailForm: FormGroup;

  constructor(private dialog: MatDialog, private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern('[a-zA-Z ]*')
      ]],
      email: ['', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}')
      ]],
      subject: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100)
      ]],
      message: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(500)
      ]]
    });
  }

  public sendEmail() {
    if (this.emailForm.invalid) {
      // Mark all fields as touched to show errors
      this.emailForm.markAllAsTouched();
      return;
    }

    emailjs.send(
      'service_t3bwjym',
      'template_x4anis9',
      {
        from_name: this.emailForm.value.name,
        from_email: this.emailForm.value.email,
        subject: this.emailForm.value.subject,
        message: this.emailForm.value.message,
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
      this.emailForm.reset();
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
