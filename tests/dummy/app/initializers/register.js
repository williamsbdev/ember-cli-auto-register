import registerWithContainer from "ember-cli-auto-register/register";

export function initialize() {
    // this is because of the app inside of the ember-addon
    // this does not need, nor should it be done, in a real app
    var application = arguments[1] || arguments[0];
    application.name = "dummy";

    registerWithContainer("repos", application);

    //how you might inject the registered objects in routes/controllers
    // Ember.inject.repos = function(name) {
    //     return container.lookup("repos:" + name);
    // };
}

export default {
    name: "repos",
    initialize: initialize
};
