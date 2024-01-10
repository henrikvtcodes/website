<script lang="ts">
  import { Copy, Loader } from "lucide-svelte";
  import { fakeDelay } from "@/lib/fakeDelay";

  export let toCopy: string;

  let copying = false;

  async function clickToCopy() {
    copying = true;
    /* Runs for a minimum of 400ms - this is a little UX touch */
    await Promise.allSettled([navigator.clipboard.writeText(toCopy), fakeDelay(400)]);
    copying = false;
  }
</script>

<div class="p-4">
  <button
    class="p-1 rounded border border-gray-100 hover:bg-gray-50 bg-white"
    disabled={copying}
    on:click={clickToCopy}
  >
    {#if copying}
      <Loader class="h-6 w-auto animate-spin" />
    {:else}
      <Copy class="h-6 w-auto" />
    {/if}
  </button>
</div>
