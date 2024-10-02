import express from "express"
import userController from "../controllers/user-controller.js"
import { Router } from "express"
import check_token from "../middleware/check-token.js";
import check_role from "../middleware/check-role.js"
import cep_endereco from "../middleware/cep-endereco.js";

const router = Router()

router.post("/", check_token, check_role(["ADM"]), cep_endereco, userController.store);
router.get("/", check_token, check_role(["USR"]), userController.index);
router.get("/:id", check_token, userController.show);
router.put("/:id", check_token, cep_endereco, userController.update);
router.delete("/:id", check_token, userController.destroy);

router.post("/signup", userController.signup);
router.post("/login", userController.login);

export default router;
