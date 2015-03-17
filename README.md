# Ember-cli-auto-register

[![Build Status][]](https://travis-ci.org/williamsbdev/ember-cli-auto-register)
[![NPM Downlaads][]](https://www.npmjs.org/package/ember-cli-auto-register)

## Description

ember-cli-auto-register allows you to register all the
objects in a specified directory into the application
container.

## Installation

You install this ember-addon via npm

    npm install ember-cli-auto-register --save-dev

## API

You can use this by creating an initializer for you application. Let's take
the example that you have some "repos" that you would like to have
registered in your application container. Your initializer might look like
the following:

```javascript
import Ember from "ember";
import registerWithContainer from "ember-cli-auto-register/register";

export function initialize(container, application) {
    registerWithContainer("repos", application);

    //how you might inject the registered objects in routes/controllers
    Ember.inject.repos = function(name) {
        return container.lookup("repos:" + name);
    };
}

export default {
    name: "repos",
    initialize: initialize
};
```

What does this save you? The single `registerWithContainer("repos",
application);` line would turn into the following:

```javascript
application.register("repos:foo", FooRepo);
application.register("repos:bar", BarRepo);
```

Additionally, at the top of your file, you would need to import the repos
with the following:

```javascript
import FooRepo from "dummy/repos/foo";
import BarRepo from "dummy/repos/bar";
```

As the number of objects grows, so will your initializer. However, with
ember-cli-auto-register, you will already have the object register in the
container and ready to go and you will not need to think about registering
the object, you can use it as soon as you create it after you have done the
initial setup.

## Running Tests

To run the test, install dependencies:

    npm install
    bower install

Then run:

    ember test

or

    ember test --server

## Issues/Contributions

Please submit bugs to the [issues](https://github.com/williamsbdev/ember-cli-auto-register/issues).
PRs are welcome.

## License

Copyright © 2015 Brandon Williams http://williamsbdev.com

Licensed under the MIT License

[Build Status]: https://travis-ci.org/williamsbdev/ember-cli-auto-register.svg?branch=master
[NPM Downlaads]: https://img.shields.io/npm/dm/ember-cli-auto-register.svg
