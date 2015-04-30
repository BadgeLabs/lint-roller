import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  rules:DS.hasMany('rule')
});
