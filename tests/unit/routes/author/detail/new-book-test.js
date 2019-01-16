import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | author/detail/new-book', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:author/detail/new-book');
    assert.ok(route);
  });
});