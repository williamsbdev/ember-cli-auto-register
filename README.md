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

You can use this by creating an initializer for your application. Let's take
the example that you have some "repos" that you would like to have
registered in your application container. Your initializer might look like
the following:

```javascript
import registerWithContainer from "ember-cli-auto-register/register";

export function initialize(container, application) {
    registerWithContainer("repos", application);
}

export default {
    name: "repos",
    initialize: initialize
};
```

What does this save you? The single `registerWithContainer("repos",
application);` line does the following for you, cutting down on the boilerplate
code you have to write in the initializer and would automatically register any
new objects you create in your repos directory:

```javascript
application.register("repos:foo", FooRepo);
application.register("repos:bar", BarRepo);
```

At this time, the auto-register only supports Ember Objects exported as default.

## Running Tests

To run the test, install dependencies:

    npm install
    bower install

Then run:

    ember test

or

    ember test --server

## Issues

Please submit bugs to the [issues].

## License

Copyright © 2015 Brandon Williams http://williamsbdev.com

Licensed under the MIT License

[Build Status]: https://travis-ci.org/williamsbdev/ember-cli-auto-register.svg?branch=master
[NPM Downlaads]: https://img.shields.io/npm/dm/ember-cli-auto-register.svg
[issues]: https://github.com/williamsbdev/ember-cli-auto-register/issues
