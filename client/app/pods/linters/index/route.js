import Ember from 'ember';

export default Ember.Route.extend({
  model: function findAllLinters(){
    return this.store.findAll('linter');
  },
  actions: {
    gotoNewLinter: function gotoNewLinter(){
      this.transitionTo('linters.new');
      return false;
    }
  }

});
