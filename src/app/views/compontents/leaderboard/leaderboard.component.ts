import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { DanceOfAPIResponse } from 'src/app/core/models/danceof/danceof.interface';
import { Robot } from 'src/app/core/models/robot/robot.class';
import { RobotParams } from 'src/app/core/models/robot/robot.interface';
import { DaceoffsService } from 'src/app/core/services/danceoffs/daceoffs.service';
import { RobotService } from 'src/app/core/services/robot/robot.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  message: string = 'Leaderboard'
  leader_board: {robot: Robot, score: number}[] = [];
  display: 'loading'|'list' = 'loading';

  constructor(
    private _danceoffs_service: DaceoffsService,
    private _robot_service: RobotService
  ) { }

  ngOnInit(): void {
    this.display = 'loading';

    forkJoin({
      danceoffs: this._danceoffs_service.get_all(),
      robots: this._robot_service.get_all()
    }).subscribe(({robots, danceoffs}) => {
      if(robots && danceoffs) {
        this.build_leaderboard(robots, danceoffs);
      }
    })
    this._danceoffs_service.get_all().subscribe((danceoffs: DanceOfAPIResponse[]|null) => {
      if(danceoffs) {
      }
    });
  }

  build_leaderboard(robots: RobotParams[], danceoffs: DanceOfAPIResponse[]) {
    const score_map = new Map(robots.map(robot => [ robot.id, 0 ]));
    const robot_map = new Map(robots.map(robot => [ robot.id, robot ]));
    danceoffs.map(danceoff => {
      let robot_score = score_map.get(danceoff.winner);
      if(robot_score != null) {
        score_map.set(danceoff.winner, robot_score + 1);
      }
    });

    const leader_board = [...score_map.entries()]
      .sort(([_,score_a],[__,score_b]) => {
        return score_b - score_a;
      })
      .map(([robot_id, score]) => {
        const robot = robot_map.get(robot_id);
        if(robot) {
          return {
            robot: new Robot(robot),
            score
          }
        } else {
          return null;
        }
      })

    this.leader_board = leader_board as any;
    this.display = 'list';
  }
}
