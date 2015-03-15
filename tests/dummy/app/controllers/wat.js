import Ember from "ember";

var WatController = Ember.Controller.extend({
    fooRepo: Ember.inject.repos("foo"),
    foo: function() {
        return this.get("fooRepo").foo();
    }
});

export default WatController;
