const express = require("express");
const { isAuthenticated } = require("../middlewares/auth.js");
const {
  login,
  logout,
  getUser,
  myProfile,
  contact,
  updateUser,
  addTimeline,
  addProject,
  deleteTimeline,
  deleteProject,
} = require("../controller/User.js");
const router = express.Router();

router.route("/login").post(login);

router.route("/logout").get(logout);

router.route("/user").get(getUser);

router.route("/me").get(isAuthenticated, myProfile);

router.route("/admin/update").put(isAuthenticated, updateUser);

router.route("/admin/timeline/add").post(isAuthenticated, addTimeline);
router.route("/admin/project/add").post(isAuthenticated, addProject);

router.route("/admin/timeline/:id").delete(isAuthenticated, deleteTimeline);
router.route("/admin/project/:id").delete(isAuthenticated, deleteProject);

router.route("/contact").post(contact);
module.exports = router;
