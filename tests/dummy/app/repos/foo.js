import Ember from "ember";

var FooRepo = Ember.Object.extend({
    wat: Ember.computed(function() {
        return "foo";
    })
});

export default FooRepo;
