import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  active = false;
  links = [
    { message: 'Home', href: '#hero'},
    { message: 'Experience', href: '#experience'},
    { message: 'About', href: '#about'},
    { message: 'Projects', href: '#projects'},
    { message: 'Contact', href: '#contact'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  setActive(val: boolean){
    this.active = val;
  }

  navToRef(href: string){
    document.querySelector(href)?.scrollIntoView({behavior: "smooth"});
  }
}
