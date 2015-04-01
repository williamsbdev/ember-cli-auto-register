import Ember from "ember";

var registerWithApplication = function(dirName, application) {
    var directoryRegExp = new RegExp("^" + application.name + "/" + dirName);

    Ember.keys(requirejs.entries).filter(function(key) {
        return directoryRegExp.test(key);
    }).forEach(function(moduleName) {
        var module = require(moduleName, null, null, true);
        var fileName =  moduleName.match(/[^\/]+\/?$/)[0];
        if (!module || !module["default"]) {
            console.log(dirName + "/" + fileName + ".js did not have a default export.");
            throw new Error(moduleName + " must export a default to be registered with application.");
        }
        if(!(module["default"].create instanceof Function)) {
            console.log(dirName + "/" + fileName + ".js object did not have a create function.");
            throw new Error(moduleName + " must export object with create and destroy functions");
        }
        application.register(dirName + ":" + fileName, module["default"]);
    });
};

export default registerWithApplication;
