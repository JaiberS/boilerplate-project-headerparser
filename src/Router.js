const Router = require('express');
const whoamiController = require('./controllers/WhoamiController');

const router = new Router();

// health endpoint 
router.get("/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

router.get('/', whoamiController.whoami);

module.exports = router;
