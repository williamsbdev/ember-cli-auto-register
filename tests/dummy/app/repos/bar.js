import Ember from "ember";

var BarRepo = Ember.Object.extend({
    wat: function() {
        return "bar";
    }.property()
});

export default BarRepo;
