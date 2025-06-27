import { color } from "./color";
import type { Game } from "./Game";
import { Page } from "./Page";

export class Page_Menu extends Page {
    draw(ctx: CanvasRenderingContext2D, game: Game) {
        ctx.font = "bold 100px serif";
        ctx.fillStyle = color.yellow;
        ctx.fillText("DANOUTANA", 1920 / 2 - 100 * 3, 100);

        let index = 0;
        let ratio = 0.15;
        for (const card of game.extensions[0].card_list) {
            card.draw(ctx, 10 + (index % 20) * (card.width + 50) * ratio, 200 + Math.floor(index / 20) * (card.height + 50) * ratio, ratio);
            index++;
        }
    };
}