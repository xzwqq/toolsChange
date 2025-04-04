export interface Pidorok {
    type: string;
    condition: string;
    price: string;
    categoryId: object;
    manufacturerId: object;
    description: string;
    photos?: string[];  // ДОБАВЛЕНО
}
  

export interface PidorokSend {
        tool: object,
        files: [],
        id: number,
}