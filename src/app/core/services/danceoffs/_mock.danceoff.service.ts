import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DanceOfAPIResponse } from '../../models/danceof/danceof.interface';
import { mock_danceofs } from '../../models/danceof/_mock_danceofs';

@Injectable({
  providedIn: 'root'
})
export class MockDanceoffsService {

  constructor() { }

  get_all(): Observable<DanceOfAPIResponse[] | null> {
    return of(mock_danceofs)
  }

}
