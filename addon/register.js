import Ember from "ember";

var registerWithContainer = function(dirName, application) {
    var directoryRegExp = new RegExp("^" + application.name + "/" + dirName);

    Ember.keys(requirejs.entries).filter(function(key) {
        return directoryRegExp.test(key);
    }).forEach(function(moduleName) {
        var module = require(moduleName, null, null, true);
        var fileName =  moduleName.match(/[^\/]+\/?$/)[0];
        var error = new Error(moduleName + " must export a single function to be registered with container.");
        if (!module) {
            console.log(dirName + "/" + fileName + ".js did not have a default export.");
            throw error;
        }
        if(!(module["default"] instanceof Function)) {
            console.log(dirName + "/" + fileName + ".js exported an object instead of a function.");
            throw error;
        }
        application.register(dirName + ":" + fileName, module["default"]);
    });
};

export default registerWithContainer;
