import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  // TODO: type the error and handle all error cases
  handle(error: any) {
    if(error.message) {
      alert(error.message)
    }
    return of(null)
  }
}
