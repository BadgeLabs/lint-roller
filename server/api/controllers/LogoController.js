/**
 * LogoController
 *
 * @description :: Server-side logic for managing logoes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	upload: function uploadLogo(req, res) {
    var logo = req.file('logo');
    console.log(logo);

    logo.upload({
      dirname: '../../assets/images/logos'
    }, function onUploadComplete(err, file) {
      if (err) {
        return res.serverError(err);
      }

      console.log(logo);
      res.json({
        status: 200,
        logo: logo
      })
    })
  }
};

