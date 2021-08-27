import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RobotParams } from '../../models/robot/robot.interface';
import { Robot } from '../../models/robot/robot.class';
import { mock_robots } from '../../models/robot/_mock_robots';

@Injectable({
  providedIn: 'root'
})
export class MockRobotService {

  constructor() {}

  get_all(): Observable<RobotParams[] | null> {
    return of(mock_robots);
  }
  
  get_one(id: string) {
    return of(mock_robots[0])
  }

  pick_members(robot_list: RobotParams[]): Robot[] {
    return mock_robots.slice(0,5).map(r => new Robot(r));
  }

  async preload_image(robot: Robot) {
    const image = await of('').toPromise();
    robot.avatar_base64 = image;
  }
}
