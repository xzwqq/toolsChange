export interface Tool {
    type: string; 
    condition: string; 
    price: string | number; 
    categoryId: string; 
    manufacturerId: string ; 
    description: string; 
}

export interface Data {
    tool: Tool;
    files: File[];
}
