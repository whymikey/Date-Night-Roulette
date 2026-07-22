export interface Movie {
    id: number | string;
    title: string;
    description: string;
    year: number | string;
    rating: number;
    imageUrl: string;
}

export interface FoodOption {
    id: number | string;
    name: string;
    emoji: string;
    color: string;
}