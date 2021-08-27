import { TestBed } from '@angular/core/testing';

import { RobotService } from './robot.service';

import { mock_robots } from '../../models/robot/_mock_robots';
import { Competition } from '../../models/competition/competition.class';
import { ErrorService } from '../error/error.service';
import { MockErrorService } from '../error/_mock.error.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Robot } from '../../models/robot/robot.class';
import { environment } from 'src/environments/environment';

const URL = `${environment.api_url}/robots`;

describe('RobotService', () => {
  let service: RobotService;
  let test_http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [
        { provide: ErrorService, useClass: MockErrorService },
      ]
    });
    service = TestBed.inject(RobotService);
    test_http = TestBed.inject(HttpTestingController);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('pick_members', () => {
    it('should pick random team members from a list of robot', () => {
      const team_size = Competition.TEAM_SIZE;
      const team_members = service.pick_members(mock_robots);
      for(let i = 0; i < 500; i++) {
        expect(Array.isArray(team_members)).toBeTrue();
        expect(team_members.length).toEqual(team_size, `teams must be of ${team_size} robots`);
        const experience = team_members.reduce((exp, robot) => exp + robot.experience, 0);
        expect(experience).toBeLessThanOrEqual(50, 'experience should be at most 50');
      };
    });
  });
  
  describe('preload_image', () => {
    it('should get a blob for the image of the given robot and convert it to a base64 SafeUrl', async () => {
      const test_img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';
      const mock_robot = new Robot(mock_robots[0]);
      service.preload_image(mock_robot).then(() => {
        const base_64 = (mock_robot.avatar_base64 as any).changingThisBreaksApplicationSecurity;
        expect(mock_robot.avatar_base64).toBeDefined();
        expect(base_64).toEqual(test_img);
      });
      const request = test_http.expectOne(mock_robot.avatar);
      const res = await fetch(test_img);
      const blb = await res.blob();
      request.flush(blb);
    });
  });
  
  describe('get_all', () => {
    it('should get a list of robots and return the observable for it', async () => {
      service.get_all().subscribe(robot_list => {
        expect(robot_list).toBeDefined();
        expect(robot_list?.length).toBeDefined();
        expect(robot_list?.length).toEqual(mock_robots.length);
      });
      const request = test_http.expectOne(URL);
      request.flush(mock_robots);
    });
  });
  
  describe('get_one', () => {
    it('should get one robot and return the observable for it', async () => {
      const index = Math.floor(Math.random() * mock_robots.length);
      const id = mock_robots[index].id;
      service.get_one(id).subscribe(robot => {
        expect(robot).toBeDefined();
        expect(robot?.id).toEqual(mock_robots[index].id);
      });
      const request = test_http.expectOne(`${URL}/${id}`);
      request.flush(mock_robots[index]);
    });
  });


});
