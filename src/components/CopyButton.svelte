<script lang="ts">
  import { Copy, Loader2 } from "lucide-svelte";
  import { fakeDelay } from "@/lib/fakeDelay";

  export let toCopy: string;

  let copying = false;

  async function clickToCopy() {
    copying = true;
    /* Runs for a minimum of 1000ms - this is a little UX touch. 
    Tailwind CSS' animate-spin runs for 1s so that's where the value came from. */
    await Promise.allSettled([navigator.clipboard.writeText(toCopy), fakeDelay(1000)]);
    copying = false;
  }
</script>

<div class="pl-2">
  <button
    title="Copy to clipboard"
    class="p-1 rounded border border-gray-200 hover:bg-gray-100 bg-white"
    disabled={copying}
    on:click={clickToCopy}
  >
    {#if copying}
      <Loader2 class=" h-7 w-auto animate-spin" />
    {:else}
      <Copy class="h-7 w-auto" />
    {/if}
  </button>
</div>
