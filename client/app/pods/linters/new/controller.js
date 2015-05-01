import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function saveLinter(){
      var self = this;
      this.get('model').save().then(function gotoLinters(){
        self.transitionToRoute('linters');
      })
    }
  }
});
