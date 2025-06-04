export interface queueChat {
	id: string;
	user: {
		id: string;
		firstname: string;
		lastname: string;
		login: string;
	};
	lastMessage: null | string;
}
export interface ChatiksProps {
	id: string;
}
export interface chatikmessage {
	id: string;
	sender: {
		id: string;
		firstname: string;
		lastname: string;
		login: string;
	};
	text: string;
	timestamp: string;
}
export interface namepropiks {
	firstname: string;
	id: string;
	lastname: string;
	login: string;
}
