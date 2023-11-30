import { BaseError } from "../../config/error";
import { status } from "../../config/status";

const storesDao = {
	insertStore: async (connection, store) => {
		try {
			const sql = `INSERT INTO store (region_id, name, address) VALUES (${store.placeId}, "${store.name}", "${store.address}")`;
			await connection.beginTransaction();
			const [result] = await connection.query(sql);
			await connection.commit();
			return result.insertId;
		} catch (error) {
			throw new BaseError(status.FAIL_SAVING_STORE_IN_MYSQL);
		}
	},
	insertReview: async (connection, review) => {
		try {
			const sql = `INSERT INTO review (member_id, store_id, body, score) VALUES (${review.userId}, "${review.storeId}", "${review.content}", "${review.score}")`;
			await connection.beginTransaction();
			const [result] = await connection.query(sql);
			await connection.commit();
			return result.insertId;
		} catch (error) {
			throw new BaseError(status.FAIL_SAVING_STORE_IN_MYSQL);
		}
	},
};

export default storesDao;
