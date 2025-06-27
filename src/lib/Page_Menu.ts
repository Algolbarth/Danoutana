import { Card } from "./Card";
import { color } from "./color";
import { Page } from "./Page";

export class Page_Menu extends Page {
    draw(ctx: CanvasRenderingContext2D) {
        ctx.font = "bold 100px serif";
        ctx.fillStyle = color.yellow;
        ctx.fillText("DANOUTANA", 1920/2 - 100 * 3, 100);

        let card =  new Card();
        card.draw(ctx, 1920/2 - 250, 1080/2 - 400, 1);
    };
}