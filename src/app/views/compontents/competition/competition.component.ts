import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Competition } from 'src/app/core/models/competition/competition.class';
import { Team } from 'src/app/core/models/competition/competition.interfaces';
import { DanceOf } from 'src/app/core/models/danceof/danceof.class';
import { Robot } from 'src/app/core/models/robot/robot.class';
import { RobotParams } from 'src/app/core/models/robot/robot.interface';
import { CompetitionService } from 'src/app/core/services/competition/competition.service';
import { RobotService } from 'src/app/core/services/robot/robot.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss'],
  animations: [
    trigger('danceoff', [
      transition(':enter', [
        style({ opacity: 0, width: 0 }),
        query('*', [
          stagger(100, [
            animate('100ms', style({ opacity: 1, width: '100%' })),
          ])
        ]),
        transition(':leave', [
          animate('100ms', style({ opacity: 0, width: 0 }))
        ])
      ])
    ]),
  ]
})
export class CompetitionComponent implements OnInit {

  display: 'loading' | 'team-builder' | 'animation' | 'winner' = 'loading';

  // TEAM-BUILDER
  teams: Team[] = [{ name: '', members: [] }, { name: '', members: [] }];
  scores: number[] = [0, 0];

  message: string = '';
  input_placeholder: string = '';
  robot_list: RobotParams[] = [];

  current_team: number = 0;

  // ANIMATION
  competition_result: Competition = new Competition({ teams: [] });
  current_danceoff: DanceOf = new DanceOf({});
  show_winner = false;

  constructor(
    private _robot_service: RobotService,
    private _competition_service: CompetitionService
  ) { }

  ngOnInit(): void {
    this.message = 'We are building 2 awesome teams!';
    // TODO: handle error cases
    this._robot_service.get_all().subscribe(async robots => {
      if (robots !== null) {
        this.robot_list = robots.filter(robot => !robot.outOfOrder);
        for (const team of this.teams) {
          await this.pick_members(team);
        }

        setTimeout(() => {
          this.display = 'team-builder';
          this.message = 'Now you get to name Team #1';
          this.input_placeholder = 'Team #1 name goes here...';
        }, 1000); // tweak for better experience
      }
    });
  }

  async pick_members(team: Team) {
    const robots = this._robot_service.pick_members(this.robot_list);
    team.members = robots;
    for (const member of team.members) {
      await this._robot_service.preload_image(member);
    }
  }

  save_team() {
    if (this.current_team === 0) {
      this.message = 'Finally you get to name Team #2';
      this.input_placeholder = 'Team #2 name goes here...';
      this.current_team = 1;
    } else {
      this._competition_service.start_competition(this.teams).subscribe(result => {
        if (result != null) {
          this.competition_result = result;
          this.play_danceoffs_animation();
        }
      });
    }
  }

  play_danceoffs_animation(index = 0) {
    if (!this.competition_result?.dance_ofs) return;
    if (index === 0) this.message = `Let the danceoffs begin!`;
    if (index >= this.competition_result?.dance_ofs.length) {
      this.display = 'winner';
      this.message = `The winner team is ${this.competition_result?.winner?.name}!`;
    } else {
      this.current_danceoff = this.competition_result?.dance_ofs[index];
      const winner_team_index = this.teams.findIndex(team => team.members.findIndex(member => member.id === this.current_danceoff.winner));
      this.scores[winner_team_index]++;
      this.display = 'animation';
      setTimeout(() => {
        this.show_winner = true;
        this.message = `${this.teams[0].name} [ ${this.scores[0]} ] - ${this.teams[1].name} [ ${this.scores[1]} ]`;
        setTimeout(() => {
          this.show_winner = false;
          this.play_danceoffs_animation(index + 1);
        }, 2250)
      }, 1250);
    }
  }

}
