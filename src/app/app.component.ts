import { AfterViewInit, Component } from '@angular/core';
import * as Parallax from 'parallax-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'web';

  ngAfterViewInit(): void {
    const scene = document.getElementById('scene');
    if(scene){
      const parallax = new Parallax(scene);
      parallax.friction(0.1, 0.1);
    }
  }
}
