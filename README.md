# env-replace

[![Greenkeeper badge](https://badges.greenkeeper.io/herrmannplatz/env-replace.svg)](https://greenkeeper.io/)

[![npm version](https://badge.fury.io/js/env-replace.svg)](https://badge.fury.io/js/env-replace) [![Build Status](https://travis-ci.org/herrmannplatz/env-replace.svg?branch=master)](https://travis-ci.org/herrmannplatz/env-replace)

> Replaces all environment variable placeholders in a file

## Install

```shell
npm install env-replace
```

## Usage

```shell
npx env-replace config/*.yaml
```

```javascript
const envReplace = require('env-replace')

envReplace('config/*.yaml')
```

## API

### envReplace(pattern)

Replaces environment variable placeholders in any file that matches the pattern.

#### pattern

Type: `string`

Glob that defines which files are processed.
