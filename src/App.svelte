<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { color } from "./lib/color";
  import type { Page } from "./lib/Page";
  import { Page_Menu } from "./lib/Page_Menu";
    import { Game } from "./lib/Game";

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let fps: number = 60;
  let page: Page = new Page_Menu();
  let game: Game = new Game();

  function step() {
    ctx.fillStyle = color.black;
    ctx.fillRect(0, 0, 1920, 1080);

    page.draw(ctx, game);
  }

  function key_handler(e: any) {
    page = page.key_handler(e.key, game, page);
  }

  onMount(() => {
    canvas.width = 1920;
    canvas.height = 1080;

    ctx = canvas.getContext("2d")!;

    setInterval(step, 1000 / fps);

    document.addEventListener("keydown", key_handler);
  });

  onDestroy(() => {
    document.removeEventListener("keydown", key_handler);
  });
</script>

<canvas bind:this={canvas}></canvas>
