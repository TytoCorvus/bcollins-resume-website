import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable(
    { providedIn: 'root'}
)
export class ToastService {
    
    toastDuration = 5000;

    private successToast: BehaviorSubject<IToast | null> = new BehaviorSubject<IToast | null>(null);
    private errorToast: BehaviorSubject<IToast | null> = new BehaviorSubject<IToast | null>(null);

    public successToast$ = this.successToast.asObservable();
    public errorToast$ = this.errorToast.asObservable();

    createToast(toast: IToast) {
        this.successToast.next(toast);
    }
}

export interface IToast {
    head: string;
    message: string;
    type: ToastType;
}

export enum ToastType {
    SUCCESS,
    ERROR
}