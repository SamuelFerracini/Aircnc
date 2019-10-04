const Booking = require('../models/Booking'); 

module.exports = {
  async store(req, res) {
    return res.json({
      ok: true
    });
  }
};
