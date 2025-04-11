export interface Pidorok {
	type: string;
	condition: string;
	price: string;
	owner:{
		firstname: string;
	}
	category: {
		id: string;
		name: string;
	};
	manufacturer:{
		id: string;
		name: string;
	}
	description: string;
	photos?: string[];
}

export interface formPenis {
    type: string;
    condition: string;
    price: string;
    categoryId: string;
    manufacturerId: string;
    description: string;
  }

export interface PidorokSend {
	tool: formPenis;
	files: File[] | null;
	deleteFile: string | object | null;
	id: string;
}

export interface PidorokFinish {
	tool: formPenis;
	deleteFile: [] | null;
	files: File[] | null;
}