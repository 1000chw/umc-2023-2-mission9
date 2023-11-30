import { validationResult, matchedData } from "express-validator";
import { Review, Store } from "./stores.dto";
import { status } from "../../config/status";
import { response } from "../../config/response";
import storesService from "./stores.service";
import { BaseError } from "../../config/error";
const storesController = {
	postStore: async (req, res, next) => {
		try {
			const result = validationResult(req);
			if (result.isEmpty()) {
				const storeInfo = req.body;
				const store = new Store(storeInfo);
				const data = await storesService.putStore(store);
				return res.status(200).json(response(status.OK, data));
			}
			res.send(response(status.INVALID_REQUEST, result.array()));
		} catch (error) {
			throw new BaseError(status.REQUEST_PROCESS_FAIL_WHILE_SAVING_STORE);
		}
	},
	postReview: async (req, res, next) => {
		try {
			const result = validationResult(req);
			if (result.isEmpty()) {
				const reviewInfo = req.body;
				const storeId = req.params.storeId;
				const review = new Review(storeId, reviewInfo);
				const data = await storesService.putReview(review);
				return res.status(200).json(response(status.OK, data));
			}
			res.send(response(status.INVALID_REQUEST, result.array()));
		} catch (error) {
			throw new BaseError(status.REQUEST_PROCESS_FAIL_WHILE_SAVING_STORE);
		}
	},
};

export default storesController;
