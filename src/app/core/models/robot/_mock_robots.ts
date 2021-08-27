import { RobotParams } from './robot.interface';

const mock_robots: RobotParams[] = [
    {
        id: 1,
        name: 'Funky Joe',
        powermove: 'Spinning Turtle',
        experience: 5,
        outOfOrder: false,
        avatar: 'https://robohash.org/funky-joe.png'
    },
    {
        id: 2,
        name: 'Ternary Tim',
        powermove: 'Type Coercion',
        experience: 8,
        outOfOrder: false,
        avatar: 'https://robohash.org/ternary-tim.png'
    },
    {
        id: 3,
        name: 'Amazing Helen',
        powermove: 'Observing Ostrich',
        experience: 8,
        outOfOrder: false,
        avatar: 'https://robohash.org/amazing-helen.png'
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
        id: 5,
        name: 'Productive Paula',
        powermove: 'Celebrating Lobster',
        experience: 11,
        outOfOrder: false,
        avatar: 'https://robohash.org/productive-paula.png'
    },
    {
        id: 6,
        name: 'Flexible Stuart',
        powermove: 'Searching Swan',
        experience: 10,
        outOfOrder: false,
        avatar: 'https://robohash.org/flexible-stuart.png'
    },
    {
        id: 7,
        name: 'Lisa \'Root\' Allen',
        powermove: 'Fork Join',
        experience: 15,
        outOfOrder: false,
        avatar: 'https://robohash.org/lisa-root-allen.png'
    },
    {
        id: 8,
        name: 'Decisive Sarah',
        powermove: 'Smashing Pineapple',
        experience: 8,
        outOfOrder: false,
        avatar: 'https://robohash.org/decisive-sarah.png'
    },
    {
        id: 9,
        name: 'Efficient Linda',
        powermove: 'Relaxing Sloth',
        experience: 7,
        outOfOrder: false,
        avatar: 'https://robohash.org/erfficient-linda.png'
    },
    {
        id: 10,
        name: 'Variable Vicky',
        powermove: 'Thread Drop',
        experience: 12,
        outOfOrder: true,
        avatar: 'https://robohash.org/variable-vicky.png'
    },
    {
        id: 11,
        name: 'Dancing Jorge',
        powermove: 'Privilege Escalation',
        experience: 7,
        outOfOrder: false,
        avatar: 'https://robohash.org/dancing-jorge.png'
    },
    {
        id: 12,
        name: 'Fred \'Detail-Oriented\' Miller',
        powermove: 'Deep Cloning',
        experience: 9,
        outOfOrder: false,
        avatar: 'https://robohash.org/fred-miller.png'
    },
    {
        id: 13,
        name: 'General Garcia',
        powermove: 'Constructor Overloading',
        experience: 12,
        outOfOrder: false,
        avatar: 'https://robohash.org/gerneral-garcia.png'
    },
    {
        id: 14,
        name: 'Infinity Sam',
        powermove: 'Database Migration',
        experience: 11,
        outOfOrder: false,
        avatar: 'https://robohash.org/infinity-sam.png'
    },
    {
        id: 15,
        name: 'Responsible Stella',
        powermove: 'Integer Factorization',
        experience: 13,
        outOfOrder: false,
        avatar: 'https://robohash.org/responsible-stella.png'
    },
    {
        id: 16,
        name: 'Solid Sandra',
        powermove: 'Monkey Patching',
        experience: 8,
        outOfOrder: true,
        avatar: 'https://robohash.org/solid-sandra.png'
    },
    {
        id: 17,
        name: 'Danger Dan',
        powermove: 'Floating Unicorn',
        experience: 15,
        outOfOrder: false,
        avatar: 'https://robohash.org/danger-dan.png'
    },
    {
        id: 18,
        name: 'Exceptional Alice',
        powermove: 'Heap Allocation',
        experience: 12,
        outOfOrder: false,
        avatar: 'https://robohash.org/exceptional-alice.png'
    },
    {
        id: 19,
        name: 'Sliding Stephanie',
        powermove: 'Cache Invalidation',
        experience: 8,
        outOfOrder: false,
        avatar: 'https://robohash.org/sliding-stephanie.png'
    },
    {
        id: 20,
        name: 'Excellent Erin',
        powermove: 'Changing Chameleon',
        experience: 7,
        outOfOrder: true,
        avatar: 'https://robohash.org/excellent-erin.png'
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
        id: 23,
        name: 'Reflective Jim',
        powermove: 'Chair Freeze',
        experience: 6,
        outOfOrder: true,
        avatar: 'https://robohash.org/reflective-jim.png'
    },
    {
        id: 24,
        name: 'Merge Mike',
        powermove: 'Protective Otter',
        experience: 8,
        outOfOrder: false,
        avatar: 'https://robohash.org/merge-mike.png'
    },
    {
        id: 25,
        name: 'Charismatic Valeria',
        powermove: 'Secondary Indexing',
        experience: 7,
        outOfOrder: false,
        avatar: 'https://robohash.org/charismatic-valeria.png'
    },
    {
        id: 26,
        name: 'Confident Carol',
        powermove: 'Brute Force Detection',
        experience: 9,
        outOfOrder: false,
        avatar: 'https://robohash.org/confident-carol.png'
    },
    {
        id: 27,
        name: 'Elastic Eddie',
        powermove: 'Dabbing Penguin',
        experience: 11,
        outOfOrder: false,
        avatar: 'https://robohash.org/elastic-eddie.png'
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
        id: 29,
        name: 'Positive Anna',
        powermove: 'Tree Shaking',
        experience: 10,
        outOfOrder: false,
        avatar: 'https://robohash.org/positive-anna.png'
    },
    {
        id: 30,
        name: 'Hipster Kate',
        powermove: 'Dancing Frog',
        experience: 10,
        outOfOrder: false,
        avatar: 'https://robohash.org/hipster-kate.png'
    },
    {
        id: 31,
        name: 'Honest Mark',
        powermove: 'Argument Destructuring',
        experience: 8,
        outOfOrder: false,
        avatar: 'https://robohash.org/honest-mark.png'
    },
    {
        id: 32,
        name: 'Crazy Brian',
        powermove: 'Sleeping Crocodile',
        experience: 7,
        outOfOrder: true,
        avatar: 'https://robohash.org/crazy-brian.png'
    },
    {
        id: 33,
        name: 'Anxious Andy',
        powermove: 'Implicit Invocation',
        experience: 6,
        outOfOrder: true,
        avatar: 'https://robohash.org/anxious-andy.png'
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
        id: 35,
        name: 'Victor \'Void\' Smith',
        powermove: 'Swimming Ferret',
        experience: 9,
        outOfOrder: false,
        avatar: 'https://robohash.org/victor-void-smith.png'
    },
    {
        id: 36,
        name: 'Functional Chris',
        powermove: 'Subscribing Kangaroo',
        experience: 7,
        outOfOrder: false,
        avatar: 'https://robohash.org/functional-chris.png'
    },
    {
        id: 37,
        name: 'Eloquent Teresa',
        powermove: 'Just-in-time Compilation',
        experience: 10,
        outOfOrder: false,
        avatar: 'https://robohash.org/eloquent-teresa.png'
    },
    {
        id: 38,
        name: 'Spinning Christina',
        powermove: 'Optional Chaining',
        experience: 11,
        outOfOrder: false,
        avatar: 'https://robohash.org/spinning-christina.png'
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
];

export {mock_robots};