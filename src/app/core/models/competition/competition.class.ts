// import { RobotParams } from "../robot/robot.interface";

import { DanceOf } from "../danceof/danceof.class";
import { Robot } from "../robot/robot.class";
import { CompetitionParams, Team } from "./competition.interfaces";

export class Competition {

    static TEAM_SIZE = 5;

    teams: Team[];
    dance_ofs: DanceOf[] = [];
    finished: boolean;
    winner: Team | null = null;

    constructor(params: CompetitionParams) {
       this.teams = params.teams;
       this.finished = false;
    }

    start() {
        const equal_competition = this.teams.every(team => team.members.length === Competition.TEAM_SIZE);
        if(!equal_competition) throw new Error('Teams have different or not allowed sizes');
        if(this.teams.length !== 2) throw new Error('Competitions are only allowed between 2 teams');
        for(let i = 0; i < Competition.TEAM_SIZE; i++) {
            const dance_of = new DanceOf({dancers:[this.teams[0].members[i], this.teams[1].members[i]]});
            dance_of.determine_winner();
            this.dance_ofs.push(dance_of);
        }
    }

    determine_winner() {
        const team_points = this.teams.map(_ => 0);
        for(const dance_off of this.dance_ofs) {
            const winner_team = this.teams.findIndex(team => -1 < team.members.findIndex(robot => robot.id === dance_off.winner));
            team_points[winner_team]++;
        }
        this.winner = this.teams[team_points.indexOf(Math.max(...team_points))];
    }
}