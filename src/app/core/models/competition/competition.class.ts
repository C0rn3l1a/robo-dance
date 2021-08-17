// import { RobotParams } from "../robot/robot.interface";

import { DanceOf } from "../danceof/danceof.class";
import { Robot } from "../robot/robot.class";

export class Competition {

    private static TEAM_SIZE = 5;

    teams: Robot[][];
    dance_ofs: DanceOf[] = [];
    finished: boolean;

    constructor(params: any) {
       this.teams = params.teams;
       this.finished = false;
    }

    start() {
        const equal_competition = this.teams.every(team => team.length === Competition.TEAM_SIZE);
        if(!equal_competition) throw new Error('Teams have different or not allowed sizes');
        if(this.teams.length !== 2) throw new Error('Competitions are only allowed between 2 teams');
        for(let i = 0; i < Competition.TEAM_SIZE; i++) {
            const dance_of = new DanceOf({dancers:[this.teams[0][i], this.teams[1][i]]});
            dance_of.
        }
    }
}