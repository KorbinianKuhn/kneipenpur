import { Tour } from '../interfaces/common.interfaces';

export const TOURS: Tour[] = [
  {
    id: 'nord',
    title: 'Stuttgart Nord',
    date: new Date(),
    bars: [
      {
        id: 40,
        title: 'Kirschbaum'
      },
      {
        id: 41,
        title: `Christa's Pub`
      },
      {
        id: 42,
        title: 'Kremser Stüble'
      },
      {
        id: 43,
        title: 'Biergärtle'
      },
      {
        id: 44,
        title: 'Pub 77'
      },
      {
        id: 45,
        title: 'Pils Pub'
      },
      {
        id: 46,
        title: `Die Bar Um's Eck`
      }
    ]
  },
  {
    id: '42',
    title: 'Linie 42',
    date: new Date(),
    bars: [
      {
        id: 30,
        title: 'Taubenstüble'
      },
      {
        id: 31,
        title: 'Gaststätte am Stadtbad'
      },
      {
        id: 32,
        title: 'Sommerbar'
      },
      {
        id: 33,
        title: 'Laternchen'
      },
      {
        id: 34,
        title: 'Westend'
      },
      {
        id: 35,
        title: 'Bar6'
      },
      {
        id: 36,
        title: 'Bar7'
      },
      {
        id: 37,
        title: 'Bar8'
      }
    ]
  },
  {
    id: 'ost',
    title: 'Stuttgart Ost',
    date: new Date(),
    bars: [
      {
        id: 20,
        title: 'Gashaus Schwan'
      },
      {
        id: 21,
        title: 'Max & Moritz'
      },
      {
        id: 22,
        title: 'Steinstüble'
      },
      {
        id: 23,
        title: 'Rössle'
      },
      {
        id: 24,
        title: 'Scheibenwirt'
      }
    ]
  },
  {
    id: 'sued',
    title: 'Stuttgart Süd',
    date: new Date(),
    bars: [
      {
        id: 10,
        title: 'Ritterstüble'
      },
      {
        id: 11,
        title: 'Kelterstüble'
      },
      {
        id: 12,
        title: 'Bar3'
      },
      {
        id: 13,
        title: 'Taubenstüble'
      },
      {
        id: 14,
        title: 'Löwenstube'
      },
      {
        id: 15,
        title: 'Bar6'
      },
      {
        id: 11,
        title: 'Bar7'
      },
      {
        id: 10,
        title: 'Bar8'
      }
    ]
  },
  {
    id: 'west',
    title: 'Stuttgart West',
    date: new Date('2017-09-14'),
    bars: [
      {
        id: 1,
        title: 'Westend'
      },
      {
        id: 2,
        title: 'Gaststätte Augustin'
      },
      {
        id: 3,
        title: 'Laternchen'
      }
    ]
  }
];
