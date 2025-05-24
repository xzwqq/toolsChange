export interface notifresponse {
	id: string;
	owner: {
		id: string;
		firstname: string;
		lastname: string;
		login: string;
	};
	requester: {
		id: string;
		firstname: string;
		lastname: string;
		login: string;
	};
	tool: {
		id: string;
		owner: {
			id: string;
			firstname: string;
			lastname: string;
			login: string;
		};
		manufacturer: {
			id: string;
			name: string;
		};
		category: {
			id: string;
			name: string;
		};
		type: string;
		condition: string;
		price: string | number;
		description: string;
		photos: string[];
		createdAt: string;
		updatedAt: string;
	};
	price: string;
	message: string;
	status: string;
	startDate: string;
	endDate: string;
}

export interface notifDealtype {
	id: string;
	type: string;
}

export interface ratingType {
  dealId: number | string;
  rating: number;
  message: string;
}