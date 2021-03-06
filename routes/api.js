const router = require("express").Router();
const apiController = require("../Controllers/apiController");
const { uploadSingle } = require("../Middlewares/multer");

router.get("/landing-page", apiController.landingPage);
router.get("/detail-page/:id", apiController.detailPage);
router.post("/booking-page", apiController.bookingPage);

module.exports = router;
