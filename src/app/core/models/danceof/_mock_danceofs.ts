import { DanceOfAPIResponse } from './danceof.interface';

const mock_danceofs: DanceOfAPIResponse[] = [
    {
        id: 16804,
        winner: 34,
        loser: 28,
        dancedAt: '2021-08-25T12:43:49.891Z'
    },
    {
        id: 16803,
        winner: 21,
        loser: 40,
        dancedAt: '2021-08-25T12:43:49.888Z'
    },
    {
        id: 16802,
        winner: 13,
        loser: 4,
        dancedAt: '2021-08-25T12:43:49.884Z'
    },
    {
        id: 16801,
        winner: 22,
        loser: 1,
        dancedAt: '2021-08-25T12:43:49.797Z'
    },
    {
        id: 16800,
        winner: 36,
        loser: 39,
        dancedAt: '2021-08-25T12:43:49.786Z'
    },
    {
        id: 16799,
        winner: 19,
        loser: 39,
        dancedAt: '2021-08-25T12:30:44.382Z'
    },
    {
        id: 16798,
        winner: 29,
        loser: 36,
        dancedAt: '2021-08-25T12:30:44.286Z'
    },
    {
        id: 16797,
        winner: 25,
        loser: 21,
        dancedAt: '2021-08-25T12:30:44.282Z'
    },
    {
        id: 16796,
        winner: 6,
        loser: 9,
        dancedAt: '2021-08-25T12:30:44.227Z'
    },
    {
        id: 16795,
        winner: 13,
        loser: 30,
        dancedAt: '2021-08-25T12:30:44.217Z'
    },
    {
        id: 16794,
        winner: 4,
        loser: 21,
        dancedAt: '2021-08-25T12:15:03.684Z'
    },
    {
        id: 16793,
        winner: 28,
        loser: 39,
        dancedAt: '2021-08-25T12:15:03.393Z'
    },
    {
        id: 16792,
        winner: 30,
        loser: 13,
        dancedAt: '2021-08-25T12:15:03.311Z'
    },
    {
        id: 16791,
        winner: 38,
        loser: 9,
        dancedAt: '2021-08-25T12:15:03.293Z'
    },
    {
        id: 16790,
        winner: 6,
        loser: 27,
        dancedAt: '2021-08-25T12:15:03.222Z'
    },
    {
        id: 16789,
        winner: 39,
        loser: 19,
        dancedAt: '2021-08-24T15:16:53.586Z'
    },
    {
        id: 16788,
        winner: 14,
        loser: 38,
        dancedAt: '2021-08-24T15:16:53.483Z'
    },
    {
        id: 16787,
        winner: 15,
        loser: 1,
        dancedAt: '2021-08-24T15:16:53.480Z'
    },
    {
        id: 16786,
        winner: 12,
        loser: 30,
        dancedAt: '2021-08-24T15:16:53.476Z'
    },
    {
        id: 16785,
        winner: 25,
        loser: 28,
        dancedAt: '2021-08-24T15:16:53.471Z'
    },
    {
        id: 16784,
        winner: 18,
        loser: 24,
        dancedAt: '2021-08-24T12:36:34.950Z'
    },
    {
        id: 16783,
        winner: 11,
        loser: 38,
        dancedAt: '2021-08-24T12:36:34.905Z'
    },
    {
        id: 16782,
        winner: 6,
        loser: 21,
        dancedAt: '2021-08-24T12:36:34.837Z'
    },
    {
        id: 16781,
        winner: 36,
        loser: 29,
        dancedAt: '2021-08-24T12:36:34.733Z'
    },
    {
        id: 16780,
        winner: 8,
        loser: 2,
        dancedAt: '2021-08-24T12:36:34.727Z'
    },
    {
        id: 16779,
        winner: 38,
        loser: 3,
        dancedAt: '2021-08-24T03:23:05.297Z'
    },
    {
        id: 16778,
        winner: 4,
        loser: 21,
        dancedAt: '2021-08-24T03:23:05.294Z'
    },
    {
        id: 16777,
        winner: 14,
        loser: 26,
        dancedAt: '2021-08-24T03:23:05.285Z'
    },
    {
        id: 16776,
        winner: 9,
        loser: 29,
        dancedAt: '2021-08-24T03:23:05.274Z'
    },
    {
        id: 16775,
        winner: 12,
        loser: 37,
        dancedAt: '2021-08-24T03:23:05.269Z'
    },
    {
        id: 16774,
        winner: 31,
        loser: 25,
        dancedAt: '2021-08-24T03:22:09.988Z'
    },
    {
        id: 16773,
        winner: 24,
        loser: 29,
        dancedAt: '2021-08-24T03:22:09.983Z'
    },
    {
        id: 16772,
        winner: 28,
        loser: 18,
        dancedAt: '2021-08-24T03:22:09.979Z'
    },
    {
        id: 16771,
        winner: 34,
        loser: 27,
        dancedAt: '2021-08-24T03:22:09.961Z'
    },
    {
        id: 16770,
        winner: 15,
        loser: 3,
        dancedAt: '2021-08-24T03:22:09.956Z'
    },
    {
        id: 16769,
        winner: 13,
        loser: 7,
        dancedAt: '2021-08-24T03:21:32.587Z'
    },
    {
        id: 16768,
        winner: 38,
        loser: 15,
        dancedAt: '2021-08-24T03:21:32.584Z'
    },
    {
        id: 16767,
        winner: 11,
        loser: 19,
        dancedAt: '2021-08-24T03:21:32.580Z'
    },
    {
        id: 16766,
        winner: 9,
        loser: 26,
        dancedAt: '2021-08-24T03:21:32.491Z'
    },
    {
        id: 16765,
        winner: 30,
        loser: 3,
        dancedAt: '2021-08-24T03:21:32.485Z'
    },
    {
        id: 16764,
        winner: 3,
        loser: 36,
        dancedAt: '2021-08-24T03:20:47.802Z'
    },
    {
        id: 16763,
        winner: 2,
        loser: 12,
        dancedAt: '2021-08-24T03:20:47.798Z'
    },
    {
        id: 16762,
        winner: 28,
        loser: 18,
        dancedAt: '2021-08-24T03:20:47.756Z'
    },
    {
        id: 16761,
        winner: 26,
        loser: 21,
        dancedAt: '2021-08-24T03:20:47.753Z'
    },
    {
        id: 16760,
        winner: 1,
        loser: 31,
        dancedAt: '2021-08-24T03:20:47.745Z'
    },
    {
        id: 16759,
        winner: 6,
        loser: 13,
        dancedAt: '2021-08-24T03:17:27.007Z'
    },
    {
        id: 16758,
        winner: 2,
        loser: 9,
        dancedAt: '2021-08-24T03:17:27.001Z'
    },
    {
        id: 16757,
        winner: 36,
        loser: 5,
        dancedAt: '2021-08-24T03:17:26.947Z'
    },
    {
        id: 16756,
        winner: 25,
        loser: 34,
        dancedAt: '2021-08-24T03:17:26.944Z'
    },
    {
        id: 16755,
        winner: 3,
        loser: 13,
        dancedAt: '2021-08-24T03:17:26.939Z'
    },
    {
        id: 16754,
        winner: 29,
        loser: 8,
        dancedAt: '2021-08-24T03:16:57.981Z'
    },
    {
        id: 16753,
        winner: 24,
        loser: 25,
        dancedAt: '2021-08-24T03:16:57.887Z'
    },
    {
        id: 16752,
        winner: 9,
        loser: 31,
        dancedAt: '2021-08-24T03:16:57.883Z'
    },
    {
        id: 16751,
        winner: 39,
        loser: 2,
        dancedAt: '2021-08-24T03:16:57.841Z'
    },
    {
        id: 16750,
        winner: 14,
        loser: 34,
        dancedAt: '2021-08-24T03:16:57.833Z'
    },
    {
        id: 16749,
        winner: 8,
        loser: 22,
        dancedAt: '2021-08-24T03:16:15.586Z'
    },
    {
        id: 16748,
        winner: 6,
        loser: 28,
        dancedAt: '2021-08-24T03:16:15.582Z'
    },
    {
        id: 16747,
        winner: 35,
        loser: 7,
        dancedAt: '2021-08-24T03:16:15.537Z'
    },
    {
        id: 16746,
        winner: 40,
        loser: 2,
        dancedAt: '2021-08-24T03:16:15.534Z'
    },
    {
        id: 16745,
        winner: 24,
        loser: 4,
        dancedAt: '2021-08-24T03:16:15.529Z'
    },
    {
        id: 16744,
        winner: 40,
        loser: 18,
        dancedAt: '2021-08-24T03:15:34.197Z'
    },
    {
        id: 16743,
        winner: 36,
        loser: 35,
        dancedAt: '2021-08-24T03:15:34.194Z'
    },
    {
        id: 16742,
        winner: 27,
        loser: 25,
        dancedAt: '2021-08-24T03:15:34.163Z'
    },
    {
        id: 16741,
        winner: 31,
        loser: 38,
        dancedAt: '2021-08-24T03:15:34.158Z'
    },
    {
        id: 16740,
        winner: 24,
        loser: 12,
        dancedAt: '2021-08-24T03:15:34.153Z'
    },
    {
        id: 16739,
        winner: 19,
        loser: 7,
        dancedAt: '2021-08-24T03:14:56.197Z'
    },
    {
        id: 16738,
        winner: 2,
        loser: 1,
        dancedAt: '2021-08-24T03:14:56.195Z'
    },
    {
        id: 16737,
        winner: 4,
        loser: 34,
        dancedAt: '2021-08-24T03:14:56.186Z'
    },
    {
        id: 16736,
        winner: 8,
        loser: 38,
        dancedAt: '2021-08-24T03:14:56.132Z'
    },
    {
        id: 16735,
        winner: 14,
        loser: 17,
        dancedAt: '2021-08-24T03:14:56.112Z'
    },
    {
        id: 16734,
        winner: 11,
        loser: 34,
        dancedAt: '2021-08-24T03:12:08.287Z'
    },
    {
        id: 16733,
        winner: 35,
        loser: 37,
        dancedAt: '2021-08-24T03:12:08.284Z'
    },
    {
        id: 16732,
        winner: 19,
        loser: 5,
        dancedAt: '2021-08-24T03:12:08.281Z'
    },
    {
        id: 16731,
        winner: 1,
        loser: 3,
        dancedAt: '2021-08-24T03:12:08.278Z'
    },
    {
        id: 16730,
        winner: 6,
        loser: 39,
        dancedAt: '2021-08-24T03:12:08.272Z'
    },
    {
        id: 16729,
        winner: 24,
        loser: 40,
        dancedAt: '2021-08-24T03:11:37.194Z'
    },
    {
        id: 16728,
        winner: 12,
        loser: 7,
        dancedAt: '2021-08-24T03:11:37.191Z'
    },
    {
        id: 16727,
        winner: 29,
        loser: 37,
        dancedAt: '2021-08-24T03:11:37.145Z'
    },
    {
        id: 16726,
        winner: 27,
        loser: 39,
        dancedAt: '2021-08-24T03:11:37.142Z'
    },
    {
        id: 16725,
        winner: 2,
        loser: 8,
        dancedAt: '2021-08-24T03:11:37.137Z'
    },
    {
        id: 16724,
        winner: 27,
        loser: 21,
        dancedAt: '2021-08-24T03:08:06.288Z'
    },
    {
        id: 16723,
        winner: 3,
        loser: 39,
        dancedAt: '2021-08-24T03:08:06.285Z'
    },
    {
        id: 16722,
        winner: 36,
        loser: 4,
        dancedAt: '2021-08-24T03:08:06.281Z'
    },
    {
        id: 16721,
        winner: 14,
        loser: 13,
        dancedAt: '2021-08-24T03:08:06.217Z'
    },
    {
        id: 16720,
        winner: 30,
        loser: 5,
        dancedAt: '2021-08-24T03:08:06.212Z'
    },
    {
        id: 16719,
        winner: 30,
        loser: 12,
        dancedAt: '2021-08-24T02:51:08.389Z'
    },
    {
        id: 16718,
        winner: 22,
        loser: 37,
        dancedAt: '2021-08-24T02:51:08.385Z'
    },
    {
        id: 16717,
        winner: 2,
        loser: 19,
        dancedAt: '2021-08-24T02:51:08.382Z'
    },
    {
        id: 16716,
        winner: 11,
        loser: 4,
        dancedAt: '2021-08-24T02:51:08.321Z'
    },
    {
        id: 16715,
        winner: 13,
        loser: 28,
        dancedAt: '2021-08-24T02:51:08.311Z'
    },
    {
        id: 16714,
        winner: 25,
        loser: 1,
        dancedAt: '2021-08-24T02:35:38.791Z'
    },
    {
        id: 16713,
        winner: 30,
        loser: 38,
        dancedAt: '2021-08-24T02:35:38.787Z'
    },
    {
        id: 16712,
        winner: 8,
        loser: 28,
        dancedAt: '2021-08-24T02:35:38.780Z'
    },
    {
        id: 16711,
        winner: 18,
        loser: 22,
        dancedAt: '2021-08-24T02:35:38.690Z'
    },
    {
        id: 16710,
        winner: 26,
        loser: 17,
        dancedAt: '2021-08-24T02:35:38.681Z'
    },
    {
        id: 16709,
        winner: 14,
        loser: 3,
        dancedAt: '2021-08-24T02:35:07.682Z'
    },
    {
        id: 16708,
        winner: 7,
        loser: 2,
        dancedAt: '2021-08-24T02:35:07.636Z'
    },
    {
        id: 16707,
        winner: 15,
        loser: 12,
        dancedAt: '2021-08-24T02:35:07.615Z'
    },
    {
        id: 16706,
        winner: 24,
        loser: 6,
        dancedAt: '2021-08-24T02:35:07.601Z'
    },
    {
        id: 16705,
        winner: 26,
        loser: 39,
        dancedAt: '2021-08-24T02:35:07.573Z'
    }
]

export { mock_danceofs };