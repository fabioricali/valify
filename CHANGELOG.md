# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

[unreleased]
- Added `validate` property
- Added validators
- Added support to nested model
- Now `convert` cannot change type, value is closely related to type check and validators check
- Deprecated multi-type settings

[2.0.0] - 2017-12-19
- Changed error property name from `last` to `message` that it's returned by promise reject
- Added `allowNull` property to field settings that overwrites all types checks if it's enabled and the value is `null`

[1.2.0] - 2017-12-18
- Now `ValifyError` returns a second argument with errors list
- Bug fixed

[1.1.0] - 2017-12-18
- Added locale settings
- Now `type` property can be a function
- Added support to multi-type functions

[0.0.2] - 2017-12-16
- Fix build badge

[0.0.1] - 2017-12-16
- First release