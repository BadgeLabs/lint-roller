/**
 * LogoController
 *
 * @description :: Server-side logic for managing logoes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var UPLOAD_DIR = '../../assets/images/logos';

module.exports = {
	upload: function uploadLogo(req, res) {

    var logo = req.file('file');

    logo.upload({
      dirname: UPLOAD_DIR
    }, function onUploadComplete(err, uploadedFiles) {
      if (err) {
        return res.serverError(err);
      }

      res.json({
        status: 200,
        logo: uploadedFiles
      })
    })
  }
};

