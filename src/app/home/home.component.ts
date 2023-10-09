import { Component } from '@angular/core';
import { IStyledMessage } from '../common/text-cycle/text-cycle.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  textCycleMessages: IStyledMessage[] = [
    { message: 'Computers', fontColor: '#FF813E', fontFamily: 'Playfair Display' },
    { message: 'Software', fontColor: '#B2E4FF', fontFamily: 'Times New Roman' },
    { message: 'People', fontColor: '#FFD24A', fontFamily: 'Playfair Display'},
    { message: 'The Web', fontColor: '#CBD9F4ff', fontFamily: 'Helvetica'},
    { message: 'Dev Ops', fontColor: '#80C658', fontFamily: 'ITC Berkeley' },
  ]
}
