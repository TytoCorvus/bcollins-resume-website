import { Component, Input } from '@angular/core';

@Component({
  selector: 'contact-links',
  templateUrl: './contact-links.component.html',
  styleUrls: ['./contact-links.component.scss']
})
export class ContactLinksComponent {
  @Input() large: boolean = false;

  contactLinks = [
    { href: 'https://www.linkedin.com/in/bryce-collins-b4b61b123', icon: 'fab fa-linkedin', alt: 'LinkedIn' },
    { href: 'https://twitter.com/TytoCorvus', icon: 'fab fa-twitter', alt: 'Twitter' },
    { href: 'https://github.com/TytoCorvus', icon: 'fab fa-github', alt: 'GitHub' },
    { href: '', icon: 'fab fa-discord', alt: 'Discord' },
    { href: 'mailto: brycecollins0@gmail.com', icon: 'fa fa-envelope', alt: 'Email' },
  ]
}
