import express from "express"
import movieController from "../controllers/movie-controller.js"
import { Router } from "express"
import check_token from "../middleware/check-token.js";
import check_role from "../middleware/check-role.js"

const router = Router()

router.post("/", check_token, check_role(["ADM"]), movieController.store);
router.get("/", check_token, movieController.index);
router.get("/:id", check_token, movieController.show);
router.put("/:id", check_token, check_role(["ADM"]), movieController.update);
router.delete("/:id", check_token, check_role(["ADM"]), movieController.destroy);

export default router;
