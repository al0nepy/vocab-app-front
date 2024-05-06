import { module, test } from 'qunit';
import { setupTest } from 'front-vocab/tests/helpers';

module('Unit | Controller | words', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    const controller = this.owner.lookup('controller:words');
    assert.ok(controller);
  });
});
