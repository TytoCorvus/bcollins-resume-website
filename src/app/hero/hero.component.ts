import { Component, AfterViewInit } from '@angular/core';
import * as Parallax from 'parallax-js';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit {

  backgroundElement: any;

  constructor() { }

  ngAfterViewInit(): void {
    const scene = document.getElementById('hero');
    if(scene){
      const parallax = new Parallax(scene);
      parallax.friction(0.1, 0.1);
    }
  }

}
