type Kv = {};

type DiscordUser = {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  bot: boolean;
  global_name: string;
  avatar_decoration_data?: any;
  display_name: string;
  public_flags: number;
};

export type Spotify = {
  track_id: string;
  timestamps: {
    start: number;
    end: number;
  };
  album: string;
  album_art_url: string;
  artist: string;
  song: string;
};

export type LanyardData = {
  kv: Kv;
  discord_user: DiscordUser;
  activities: any[];
  discord_status: string;
  active_on_discord_web: boolean;
  active_on_discord_desktop: boolean;
  active_on_discord_mobile: boolean;
} & (
  | {
      listening_to_spotify: true;
      spotify: Spotify;
    }
  | {
      listening_to_spotify: false;
      spotify: null;
    }
);

type LanyardResponse = {
  data: LanyardData;
  success: boolean;
};

export const LanyardWebSocketOpcode = {
  0: "EVENT",
  1: "HELLO",
  2: "INITIALIZE",
  3: "HEARTBEAT",
} as const;

type LanyardWebSocketOpcodeValues = keyof typeof LanyardWebSocketOpcode;
export type LanyardWebSocketEvent = "INIT_STATE" | "PRESENCE_UPDATE";

export type LanyardWebSocketMessage = {
  op: LanyardWebSocketOpcodeValues;
  t: LanyardWebSocketEvent;
  d: LanyardData;
  seq: number;
};

// My Discord User ID
export const DISCORD_ID = "380134323963297794";

export async function getDiscordStatus(): Promise<LanyardData> {
  const res = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
  const lanyardRes = (await res.json()) as LanyardResponse;
  return lanyardRes.data;
}
