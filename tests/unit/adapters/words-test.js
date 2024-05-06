import { module, test } from 'qunit';

import { setupTest } from 'front-vocab/tests/helpers';

module('Unit | Adapter | words', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:words');
    assert.ok(adapter);
  });
});
