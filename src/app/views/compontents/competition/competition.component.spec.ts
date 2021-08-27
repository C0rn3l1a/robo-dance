import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompetitionService } from 'src/app/core/services/competition/competition.service';
import { MockCompetitionService } from 'src/app/core/services/competition/_mock.competition.service';
import { RobotService } from 'src/app/core/services/robot/robot.service';
import { MockRobotService } from 'src/app/core/services/robot/_mock.robot.service';

import { CompetitionComponent } from './competition.component';

describe('CompetitionComponent', () => {
  let component: CompetitionComponent;
  let fixture: ComponentFixture<CompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionComponent ],
      providers: [
        { provide: RobotService, useClass: MockRobotService },
        { provide: CompetitionService, useClass: MockCompetitionService },
      ]
    }).compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
