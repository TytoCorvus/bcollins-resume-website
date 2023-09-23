import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'text-cycle',
  templateUrl: './text-cycle.component.html',
  styleUrls: ['./text-cycle.component.scss']
})
export class TextCycleComponent implements OnInit {
  @Input() messages!: IStyledMessage[];
  @Input() cycleDuration!: number;
  @Input() cycleDelay: number = 0;

  @ViewChild('textCycle') textCycle!: ElementRef;

  currentMessage?: IStyledMessage;
  messageQueue: IStyledMessage[] = [];

  maxCharacterLength: number = 0;

  messageInterval: any;
  fadeOutInterval: any;

  constructor() { }

  ngOnInit(): void {
    this.messageQueue = _.cloneDeep(this.messages);
    this.currentMessage = this.messageQueue[0];
    
    setTimeout(() => {
      this.messageInterval = setInterval(() => {
        this.textCycle.nativeElement.classList.remove('fading-in');
        this.textCycle.nativeElement.classList.add('fading-out');
      }, this.cycleDuration);
    }, 0 + this.cycleDelay);

    setTimeout(() => {
      this.fadeOutInterval = setInterval(() => {
        this.updateMessageQueue();
        this.textCycle.nativeElement.classList.remove('fading-out');
        this.textCycle.nativeElement.classList.add('fading-in');
      }, this.cycleDuration);
    }, 1400 + this.cycleDelay);

    this.maxCharacterLength = this.messages.reduce((max, message) => {
      if (message.message.length > max) {
        return message.message.length;
      };
      return max;
    }, 0);
  }

  ngOnDestroy(): void {
    clearInterval(this.messageInterval);
  }

  updateMessageQueue(): void {
    this.messageQueue.push(this.messageQueue.shift()!);
    this.currentMessage = this.messageQueue[0];
  }
}

export interface IStyledMessage {
  message: string;
  fontFamily: string;
  fontColor: string;
  fontColorEnd?: string;
}
