import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DaceoffsService } from 'src/app/core/services/danceoffs/daceoffs.service';
import { MockDanceoffsService } from 'src/app/core/services/danceoffs/_mock.danceoff.service';
import { RobotService } from 'src/app/core/services/robot/robot.service';
import { MockRobotService } from 'src/app/core/services/robot/_mock.robot.service';

import { LeaderboardComponent } from './leaderboard.component';

describe('LeaderboardComponent', () => {
  let component: LeaderboardComponent;
  let fixture: ComponentFixture<LeaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderboardComponent ],
      providers: [
        { provide: RobotService, useClass: MockRobotService },
        { provide: DaceoffsService, useClass: MockDanceoffsService },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
