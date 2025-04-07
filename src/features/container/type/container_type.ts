export interface content {
    id: number;
    category:{
        name: string;
    },
    owner: {
        firstname: string;
    },
    photos: string[],

    price: string | number;
}