import Ember from 'ember';
import readFileAsDataUrl from '../../../utils/read-file-as-data-url'


function toArrayBuffer(buffer) {
    var ab = new ArrayBuffer(buffer.length);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buffer.length; ++i) {
        view[i] = buffer[i];
    }
    return ab;
}

export default Ember.Route.extend({
  model: function createLinter() {
    return this.store.createRecord('linter');
  },
  actions: {
    save: function saveLinter(){
      var linter = this.modelFor(this.routeName);
      var logoFile = linter.get('logoFile');
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
      linter.set('logoFile', file);

      let controller = this.controller;
      if (controller.get('events') == null) {
        controller.set('events', Ember.A([]));
      }
      let filename = file.get('name');
      readFileAsDataUrl(file.get('file')).then(function (url) {
        controller.get('events').pushObject({
          filename: filename,
          preview: url
        });
      });
    }
  }
});
