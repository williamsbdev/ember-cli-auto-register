import Ember from "ember";

var WatController = Ember.Controller.extend({
    fooRepo: Ember.inject.repos("foo"),
    barRepo: Ember.inject.repos("bar"),
    callFoo: function() {
        return this.get("fooRepo").foo();
    },
    callBar: function() {
        return this.get("barRepo").returnBar();
    }
});

export default WatController;
