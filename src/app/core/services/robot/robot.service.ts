import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, first } from 'rxjs/operators';
import { ErrorService } from '../error/error.service';

@Injectable({
  providedIn: 'root'
})
export class RobotService {

  private URL = `${environment.api_url}/robots`;

  constructor(
    private _http_client: HttpClient,
    private _error_handler: ErrorService,
  ) {}

  get_all() {
    return this._http_client.get(this.URL).pipe(
      first(),
      catchError(error => this._error_handler.handle(error))
    )
  }
  
  get_one(id: string) {
    return this._http_client.get(`${this.URL}/${id}`).pipe(
      first(),
      catchError(error => this._error_handler.handle(error))
    )
  }

}
