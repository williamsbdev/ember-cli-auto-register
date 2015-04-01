var one = function() {return "one";};
var two = function() {return "two";};
var exported = {
    one: one,
    two: two,
    destroy: function() {},
    create: function() {

        return this;
    }
};
export default exported;
