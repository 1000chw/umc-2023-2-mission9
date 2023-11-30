import { StatusCodes } from "http-status-codes";

export const status = {
	OK: { status: StatusCodes.OK, isSuccess: true, code: 1000, message: "OK" },

	//error
	NOT_FOUND: { status: StatusCodes.NOT_FOUND, isSuccess: false, code: 3000, message: "Not Found" },
	INVALID_REQUEST: { status: StatusCodes.INVALID_REQUEST, isSuccess: false, code: "Invalid Request" },

	//server error
	REQUEST_PROCESS_FAIL_WHILE_SAVING_STORE: {
		status: StatusCodes.INTERNAL_SERVER_ERROR,
		isSuccess: false,
		code: 4000,
		message: "가게 저장 request 처리에 문제가 발생했습니다.",
	},

	FAIL_SAVING_STORE: {
		status: StatusCodes.INTERNAL_SERVER_ERROR,
		isSuccess: false,
		code: 4001,
		message: "가게 저장 중 에러가 발생했습니다.",
	},
	FAIL_SAVING_STORE_IN_MYSQL: {
		status: StatusCodes.INTERNAL_SERVER_ERROR,
		isSuccess: false,
		code: 4002,
		message: "가게 저장 중에 MySql 오류가 발생했습니다.",
	},
};
