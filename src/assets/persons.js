export default {
  nodes: [
    {
      id: '1',
      name: 'Espen Gudmundsen',
      color: '#F2469F',
    },
    {
      id: '2',
      name: 'Therese Aurskog',
      color: '#F2469F',
    },
    {
      id: '3',
      name: 'Julius Kramperud',
      color: '#F2469F',
    },
    {
      id: '4',
      name: 'Truls Svendsen',
      color: '#F2469F',
    },
    {
      id: '5',
      name: 'Sheik F. Asan',
      color: '#F2469F',
    },
    {
      id: '6',
      name: 'Tiril Klemp',
      color: '#777',
    },
    {
      id: '7',
      name: 'Ronny Klemp',
      color: '#777',
    },
    {
      id: '8',
      name: 'Synne Tveit',
      color: '#5FA032',
    },
    {
      id: '9',
      name: 'Sigurd Tveit',
      color: '#5FA032',
    }
  ],
  links: [
    {
      source: '1',
      target: '2',
      interactions: 10
    },
    {
      source: '2',
      target: '1',
      interactions: 2
    },
    {
      source: '3',
      target: '1',
      interactions: 1
    },
    {
      source: '4',
      target: '1',
      interactions: 1
    },
    {
      source: '1',
      target: '5',
      interactions: 4
    },
    {
      source: '6',
      target: '7',
      interactions: 8
    },
    {
      source: '1',
      target: '7',
      interactions: 1
    },
    {
      source: '6',
      target: '5',
      interactions: 4
    },
    {
      source: '4',
      target: '2',
      interactions: 3
    },
    {
      source: '2',
      target: '8',
      interactions: 2
    },
    {
      source: '8',
      target: '9',
      interactions: 8
    }
  ]
};
