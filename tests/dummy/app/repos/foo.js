import Ember from "ember";

var FooRepo = Ember.Object.extend({
    wat: function() {
        return "foo";
    }.property()
});

export default FooRepo;
