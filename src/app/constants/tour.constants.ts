import { Tour } from '../interfaces/common.interfaces';

export const TOURS: Tour[] = [
  {
    id: 'nord',
    title: 'Stuttgart Nord',
    date: new Date(),
    bars: [
      {
        id: 40,
        title: 'Kirschbaum',
        location:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.483663247865!2d9.154534216001654!3d48.81083247928294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799daefb865f80d%3A0x78afbf17c49883ef!2sKirschbaum%20Feuerbach!5e0!3m2!1sde!2sde!4v1577470426902!5m2!1sde!2sde'
      },
      {
        id: 41,
        title: `Christa's Pub`,
        location:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.5353536057914!2d9.157675316001626!3d48.80984607928275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799daef3f7fb82d%3A0xd810a68da5e613d7!2sChrista%60s%20Pub!5e0!3m2!1sde!2sde!4v1577470448526!5m2!1sde!2sde'
      },
      {
        id: 42,
        title: 'Kremser Stüble',
        location:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.415024543461!2d9.166126216001635!3d48.81214227928302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799dae9e20d7045%3A0x7920127c66d30623!2sKremser%20St%C3%BCble!5e0!3m2!1sde!2sde!4v1577470468076!5m2!1sde!2sde'
      },
      {
        id: 43,
        title: 'Biergärtle',
        location:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.4495824908963!2d9.165905016002212!3d48.83056257928472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799da998f8657e1%3A0x90bb8abed0b70bec!2sBierg%C3%A4rtle%20(Raucherlokal)!5e0!3m2!1sde!2sde!4v1577470493377!5m2!1sde!2sde'
      },
      {
        id: 44,
        title: 'Pub 77',
        location:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.6171746775245!2d9.168728129270843!3d48.8301978987053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799da9998674e2f%3A0xe94771a14080aa6e!2sPub%2077!5e0!3m2!1sde!2sde!4v1577470537090!5m2!1sde!2sde'
      },
      {
        id: 45,
        title: 'Pils Pub / Bistro Perle',
        location:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d490.8868351330652!2d9.169252724025922!3d48.830157912939264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799da99bd2dd73d%3A0xca4463b4d4a628f9!2sBistro%20Perle!5e0!3m2!1sde!2sde!4v1577470560844!5m2!1sde!2sde'
      },
      {
        id: 46,
        title: `Die Bar Um's Eck`,
        location:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d490.8911804084407!2d9.171448436845372!3d48.829714383886134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799da9851f35069%3A0x15aefe93568397e4!2sDie%20Bar%20Um&#39;s%20Eck!5e0!3m2!1sde!2sde!4v1577470589338!5m2!1sde!2sde'
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
        title: 'Taubenstüble',
        location:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2630.088240434584!2d9.155065116000216!3d48.76111117927805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799db5eda5ceac1%3A0x13c30eb106cc3c2d!2sTaubenst%C3%BCble!5e0!3m2!1sde!2sde!4v1577470105069!5m2!1sde!2sde'
      },
      {
        id: 31,
        title: 'Gaststätte am Stadtbad',
        location:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.9086075639225!2d9.158856616000259!3d48.76454157927836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799db4d6fe638b7%3A0x277e263eaffe79c4!2sGastst%C3%A4tte%20am%20Stadtbad!5e0!3m2!1sde!2sde!4v1577470124065!5m2!1sde!2sde'
      },
      {
        id: 32,
        title: 'Sommerbar',
        location:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.562945910205!2d9.153757916000421!3d48.771142079279024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799db426313ffff%3A0xc03d8dcbcb6929dc!2sSommerbar!5e0!3m2!1sde!2sde!4v1577470028581!5m2!1sde!2sde'
      },
      {
        id: 33,
        title: 'Laternchen',
        location:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.550020561572!2d9.157533516000475!3d48.77138887927899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799db43bd0493b3%3A0xb60293df20bb7a90!2sLaternchen!5e0!3m2!1sde!2sde!4v1577467831229!5m2!1sde!2sde'
      },
      {
        id: 34,
        title: 'Westend',
        location:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.3593974269643!2d9.150293716000599!3d48.77502857927948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799db6bb6548a77%3A0x6d74ae42bcfecbac!2sWestend%20Eckkneipe!5e0!3m2!1sde!2sde!4v1577470185027!5m2!1sde!2sde'
      },
      {
        id: 35,
        title: 'Gaststätte Augustin',
        location:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.229374599526!2d9.153783616000633!3d48.77751107927962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799db6abf2a7535%3A0x375d6c0933a1f0c1!2sGastst%C3%A4tte%20Augustin!5e0!3m2!1sde!2sde!4v1577470360992!5m2!1sde!2sde'
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
        title: 'Max & Moritz',
        location:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924.4316072450496!2d9.207313876834688!3d48.78214212276721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x50afa647a5b8de7e!2sSportsbar%20Max%26Moritz%20S-Ost%201!5e0!3m2!1sde!2sde!4v1577471441888!5m2!1sde!2sde'
      },
      {
        id: 22,
        title: 'Steinstüble'
      },
      {
        id: 23,
        title: 'Rössle',
        location:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d887.7534256074949!2d9.207332849885894!3d48.7845781731108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x410be63a231b561f%3A0xce15d221128676ac!2zUsO2c3NsZQ!5e0!3m2!1sde!2sde!4v1577471381508!5m2!1sde!2sde'
      },
      {
        id: 24,
        title: 'Expressbar',
        location:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924.4316072450496!2d9.207313876834688!3d48.78214212276721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x50afa647a5b8de7e!2sSportsbar%20Max%26Moritz%20S-Ost%201!5e0!3m2!1sde!2sde!4v1577471441888!5m2!1sde!2sde'
      },
      {
        id: 25,
        title: 'Scheibenwirt',
        location:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2535.47256220953!2d9.206115103650196!3d48.78446469502932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42b6492f4f3bada6!2sZum%20Scheibenwirt!5e0!3m2!1sde!2sde!4v1577471416749!5m2!1sde!2sde'
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
        title: 'Ritterstüble',
        location:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2630.107960516485!2d9.150223416000216!3d48.76073457927808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799db5fce211303%3A0xb9d435d5b0b4e19c!2sRitterst%C3%BCble!5e0!3m2!1sde!2sde!4v1577470664309!5m2!1sde!2sde'
      },
      {
        id: 11,
        title: 'Kelterstüble'
      },
      {
        id: 12,
        title: 'Heßlacher Stüble'
      },
      {
        id: 13,
        title: 'Taubenstüble',
        location:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1315.0441197689859!2d9.156341646910446!3d48.76111119640086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799db5eda5ceac1%3A0x13c30eb106cc3c2d!2sTaubenst%C3%BCble!5e0!3m2!1sde!2sde!4v1577470842030!5m2!1sde!2sde'
      },
      {
        id: 14,
        title: 'Löwenstube'
      },
      {
        id: 15,
        title: 'Gaststätte Ritterschenke',
        location:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1231.7538274034441!2d9.159600523261307!3d48.76191016202322!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799db5960677607%3A0xf138dcb529edc5c2!2sGastst%C3%A4tte%20Ritterschenke!5e0!3m2!1sde!2sde!4v1577470943443!5m2!1sde!2sde'
      },
      {
        id: 11,
        title: 'Funzel',
        location:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1231.7253968207037!2d9.162595265019776!3d48.763069436946935!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799db5a3ab9708b%3A0x38a8bd4faab9c4ec!2sFunzel!5e0!3m2!1sde!2sde!4v1577470984741!5m2!1sde!2sde'
      },
      {
        id: 10,
        title: 'Momona',
        location:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d379.684593170883!2d9.167552150818887!3d48.76453672767327!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799db508d2b3233%3A0xd488b19ca3360ff9!2sMomona%20Cafe%20And%20Bar!5e0!3m2!1sde!2sde!4v1577471026035!5m2!1sde!2sde'
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
        title: 'Sommerbar',
        location:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.562945910205!2d9.153757916000421!3d48.771142079279024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799db426313ffff%3A0xc03d8dcbcb6929dc!2sSommerbar!5e0!3m2!1sde!2sde!4v1577470028581!5m2!1sde!2sde'
      },
      {
        id: 2,
        title: 'Laternchen',
        location:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.550020561572!2d9.157533516000475!3d48.77138887927899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799db43bd0493b3%3A0xb60293df20bb7a90!2sLaternchen!5e0!3m2!1sde!2sde!4v1577467831229!5m2!1sde!2sde'
      },
      {
        id: 3,
        title: 'Westend',
        location:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.3593974269643!2d9.150293716000599!3d48.77502857927948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799db6bb6548a77%3A0x6d74ae42bcfecbac!2sWestend%20Eckkneipe!5e0!3m2!1sde!2sde!4v1577470185027!5m2!1sde!2sde'
      },
      {
        id: 4,
        title: 'Gaststätte Augustin',
        location:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.229374599526!2d9.153783616000633!3d48.77751107927962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799db6abf2a7535%3A0x375d6c0933a1f0c1!2sGastst%C3%A4tte%20Augustin!5e0!3m2!1sde!2sde!4v1577470360992!5m2!1sde!2sde'
      },
      {
        id: 5,
        title: 'Palmenhof',
        location:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2698.472180211921!2d9.15509656498695!3d48.76925941277627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6b118673200480b5!2sGastst%C3%A4tte%20Rotenwaldeck!5e0!3m2!1sde!2sde!4v1577471134732!5m2!1sde!2sde'
      }
    ]
  }
];
