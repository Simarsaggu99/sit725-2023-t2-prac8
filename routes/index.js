const router = require("express").Router();
const apiRoutes = require("./api");
router.use("/api", apiRoutes);

router.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.json({
        error: {
            status: error.status || 500,
            message: error.message || "Internal Server Error",
        },
    });
});

module.exports = router;