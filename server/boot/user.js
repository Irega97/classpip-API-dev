// eslint-disable-next-line quotes
"use strict";

// eslint-disable-next-line space-before-function-paren
module.exports = function (app) {
  delete app.models.User.validations.email;
};
