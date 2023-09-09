import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts = [
    { name: 'Email', link: 'mailto: brycecollins0@gmail.com', icon: '../../assets/icons/gmail_icon.svg', message: 'Email'},
    { name: 'Twitter', link: 'https://twitter.com/TytoCorvus', icon: '../../assets/icons/twitter_icon.svg', message: 'Twitter'},
    { name: 'LinkedIn', link: '', icon: '../../assets/icons/linkedin_icon.svg', message: 'LinkedIn'},
    { name: 'GitHub', link: 'https://github.com/TytoCorvus', icon: '../../assets/icons/github_icon.svg', message: 'GitHub'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
