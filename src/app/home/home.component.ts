import { Component } from '@angular/core';
import { IStyledMessage } from '../common/text-cycle/text-cycle.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  textCycleMessages: IStyledMessage[] = [
    { message: 'Computers', fontColor: '#4D7364ff', fontFamily: 'Playfair Display' },
    { message: 'Software', fontColor: '#7F9A91ff', fontFamily: 'Times New Roman' },
    { message: 'Dev Ops', fontColor: '#E47602ff', fontFamily: 'ITC Berkeley' },
    { message: 'People', fontColor: '#7F9A91ff', fontFamily: 'Noto Serif'},
    { message: 'Websites', fontColor: '#CBD9F4ff', fontFamily: 'Helvetica'},
  ]
}
