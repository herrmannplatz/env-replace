#!/usr/bin/env node

const envReplace = require('./')
const meow = require('meow')

const cli = meow(`
  Usage
    $ env-replace <pattern>

  Examples
    $ env-replace config/*.yaml
`)

envReplace(cli.input[0])
