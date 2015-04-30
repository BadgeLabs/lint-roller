import Ember from 'ember';

export default Ember.Route.extend({
  model: function createLinter() {
    return this.store.createRecord('linter');
  }
});
