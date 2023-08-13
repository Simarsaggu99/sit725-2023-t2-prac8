const router = require("express").Router();
const mobileRoutes = require("../api/Mobile")
router.use("/mobile", mobileRoutes);
module.exports = router;