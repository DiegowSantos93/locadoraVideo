import express from "express"
import rentedController from "../controllers/rented-controller.js"
import { Router } from "express"
import check_token from "../middleware/check-token.js";

const router = Router()

router.post("/", check_token, rentedController.store);
router.get("/", check_token, rentedController.index);
router.get("/:id", check_token, rentedController.show);
router.put("/:id", check_token, rentedController.update);
router.delete("/:id", check_token, rentedController.destroy);

export default router;
