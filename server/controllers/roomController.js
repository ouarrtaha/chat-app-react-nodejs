const Rooms = require("../models/roomModel");

module.exports.createRoom = async (req, res, next) => {
  try {
    const { title } = req.body;

    const room = await Rooms.findOne({ title });
    if (room) {
      return res.status(400).json({ msg: "Room already exists." });
    }

    const data = await Rooms.create({
      title
    });
    if (data) return res.json({ msg: "Room created successfully." });
    else return res.json({ msg: "Failed to create room to the database" });
  } catch (ex) {
    next(ex);
  }
};
module.exports.getRooms = async (req, res, next) => {
  try {
    const rooms = await Rooms.find({});
    if (rooms) return res.json(rooms);
    else return res.json({ msg: "No rooms found" });
  } catch (ex) {
    next(ex);
  }
};
