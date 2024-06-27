class WhoamiController {

  async whoami(req, res) {
    console.log(`WhoamiController.whoami : REQUEST--> ${JSON.stringify(req.params)}`);
    try {
      res.json({ 
        ipaddress: req.ip, 
        language: req.headers["accept-language"],
        software: req.headers["user-agent"],
      });
    } catch (error) {
      console.error(`error:${error}`);
      res.status(error.statusCode || 400).json();
    }
  }
}

module.exports = new WhoamiController();
