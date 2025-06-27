import { color } from "./color";
import { Page } from "./Page";

export class Page_Menu extends Page {
    draw(ctx: CanvasRenderingContext2D) {
        ctx.font = "bold 100px serif";
        ctx.fillStyle = color.yellow;
        ctx.fillText("DANOUTANA", 1920/2 - 100 * 4.5, 100);
    };
}