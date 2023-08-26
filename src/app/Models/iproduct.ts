export interface IProduct {
    id: number;
    Name: string;
    Quantity: number;
    Price: number;
    Img: string;
    CategoryID: number;
    CategoryName?:string;
    Details?:string;
}
