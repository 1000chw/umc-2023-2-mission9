import pool from "../../config/db";
import { BaseError } from "../../config/error";
import { status } from "../../config/status";
import storesDao from "./stores.dao";

const storesService = {
	putStore: async (store) => {
		try {
			const connection = await pool.getConnection();
			const data = await storesDao.insertStore(connection, store);
			connection.release();
			return data;
		} catch (error) {
			throw new BaseError(status.FAIL_SAVING_STORE);
		}
	},
	putReview: async (review) => {
		try {
			const connection = await pool.getConnection();
			const data = await storesDao.insertReview(connection, review);
			connection.release();
			return data;
		} catch (error) {
			throw new BaseError(status.FAIL_SAVING_STORE);
		}
	},
};

export default storesService;
