import { Robot } from "../robot/robot.class";

export interface DanceOfParams {
    id?: number | null;
    winner?: number | null;
    loser?: number | null;
    danced_at?: Date | null;
    dancers?: Robot[];
}

export interface DanceOfAPIResponse {
    id: number;
    winner: number;
    loser: number;
    dancedAt: string;
}