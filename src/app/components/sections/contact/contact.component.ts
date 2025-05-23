import { CommonModule } from '@angular/common';
import {
  Component,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import {
  FormsModule,
  Validators,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import emailjs from '@emailjs/browser';
import { EmailModalComponent } from '../../modal/email-modal/email-modal.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.sass',
})
export class ContactComponent {
  @ViewChild('submitButton') submitButton!: ElementRef<HTMLButtonElement>;
  emailForm: FormGroup;
  isSending = false;
  isSubmitted = false;
  isSent = false;

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef
  ) {
    this.emailForm = this.createForm();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'),
        ],
      ],
      subject: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
      ],
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(500),
        ],
      ],
    });
  }

  public sendEmail() {
    this.emailForm.markAllAsTouched();
    if (this.emailForm.invalid) return;

    this.isSending = true;
    this.emailForm.disable();

    emailjs
      .send(
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
        const dialogRef = this.dialog.open(EmailModalComponent, {
          data: {
            title: 'Success',
            message: 'Message sent successfully!',
          },
        });

        this.isSent = true;
        setTimeout(() => {
          this.emailForm.reset();
          Object.keys(this.emailForm.controls).forEach((key) => {
            const control = this.emailForm.get(key);
            control?.setErrors(null);
            control?.markAsUntouched();
            control?.markAsPristine();
          });
          this.isSending = false;
          this.cd.detectChanges();
        }, 3000);

        setTimeout(() => dialogRef.close(), 3000);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        this.dialog.open(EmailModalComponent, {
          data: {
            title: 'Error',
            message: 'Failed to send the message. Please try again later.',
          },
        });
      })
      .finally(() => {
        this.isSubmitted = true;
        this.isSending = false;
        this.emailForm.setErrors({ sending: true });
        setTimeout(() => {
          this.emailForm.setErrors(null);
          this.cd.detectChanges();
        }, 100);
      });
  }
}
