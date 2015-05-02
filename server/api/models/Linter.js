/**
* Linter.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    name : { type: 'string' },
    logoUrl: { type: 'string' },

    // References
    rules: {
      collection: 'rule',
      via: 'linter'
    },
  }
};

