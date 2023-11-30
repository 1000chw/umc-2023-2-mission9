export class Store {
	constructor(info) {
		this.placeId = info.placeId;
		this.name = info.name;
		this.type = info.type;
		this.address = info.address;
	}
}

export class Review {
	constructor(storeId, info) {
		this.storeId = storeId;
		this.content = info.content;
		this.userId = info.userId;
		this.score = info.score;
	}
}
