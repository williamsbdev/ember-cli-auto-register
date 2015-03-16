import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'dummy/tests/helpers/start-app';
import lookup from 'ember-cli-test-helpers/tests/helpers/lookup';

var application;

module('Acceptance: Acceptance', {
    beforeEach: function() {
        application = startApp();
    },
    afterEach: function() {
        Ember.run(application, 'destroy');
    }
});

test('Assert that objects in repos directory are correctly registered', function(assert) {
    var fooRepo = lookup('repo:foo');
    assert.ok(fooRepo);
    assert.equal(fooRepo.get("wat"), "foo");
    var barRepo = lookup('repo:bar');
    assert.ok(barRepo);
    assert.equal(barRepo.get("wat"), "bar");
});
