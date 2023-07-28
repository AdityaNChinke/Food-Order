import { CartItem } from "./cartitem";
import { Foods } from "./food";

export class Cart {

    items: CartItem[] = [];

    get totalPrice(): number {
        let totalPrice: number = 0;
        this.items.forEach(item => {
            totalPrice += item.price;
        });
        return totalPrice;
    }



}