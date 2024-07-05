const Rooms = require("../models/roomModel");

module.exports.createRoom = async (req, res, next) => {
  try {
    const { title } = req.body;
    const data = await Rooms.create({
      title
    });

    if (data) return res.json({ msg: "Room created successfully." });
    else return res.json({ msg: "Failed to create room to the database" });
  } catch (ex) {
    next(ex);
  }
};
