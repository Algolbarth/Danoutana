<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { color } from "./lib/color";

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let fps: number = 60;

  function step() {
    ctx.fillStyle = color.black;
    ctx.fillRect(0, 0, 1920, 1080);
  }

  onMount(() => {
    canvas.width = 1920;
    canvas.height = 1080;

    ctx = canvas.getContext("2d")!;

    setInterval(step, 1000 / fps);
  });

  onDestroy(() => {});
</script>

<canvas bind:this={canvas}></canvas>
