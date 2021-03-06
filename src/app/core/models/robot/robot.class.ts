import { SafeUrl } from "@angular/platform-browser";
import { RobotParams } from "./robot.interface";

export class Robot {

    public id: number;
    public name: string;
    public powermove: string;
    public experience: number;
    public outOfOrder: boolean;
    public avatar: string;
    public avatar_base64?: SafeUrl;

    constructor(params: RobotParams) {
        this.id = params.id;
        this.name = params.name;
        this.powermove = params.powermove;
        this.experience = params.experience;
        this.outOfOrder = params.outOfOrder;
        this.avatar = params.avatar;
    }
}