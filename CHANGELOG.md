# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

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