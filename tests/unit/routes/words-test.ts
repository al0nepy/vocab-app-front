import { module, test } from 'qunit';
import { setupTest } from 'front-vocab/tests/helpers';

module('Unit | Route | words', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:words');
    assert.ok(route);
  });
});
