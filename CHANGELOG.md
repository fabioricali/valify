# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

[unreleased]
- **Added** `path` property to error object
- **Fixed** repeated errors in nested model scenario

[3.3.1] - 2017-12-28
- **Added** new type `any`
- **Added** new property `allowEmpty`, now it's possible check if a string or an array or an object are empties

[3.2.0] - 2017-12-26
- **Changed** now custom validator function can be returns a string as error
- **Fixed** wrong `arguments` type name before was "argument" 

[3.1.0] - 2017-12-24
- **Added** optional type symbol, now it's possible declare an optional type without set `required` property to `false`, but just so "string?"
- **Changed** now custom validator function can be returns a boolean in addition to Error
- **Fixed** default `required` value was `null`, now is set to `true`

[3.0.0] - 2017-12-23
- **Added** `validate` property
- **Added** validators
- **Added** support to nested model
- **Changed** now `convert` cannot change type, value is closely related to type check and validators check
- **Changed** now custom type supports also Error call
- **Deprecated** multi-type settings

[2.0.0] - 2017-12-19
- **Added** `allowNull` property to field settings that overwrites all types checks if it's enabled and the value is `null`
- **Changed** error property name from `last` to `message` that it's returned by promise reject

[1.2.0] - 2017-12-18
- **Changed** now `ValifyError` returns a second argument with errors list
- Bug fixed

[1.1.0] - 2017-12-18
- **Added** locale settings
- **Added** support to multi-type functions
- **Changed** now `type` property can be a function

[0.0.2] - 2017-12-16
- Fix build badge

[0.0.1] - 2017-12-16
- First release