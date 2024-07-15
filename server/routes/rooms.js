const {createRoom, getRooms} = require("../controllers/roomController");

const router = require("express").Router();

router.post("/create-room/", createRoom);
router.get("/get-rooms/", getRooms);

module.exports = router;
