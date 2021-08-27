import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Competition } from '../../models/competition/competition.class';
import { Team } from '../../models/competition/competition.interfaces';
import { Robot } from '../../models/robot/robot.class';
import { mock_robots } from '../../models/robot/_mock_robots';

@Injectable({
  providedIn: 'root'
})
export class MockCompetitionService {

  current_competition: Competition = new Competition({teams:[
      {name:'1', members: mock_robots.slice(0,5).map(r => new Robot(r))},
      {name:'2', members: mock_robots.slice(0,5).map(r => new Robot(r))},
  ]});

  constructor() { }

  start_competition(teams: Team[]): Observable<Competition|null> {
    return of(this.current_competition);
  }
}
