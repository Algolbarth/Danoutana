import { Card } from "./Card";
import { Card_Rarity } from "./CardRarity";

export class Extension {
    name: string = "Extension";
    card_list: Card[] = [];

    constructor() {
        for (let i = 0; i < 50; i++) {
            this.card_list.push(new Card(Card_Rarity.Common));
        }
        for (let i = 0; i < 33; i++) {
            this.card_list.push(new Card(Card_Rarity.Uncommon));
        }
        for (let i = 0; i < 11; i++) {
            this.card_list.push(new Card(Card_Rarity.Rare));
        }
        for (let i = 0; i < 5; i++) {
            this.card_list.push(new Card(Card_Rarity.Legendary));
        }
        this.card_list.push(new Card(Card_Rarity.Mythic));
    };
};