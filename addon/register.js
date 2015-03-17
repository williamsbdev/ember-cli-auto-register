import Ember from "ember";

var registerWithContainer = function(dirName, application) {
    var directoryRegExp = new RegExp("^" + application.name + "/" + dirName);

    Ember.keys(requirejs.entries).filter(function(key) {
        return directoryRegExp.test(key);
    }).forEach(function(moduleName) {
        var module = require(moduleName, null, null, true);
        if (!module) { throw new Error(moduleName + " must export a single object to be registered with container."); }
        var fileName =  moduleName.match(/[^\/]+\/?$/)[0];
        application.register(dirName + ":" + fileName, module["default"]);
    });
};

export default registerWithContainer;
