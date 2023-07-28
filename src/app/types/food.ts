export interface Foods{
    id:number,
    price:number,
    name:string,
    favourite:boolean,
    stars:number,
    tags?:string[],
    imageUrl:string,
    cookTime:string,
    origin:string[],
}
// export class Foods{
//     id!:number;
//     price!:number;
//     name!:string;
//     favourite:boolean=false;
//     star:number=0;
//     tag?:string[];
//     imageUrl!:string;
//     cookTime!:string;
//     origins!:string[];
// }