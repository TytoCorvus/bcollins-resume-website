import { Component, OnInit } from '@angular/core';
import { IStyledMessage } from '../common/text-cycle/text-cycle.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  textCycleMessages: IStyledMessage[] = [
    { message: 'Computers', fontColor: '#4D7364ff', fontFamily: 'Playfair Display' },
    { message: 'Software', fontColor: '#7F9A91ff', fontFamily: 'Times New Roman' },
    { message: 'Dev Ops', fontColor: '#E47602ff', fontFamily: 'ITC Berkeley' },
    { message: 'People', fontColor: '#7F9A91ff', fontFamily: 'Noto Serif'},
    { message: 'Websites', fontColor: '#CBD9F4ff', fontFamily: 'Helvetica'},
  ]

  contactLinks = [
    { href: 'https://www.linkedin.com/in/bryce-collins-b4b61b123', icon: 'fab fa-linkedin', alt: 'LinkedIn' },
    { href: 'https://twitter.com/TytoCorvus', icon: 'fab fa-twitter', alt: 'Twitter' },
    { href: 'https://github.com/TytoCorvus', icon: 'fab fa-github', alt: 'GitHub' },
    { href: '', icon: 'fab fa-discord', alt: 'Discord' },
    { href: 'mailto: brycecollins0@gmail.com', icon: 'fa fa-envelope', alt: 'Email' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
