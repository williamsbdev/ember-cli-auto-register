import Ember from "ember";
import registerWithContainer from "ember-cli-auto-register/register";

export function initialize(container, application) {
    // this is because of the app inside of the ember-addon
    // this does not need, nor should it be done, in a real app
    application.name = "dummy";

    registerWithContainer("repos", application);
    Ember.inject.repos = function(name) {
        return container.lookup("repos:" + name);
    };
}

export default {
    name: "repos",
    initialize: initialize
};
