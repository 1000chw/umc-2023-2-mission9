import express from "express";
import asyncHandler from "express-async-handler";
import { param, body } from "express-validator";
import storesController from "./stores.controller";

const storesRouter = express.Router();
storesRouter.get("/", (req, res) => {
	return res.status(200).send("default");
});

storesRouter.post(
	"/",
	[
		body("placeId").notEmpty().isInt().withMessage("Invalid placeId"),
		body("name").notEmpty().isString().withMessage("Invalid name"),
		body("address").notEmpty().isString().withMessage("Invalid address"),
		body("type").notEmpty().isString().withMessage("Invalid type"),
	],
	asyncHandler(storesController.postStore)
);

storesRouter.post(
	"/:storeId(\\d+)/reviews",
	[
		param("storeId").notEmpty().isInt().withMessage("Invalid storeId"),
		body("userId").notEmpty().isInt().withMessage("Invalid userId"),
		body("score").notEmpty().isFloat().withMessage("Invalid score"),
	],
	asyncHandler(storesController.postReview)
);

export default storesRouter;
