/* eslint-env node */

'use strict';

const path = require('path');

module.exports = function (/* env */) {
  return {
    clientAllowedKeys: ['SERVER_URL'],
    fastbootAllowedKeys: [],
    failOnMissingKey: false,
    path: path.join(path.dirname(__dirname), '.env'),
  };
};
