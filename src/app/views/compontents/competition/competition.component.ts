import { Component, OnInit } from '@angular/core';
import { Competition } from 'src/app/core/models/competition/competition.class';
import { Team } from 'src/app/core/models/competition/competition.interfaces';
import { Robot } from 'src/app/core/models/robot/robot.class';
import { RobotParams } from 'src/app/core/models/robot/robot.interface';
import { RobotService } from 'src/app/core/services/robot/robot.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit {

  loading = true;

  teams: Team[] = [{ name: '', members: [] },{ name: '', members: [] }];

  message: string = '';
  input_placeholder: string = '';
  robot_list: RobotParams[] = [];

  current_team: number = 0;


  constructor(
    private _robot_service: RobotService
  ) { }

  ngOnInit(): void {
    this.message = 'We are building 2 awesome teams of robots for you';
    // TODO: handle error cases
    this._robot_service.get_all().subscribe(robots => {
      if(robots !== null) {
        this.robot_list = robots.filter(robot => !robot.outOfOrder);
        for(const team of this.teams) {
          this.pick_members(team);
        }
        
        setTimeout(() => { 
          this.loading = false;
          this.message = 'Now you get to name Team #1';
          this.input_placeholder = 'Team #1 name goes here...';
        }, 2000);
      }
    });
  }

  pick_members(team: Team) {
    for(let i = 0; i < Competition.TEAM_SIZE; i++) {
      const index = Math.floor(Math.random() * this.robot_list.length);
      const [team_member] = this.robot_list.splice(index, 1);
      team.members.push(new Robot(team_member));
    }
  }

  save_team() {
    if(this.current_team === 0) {
      this.message = 'Finally you get to name Team #2';
      this.input_placeholder = 'Team #2 name goes here...';
      this.current_team = 1;
    } else {
      alert('continue');
    }
  }

}
