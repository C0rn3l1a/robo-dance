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
        let current_score = 0;
        for(const dancer of this.dancers) {
            let dancer_score = Math.random();
            if(dancer_score > current_score) {
                this.loser = this.winner ?? null;
                this.winner = dancer.id;
            } else {
                this.loser = dancer.id;
            }
        }
    }

}