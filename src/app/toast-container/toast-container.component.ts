import { Component, OnDestroy, OnInit } from '@angular/core';
import { IToast, ToastService, ToastType } from '../common/services/toast.service';
import { Subscription } from 'rxjs';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.scss']
})
export class ToastContainer implements OnInit, OnDestroy {

  activeToast: IToast | null = null;

  toastSubscription?: Subscription;

  //HTML Ref
  ToastType = ToastType;
  
  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
    this.toastSubscription = this.toastService.successToast$.subscribe(toast => {
      if(toast){
        this.activeToast = toast;
        var toastElList = [].slice.call(document.querySelectorAll('.toast'))
        toastElList.map(function (toastEl) {
          const newToast = new bootstrap.Toast(toastEl);
          newToast.show();
        })
      }
    })
  }

  ngOnDestroy(): void {
    this.toastSubscription?.unsubscribe();
  }
}
