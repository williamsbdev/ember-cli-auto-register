import Ember from "ember";
import registerWithContainer from "ember-cli-auto-register/register";

export function initialize(container, application) {
    registerWithContainer("repos", application);
    Ember.inject.repos = function(name) {
        return container.lookup("repos:" + name);
    };
}

export default {
    name: "repos",
    initialize: initialize
};
