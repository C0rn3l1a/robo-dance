import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { Team } from '../../models/competition/competition.interfaces';
import { mock_robots } from '../../models/robot/_mock_robots';
import { ErrorService } from '../error/error.service';
import { MockErrorService } from '../error/_mock.error.service';

import { CompetitionService } from './competition.service';

describe('CompetitionService', () => {
  let service: CompetitionService;
  let test_http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: ErrorService, useClass: MockErrorService },
      ]
    });
    service = TestBed.inject(CompetitionService);
    test_http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  describe('start_competition', () => {
    it('should receive the array of teams to compete and return an observable with the finished competition class instance', async () => {
      const mock_danceofs = [
        {
          id: 1,
          winner: 34,
          loser: 28,
          dancedAt: '2021-08-25T12:43:49.891Z'
        },
        {
          id: 2,
          winner: 21,
          loser: 40,
          dancedAt: '2021-08-25T12:43:49.888Z'
        },
        {
          id: 3,
          winner: 13,
          loser: 4,
          dancedAt: '2021-08-25T12:43:49.884Z'
        },
        {
          id: 4,
          winner: 22,
          loser: 1,
          dancedAt: '2021-08-25T12:43:49.797Z'
        },
        {
          id: 5,
          winner: 36,
          loser: 39,
          dancedAt: '2021-08-25T12:43:49.786Z'
        },
      ]
      // team 1
      const team_1 = {
        name: 'team 1',
        members: [
          {
              id: 13,
              name: 'General Garcia',
              powermove: 'Constructor Overloading',
              experience: 12,
              outOfOrder: false,
              avatar: 'https://robohash.org/gerneral-garcia.png'
          },
          {
              id: 21,
              name: 'Versatile Hector',
              powermove: 'Exception Handling',
              experience: 9,
              outOfOrder: false,
              avatar: 'https://robohash.org/versatile-hector.png'
          },
          {
              id: 22,
              name: 'Rebasing Isabel',
              powermove: 'Path Traversal',
              experience: 10,
              outOfOrder: false,
              avatar: 'https://robohash.org/rebasing-isabel.png'
          },
          {
              id: 34,
              name: 'Agile Anna',
              powermove: 'Pretzel Hop',
              experience: 5,
              outOfOrder: false,
              avatar: 'https://robohash.org/agile-anna.png'
          },
          {
              id: 36,
              name: 'Functional Chris',
              powermove: 'Subscribing Kangaroo',
              experience: 7,
              outOfOrder: false,
              avatar: 'https://robohash.org/functional-chris.png'
          }
      ]
      };

      // team 2
      const team_2 = {
        name: 'team 2',
        members: [
          {
              id: 1,
              name: 'Funky Joe',
              powermove: 'Spinning Turtle',
              experience: 5,
              outOfOrder: false,
              avatar: 'https://robohash.org/funky-joe.png'
          },
          {
              id: 4,
              name: 'Hilarious Jack',
              powermove: 'Yielding Yak',
              experience: 8,
              outOfOrder: false,
              avatar: 'https://robohash.org/hilarious-jack.png'
          },
          {
              id: 28,
              name: 'Endearing Fred',
              powermove: 'Lazy Loading',
              experience: 9,
              outOfOrder: false,
              avatar: 'https://robohash.org/endearing-fred.png'
          },
          {
              id: 39,
              name: 'Zero-Downtime Sophie',
              powermove: 'Duck Typing',
              experience: 7,
              outOfOrder: false,
              avatar: 'https://robohash.org/zero-downtime-sophie.png'
          },
          {
              id: 40,
              name: 'Rational Randy',
              powermove: 'Kicking Koala',
              experience: 12,
              outOfOrder: false,
              avatar: 'https://robohash.org/rational-randy.png'
          }
      ]
      };

      const teams: Team[] = [team_1, team_2];

      service.start_competition(teams).subscribe(competition => {
        expect(competition?.finished).toBeTrue();
        expect(competition?.dance_ofs.length).toEqual(5);
        expect(competition?.winner?.name).toEqual(team_1.name);
      });

      const request = test_http.expectOne(`${environment.api_url}/danceoffs`);
      expect(request.request.body.danceoffs).toBeDefined();
      expect(Array.isArray(request.request.body.danceoffs)).toBeTrue();
      expect(request.request.body.danceoffs.length).toEqual(5);
      for(const danceoff of request.request.body.danceoffs) {
        expect(danceoff.winner).toBeDefined();
        expect(danceoff.opponents).toBeDefined();
        expect(danceoff.opponents.length).toEqual(2);
      }
      request.flush(mock_danceofs);
    });
  });

});
