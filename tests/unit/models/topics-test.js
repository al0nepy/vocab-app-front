import { module, test } from 'qunit';

import { setupTest } from 'front-vocab/tests/helpers';

module('Unit | Model | topics', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('topics', {});
    assert.ok(model);
  });
});
