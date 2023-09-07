const UserController = require("../controllers/UsersController");
const express = require("express")
const router = express.Router()

router.post("/add", UserController.createUser);
router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUser);
router.patch("/update/:id", UserController.updateUser);
router.delete("/delete/:id", UserController.deleteUser);

module.exports = router