import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, first, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Competition } from '../../models/competition/competition.class';
import { Team } from '../../models/competition/competition.interfaces';
import { DanceOf } from '../../models/danceof/danceof.class';
import { DanceOfAPIResponse, DanceOfParams } from '../../models/danceof/danceof.interface';
import { Robot } from '../../models/robot/robot.class';
import { ErrorService } from '../error/error.service';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  private URL = `${environment.api_url}/danceoffs`;

  current_competition: Competition = new Competition({teams:[]});

  constructor(
    private _http_client: HttpClient,
    private _error_handler: ErrorService,
  ) { }

  start_competition(teams: Team[]) {
    // Create competition
    this.current_competition = new Competition({ teams });
    // Determine competition outcome
    this.current_competition.start();
    // save danceoffs to server
    const danceoffs = this.current_competition.dance_ofs.map(dance_of => dance_of.toJSON());
    const body = { danceoffs };
    return this._http_client.post<DanceOfAPIResponse[]>(this.URL, body).pipe(
      first(),
      catchError(error => this._error_handler.handle(error)),
      map((response) => {
        if(response === null) return response;
        
        // Replace danceoffs with server response
        this.current_competition.dance_ofs = response.map((danceoff: DanceOfAPIResponse) => {
          const dancers: Robot[] = [];

          for (const team of this.current_competition.teams) {
            const dancer = team.members.find(robot => robot.id === danceoff.winner || robot.id === danceoff.loser);
            if (dancer) {
              dancers.push(dancer);
            }
          }

          const params: DanceOfParams = {
            id: danceoff.id,
            winner: danceoff.winner,
            loser: danceoff.loser,
            danced_at: new Date(danceoff.dancedAt),
            dancers
          }

          return new DanceOf(params);
        });

        this.current_competition.determine_winner();
        this.current_competition.finished = true;

        return this.current_competition;
      })
    )
  }
}
