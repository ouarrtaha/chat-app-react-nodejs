const {createRoom} = require("../controllers/roomController");
const router = require("express").Router();

router.post("/create-room/", createRoom);
// router.get("/ger-rooms/", getRoom);

module.exports = router;
