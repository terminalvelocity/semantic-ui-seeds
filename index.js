/* jshint node: true */
'use strict';

module.exports = {
  name: 'semantic-ui-seeds'

  included: function (app) {
    app.import(app.bowerDirectory + "/semantic-ui/dist/semantic.css")
    app.import(app.bowerDirectory + "/semantic-ui/dist/semantic.js")

    var fontExtensions = ['.eot','.otf','.svg','.ttf','.woff','.woff2'];
    for (var i = fontExtensions.length - 1; i >= 0; i--) {
      app.import(app.bowerDirectory + "bower_components/semantic-ui/dist/themes/default/assets/fonts/icons"+fontExtensions[i], { destDir: "assets/themes/default/assets/fonts" });
    };
  }
};
