import { Robot } from "../robot/robot.class";

export interface Team {
    name: string;
    members: Robot[];
}

export interface CompetitionParams {
    teams: Team[]
}