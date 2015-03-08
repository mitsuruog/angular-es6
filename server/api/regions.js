exports = module.exports = function(app){

  var regions = require('../json/regions.json');

  app.get('/api/regions', function (req, res) {
    res.json(regions);
  });
};