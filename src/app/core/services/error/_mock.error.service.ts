import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockErrorService {

  constructor() { }

  handle(error: any) {
    return of(null)
  }
}
