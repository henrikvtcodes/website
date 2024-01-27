<script lang="ts">
  import { DISCORD_ID, type LanyardData } from "@/lib/lanyard";
  import { useLanyard } from "@/lib/useLanyard";
  import DiscordCard from "./DiscordCard.svelte";
  import SpotifyCard from "./SpotifyCard.svelte";

  export let lanyardData: LanyardData;

  type SpotifySetting = "prefer" | "require" | "ignore";
  /** */
  export let spotifySetting: SpotifySetting = "prefer";

  const data = useLanyard(DISCORD_ID, lanyardData);
</script>

{#if spotifySetting === "require"}
  {#if $data?.listening_to_spotify}
    <SpotifyCard lanyardData={$data} />
  {:else}
    <p>Not listening to Spotify</p>
  {/if}
{:else if spotifySetting === "prefer"}
  {#if $data?.listening_to_spotify}
    <SpotifyCard lanyardData={$data} />
  {:else}
    <DiscordCard lanyardData={$data} />
  {/if}
{:else if spotifySetting === "ignore"}
  <DiscordCard lanyardData={$data} />
{/if}
