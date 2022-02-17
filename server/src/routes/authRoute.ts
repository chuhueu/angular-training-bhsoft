const router = require("express").Router();
import { register, login } from "../controllers/authController";

router.route("/login").post(login);
router.route("/register").post(register);

module.exports = router;
