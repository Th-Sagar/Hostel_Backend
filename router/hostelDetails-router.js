const express = require("express");
const router = express.Router();
const {
  hostelDetailsController,
  showHostelDetails,
  showHostelOne,
  updateHostel,
  hostelDelete,
} = require("../controller/hostelDetails-controller");

router.route("/register").post(hostelDetailsController);
router.route("/show").get(showHostelDetails);
router.route("/show/:id").get(showHostelOne);
router.route("/update/:id").patch(updateHostel);
router.route("/delete/:id").delete(hostelDelete);

module.exports = router;
