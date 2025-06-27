import { Card_Rarity } from "./CardRarity";
import { Card_Type } from "./CardType";
import { color } from "./color";

export class Card {
    name: string = "Card";
    type: Card_Type = Card_Type.Creature;
    rarity: Card_Rarity;

    width: number = 550;
    height: number = 900;
    border_width: number = 25;
    up_name: string = "";
    down_name: string = "";
    font_size: number = 15;

    constructor(rarity: Card_Rarity) {
        this.rarity = rarity;
        this.define_name();
    };

    define_name() {
        let name_split = this.name.split(" ");
        let down = false;
        for (const part of name_split) {
            if (this.up_name.length + part.length + 1 > 45) {
                down = true;
            }

            if (down) {
                this.down_name = this.down_name + " " + part;
            }
            else {
                this.up_name = this.up_name + " " + part;
            }
        }

        this.font_size = (30 - Math.floor(this.name.length / 3));
        if (this.font_size < 15) {
            this.font_size = 15;
        }
    };

    draw(ctx: CanvasRenderingContext2D, x: number, y: number, ratio: number = 1) {
        this.draw_border(ctx, x, y, ratio);
        this.draw_name(ctx, x, y, ratio);
        this.draw_icon(ctx, x + (this.border_width) * ratio, y + (this.border_width + 50) * ratio, ratio);
        this.draw_type(ctx, x, y, ratio);
    };

    draw_border(ctx: CanvasRenderingContext2D, x: number, y: number, ratio: number = 1) {
        switch (this.rarity) {
            case "C":
                ctx.fillStyle = color.brown;
                break;
            case "UC":
                ctx.fillStyle = color.dark_green;
                break;
            case "R":
                ctx.fillStyle = color.dark_blue;
                break;
            case "E":
                ctx.fillStyle = color.purple;
                break;
            case "L":
                ctx.fillStyle = color.dark_orange;
                break;
            case "M":
                ctx.fillStyle = color.dark_red;
                break;
        }
        ctx.fillRect(x, y, this.width * ratio, this.height * ratio);
    };

    draw_name(ctx: CanvasRenderingContext2D, x: number, y: number, ratio: number = 1) {
        ctx.fillStyle = color.grey;
        ctx.fillRect(x + this.border_width * ratio, y + this.border_width * ratio, (this.width - this.border_width * 2) * ratio, 50 * ratio);

        ctx.font = "bold " + (this.font_size * ratio) + "px serif";
        ctx.fillStyle = color.black;
        if (this.name.length > 45) {
            ctx.fillText(this.up_name.toUpperCase(), x + (this.border_width + 10) * ratio, y + (this.border_width + this.font_size * 1.5) * ratio);
            ctx.fillText(this.down_name.toUpperCase(), x + (this.border_width + 10) * ratio, y + (this.border_width + this.font_size * 2.5) * ratio);
        }
        else {
            ctx.fillText(this.up_name.toUpperCase(), x + (this.border_width + 10) * ratio, y + (this.border_width + this.font_size * 1.25) * ratio);
        }
    };

    draw_icon(ctx: CanvasRenderingContext2D, x: number, y: number, ratio: number = 1) {
        ctx.fillStyle = color.white;
        ctx.fillRect(x, y, 500 * ratio, 500 * ratio);
    };

    draw_type(ctx: CanvasRenderingContext2D, x: number, y: number, ratio: number = 1) {
        ctx.fillStyle = color.grey;
        ctx.fillRect(x + this.border_width * ratio, y + (this.border_width + 50 + 500) * ratio, (this.width - this.border_width * 2) * ratio, 300 * ratio);

        ctx.font = "bold " + (20 * ratio) + "px serif";
        ctx.fillStyle = color.black;
        ctx.fillText(this.type.toUpperCase(), x + (this.border_width + 10) * ratio, y + (this.border_width + 50 + 500 + 20) * ratio);
    };
}