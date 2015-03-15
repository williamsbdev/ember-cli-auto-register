import Ember from "ember";

var BarRepo = Ember.Object.extend({
    returnBar: function() {
        return "bar";
    }
});

export default BarRepo;
