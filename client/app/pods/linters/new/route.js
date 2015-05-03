import Ember from 'ember';

export default Ember.Route.extend({
  model: function createLinter() {
    return this.store.createRecord('linter');
  },
  actions: {
    save: function saveLinter(){
      var linter = this.modelFor(this.routeName);
      var logoFile = linter.get('logo_file');
      var self = this;
      if (logoFile) {
        logoFile.upload().then(function (response) {
          linter.set('logoUrl', response.body.logo[0].fd);
          linter.save().then(function gotoLinters(){
            self.transitionTo('linters');
          });
        }, function () {
          logoFile.rollback();
        });
      } else { // todo: save is repeated here and above, refactor
        linter.save().then(function gotoLinters(){
          self.transitionTo('linters');
        });
      }
    },

    queueLogo: function queueLogoFile(file){
      var linter = this.modelFor(this.routeName);
      linter.set('logo_file', file);
    }
  }
});
