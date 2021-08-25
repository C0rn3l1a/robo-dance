import { Robot } from "../robot/robot.class";
import { DanceOfParams } from "./danceof.interface";

export class DanceOf {

    id: number | null;
    winner: number | null;
    loser: number | null;
    danced_at: Date | null;
    dancers: Robot[] | null;

    finished: boolean;

    constructor(params: DanceOfParams) {
        this.id = params?.id ?? null;
        this.winner = params?.winner ?? null;
        this.loser = params?.loser ?? null;
        this.danced_at = params?.danced_at ? new Date(params?.danced_at) : null;
        this.dancers = params?.dancers ?? null;
        this.finished = this.winner != null && this.loser != null;
    }

    determine_winner() {
        if(!this.dancers?.length) throw new Error('Cannot determine winner');
        const winner_index = Math.floor(Math.random() * this.dancers.length);
        this.winner = this.dancers[winner_index].id;
        this.loser = this.dancers[1 - winner_index].id;
    }

    toJSON() {
        return {
            winner: this.winner,
            opponents: this.dancers?.map(robot => robot.id)
        }
    }

}