import Ember from "ember";

var registerWithApplication = function(dirName, application) {
    var directoryRegExp = new RegExp("^" + application.name + "/" + dirName);

    Ember.keys(requirejs.entries).filter(function(key) {
        return directoryRegExp.test(key);
    }).forEach(function(moduleName) {
        var module = require(moduleName, null, null, true);
        var fileName =  moduleName.match(/[^\/]+\/?$/)[0];
        if (!module ||
                !module["default"] ||
                !(module["default"].prototype instanceof Ember.Object)
           ) {
            console.log(dirName + "/" + fileName + ".js did not have an Ember.Object as the default export.");
            throw new Error(moduleName + " must export a default to be registered with application.");
        }
        application.register(dirName + ":" + fileName, module["default"]);
    });
};

export default registerWithApplication;
