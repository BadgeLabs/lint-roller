import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function saveLinter(){
      var linter = this.get('model');
      var logoFile = linter.get('logo_file');
      var self = this;
      if (logoFile) {
        logoFile.upload().then(function (response) {
          linter.set('logoUrl', response.body.logo[0].fd);
          linter.save().then(function gotoLinters(){
            self.transitionToRoute('linters');
          });
        }, function () {
          logoFile.rollback();
        });
      } else { // todo: save is repeated here and above, refactor
        linter.save().then(function gotoLinters(){
          self.transitionToRoute('linters');
        });
      }
    },

    queueLogo: function queueLogoFile(file){
      var linter = this.get('model');
      linter.set('logo_file', file);
    }
  }
});
