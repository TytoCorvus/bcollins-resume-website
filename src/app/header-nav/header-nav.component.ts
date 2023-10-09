import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  slideOut = false;

  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
  }

  routeTo(url: string, toggleSlideOut: boolean = false) {
    this.router.navigateByUrl(url);
    if (toggleSlideOut) {
      this.toggleSlideOut();
    }
  }

  toggleSlideOut() {
    this.slideOut = !this.slideOut;
  }


}
