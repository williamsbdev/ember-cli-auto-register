import Ember from "ember";

var BarRepo = Ember.Object.extend({
    wat: Ember.computed(function() {
        return "bar";
    })
});

export default BarRepo;
