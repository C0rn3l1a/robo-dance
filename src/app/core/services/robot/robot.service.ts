import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, first, map } from 'rxjs/operators';
import { ErrorService } from '../error/error.service';
import { Observable } from 'rxjs';
import { RobotParams } from '../../models/robot/robot.interface';
import { Robot } from '../../models/robot/robot.class';
import { Competition } from '../../models/competition/competition.class';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class RobotService {

  private URL = `${environment.api_url}/robots`;

  constructor(
    private _http_client: HttpClient,
    private _error_handler: ErrorService,
    private sanitizer: DomSanitizer
  ) {}

  get_all(): Observable<RobotParams[] | null> {
    return this._http_client.get<RobotParams[]>(this.URL).pipe(
      first(),
      catchError(error => this._error_handler.handle(error))
    )
  }
  
  get_one(id: number) {
    return this._http_client.get<RobotParams>(`${this.URL}/${id}`).pipe(
      first(),
      catchError(error => this._error_handler.handle(error))
    )
  }

  pick_members(robot_list: RobotParams[]): Robot[] {
    const copy_list: RobotParams[] = [...robot_list];
    const team: RobotParams[] = [];
    for(let i = 0; i < Competition.TEAM_SIZE; i++) {
      const index = Math.floor(Math.random() * robot_list.length);
      const [team_member] = robot_list.splice(index, 1);
      team.push(team_member);
    }
    const total_exp = team.reduce((exp, member) => member.experience + exp,0);
    if(total_exp > 50) {
      // if random team exceeds maximum exp retry
      return this.pick_members(copy_list);
    } else {
      return team.map(member => new Robot(member));
    }
  }

  async preload_image(robot: Robot) {
    const image = await this._http_client.get(robot.avatar, { responseType: 'blob' }).pipe(
      map(async (avatar_image: Blob) => {
        let image;
        var reader = new FileReader();
        reader.readAsDataURL(avatar_image); 
        const base64: string = await new Promise(resolve => {
          reader.onloadend = () => {
            resolve(reader.result as string);
          };
        });
        image = this.sanitizer.bypassSecurityTrustUrl(base64);
        return image;
      })
    ).toPromise();
    robot.avatar_base64 = image;
  }

}
