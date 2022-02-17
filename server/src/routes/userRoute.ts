const router = require("express").Router();
import { getUser } from "../controllers/userController";

//user
router.route("/").get(getUser);

module.exports = router;
