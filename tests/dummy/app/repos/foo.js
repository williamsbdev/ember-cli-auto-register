import Ember from "ember";

var FooRepo = Ember.Object.extend({
    foo: function() {
        return "foo";
    }
});

export default FooRepo;
