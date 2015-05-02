import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  logoUrl: DS.attr('string'),

  // References
  rules:DS.hasMany('rule'),

  // todo: this is a complete hack,
  // how can I make the server return the correct url to begin with?
  logoRealUrl: Ember.computed('logoUrl', function () {
    if (this.get('logoUrl')) {
      return this.get('logoUrl').split(/\//).slice(3).join('/');
    }
  })
});
