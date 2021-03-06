'use strict';

module.exports = {
  name: 'semantic-ui-seeds',

  included: function (app) {
    app.import(app.bowerDirectory + "/semantic-ui/dist/semantic.css");
    app.import(app.bowerDirectory + "/semantic-ui/dist/semantic.js");

    var fontExtensions = ['.eot','.otf','.svg','.ttf','.woff','.woff2'];
    fontExtensions.forEach((ext) => {
      app.import(`${app.bowerDirectory}/semantic-ui/dist/themes/default/assets/fonts/icons${ext}`, { destDir: "assets/themes/default/assets/fonts" })
    })
  }
};
