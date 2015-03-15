import Ember from "ember";

var BarRepo = Ember.Object.extend({
    bar: function() {
        return "bar";
    }
});

export default BarRepo;
