import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    gotoNewLinter: function gotoNewLinter(){
      this.transitionTo('linters.new');
      return false;
    }
  }

});
