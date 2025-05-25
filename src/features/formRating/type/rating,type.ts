export interface ratingsucsses {
	id: string | number;
	sender: {
		id: string | number;
		firstname: string;
		lastname: string;
		login: string;
	};
	recipient: {
		id: string | number;
		firstname: string;
		lastname: string;
		login: string;
	};
	rating: number;
	message: string;
	createdAt: string | number;
}
