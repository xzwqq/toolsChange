export interface Pidorok {
	type: string;
	condition: string;
	price: string;
	categoryId: string ;
	manufacturerId: string ;
	description: string;
	photos?: string[];
}

export interface PidorokSend {
	tool: Pidorok;
	files: File[] | null;
	id: string;
}
