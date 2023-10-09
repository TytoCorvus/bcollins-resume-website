import { Component } from '@angular/core';
import { IStyledMessage } from '../common/text-cycle/text-cycle.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  textCycleMessages: IStyledMessage[] = [
    { message: 'Computers', fontColor: '#FFA371', fontFamily: 'ArchivoNarrow' },
    { message: 'Software', fontColor: '#8BBBA8', fontFamily: 'ArchivoNarrow' },
    { message: 'People', fontColor: '#FFDB6E', fontFamily: 'ArchivoNarrow'},
    { message: 'The Web', fontColor: '#CBD9F4ff', fontFamily: 'ArchivoNarrow'},
    { message: 'Dev Ops', fontColor: '#8BBBA8', fontFamily: 'ArchivoNarrow' },
  ]
}
