import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError, lastValueFrom, map, of, tap } from 'rxjs';
import { ToastService, ToastType } from '../common/services/toast.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('form') form!: NgForm;

  model = {
    name: '',
    from: '',
    subject: '',
    message: ''
  };

  photoURL= 'https://brycecollins-resume-website-assets.s3.us-west-2.amazonaws.com/photos/FordyceSnow2020-8.jpeg';

  constructor(private httpClient: HttpClient, private toastService: ToastService) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    if(!this.form.valid) {
      this.form.form.markAllAsTouched();
    } else {
      const success = await this.sendEmail(this.model);
      if(success) {
        this.toastService.createToast({ head: 'Success!', message: 'Your message has been sent!', type: ToastType.SUCCESS });
        this.form.resetForm();
      } else {
        this.toastService.createToast({ head: 'Error', message: 'There was a problem sending your message.', type: ToastType.ERROR });
      }
    }
  }

  async sendEmail(form: any): Promise<boolean> {
    return lastValueFrom(this.httpClient.post('https://api.brycecollins.net:3001/email/inquiry', form, {
      responseType: 'text'
    }).pipe(
    map((res) => res === 'success'),
    catchError(() => of(false))
    ));
  }
}
