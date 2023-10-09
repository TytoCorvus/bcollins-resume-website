import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError, lastValueFrom, map, of } from 'rxjs';
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

  contacts = [
    { name: 'Email', link: 'mailto: brycecollins0@gmail.com', icon: '../../assets/icons/gmail_icon.svg', message: 'Email'},
    { name: 'Twitter', link: 'https://twitter.com/TytoCorvus', icon: '../../assets/icons/twitter_icon.svg', message: 'Twitter'},
    { name: 'LinkedIn', link: '', icon: '../../assets/icons/linkedin_icon.svg', message: 'LinkedIn'},
    { name: 'GitHub', link: 'https://github.com/TytoCorvus', icon: '../../assets/icons/github_icon.svg', message: 'GitHub'}
  ]

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
    return lastValueFrom(this.httpClient.post<string>('api.brycecollins.net:3000', this.model).pipe(
      catchError(() => of('failure')),
      map(res => res === 'success')))
  }
}
