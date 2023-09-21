import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  links = [
    { name: 'Home', url: '/', icon: 'fa-home'},
    { name: 'About', url: '/about', icon: 'fa-user' },
    { name: 'Experience', url: '/experience', icon: 'fa-briefcase' },
    { name: 'Projects', url: '/projects', icon: 'fa-wrench'},
    { name: 'Contact', url: '/contact', icon: 'fa-envelope' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
