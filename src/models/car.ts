import { CarImage } from "./carImage";

export interface Car{
    
    id:number;
    description:string;
    brandName:string;
    colorName:string;
    dailyPrice:number;
    imagePath:string;
    carImages:CarImage[];

}