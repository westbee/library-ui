import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        first: 'J.K.',
        last: 'Rowling'
      },
      {
        first: 'Goerge R.R.',
        last: 'Martin'
      },
      {
        first: 'Tom',
        last: 'Clancy'
      },
      {
        first: 'Stephen',
        last: 'King'
      },
      {
        first: 'Tsukasa',
        last: 'Fushimi'
      }
    ];
  }
});
