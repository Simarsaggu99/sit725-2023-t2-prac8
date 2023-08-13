const router = require("express").Router();
const addMobile = require("../../controllers/addMobile")
const getMobiles = require("../../controllers/getMobiles")

router.post("/", addMobile);
router.get("/", getMobiles);

module.exports = router;