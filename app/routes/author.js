import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        first: 'J.K.',
        last: 'Rowling',
        id: 1
      },
      {
        first: 'Goerge R.R.',
        last: 'Martin',
        id: 2
      },
      {
        first: 'Tom',
        last: 'Clancy',
        id: 3
      },
      {
        first: 'Stephen',
        last: 'King',
        id: 4
      },
      {
        first: 'Tsukasa',
        last: 'Fushimi',
        id: 5
      }
    ];
  }
});
