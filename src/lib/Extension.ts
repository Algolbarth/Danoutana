import { Card } from "./Card";
import { random_color } from "./CardColor";
import { Card_Rarity } from "./CardRarity";

export class Extension {
    name: string = "Extension";
    card_list: Card[] = [];

    constructor() {
        for (let i = 0; i < 50; i++) {
            this.card_list.push(new Card(Card_Rarity.COMMON, i + 1, random_color()));
        }
        for (let i = 0; i < 33; i++) {
            this.card_list.push(new Card(Card_Rarity.UNCOMMON, 51 + i, random_color()));
        }
        for (let i = 0; i < 11; i++) {
            this.card_list.push(new Card(Card_Rarity.RARE, 84 + i, random_color()));
        }
        for (let i = 0; i < 5; i++) {
            this.card_list.push(new Card(Card_Rarity.LEGENDARY, 95 + i, random_color()));
        }
        this.card_list.push(new Card(Card_Rarity.MYTHIC, 100, random_color()));
    };
};