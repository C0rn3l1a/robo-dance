import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, first } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DanceOfAPIResponse } from '../../models/danceof/danceof.interface';
import { ErrorService } from '../error/error.service';

@Injectable({
  providedIn: 'root'
})
export class DaceoffsService {
  private URL = `${environment.api_url}/danceoffs`;

  constructor(
    private _http_client: HttpClient,
    private _error_handler: ErrorService,
  ) { }

  get_all(): Observable<DanceOfAPIResponse[] | null> {
    return this._http_client.get<DanceOfAPIResponse[]>(this.URL).pipe(
      first(),
      catchError(error => this._error_handler.handle(error))
    )
  }

}
