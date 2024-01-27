import { readable, type Readable } from "svelte/store";
import type { __String } from "typescript";
import type { LanyardData, LanyardWebSocketMessage } from "./lanyard";

const API_URL = "https://api.lanyard.rest/v1";
const WS_URL = "wss://api.lanyard.rest/socket";
const WS_HEARTBEAT = 30e3;

/** Based on https://github.com/malloryhayr/svelte-lanyard/
 *  Updated with new types, slimmed down
 */
export function useLanyard(
  id: string,
  initialData: LanyardData | undefined
): Readable<LanyardData> {
  if (!id) throw new Error("A Discord user ID must be specified");

  if (typeof window === "undefined") return readable<LanyardData>(initialData);

  const lanyardData = readable<LanyardData>(initialData, (set) => {
    if (!("WebSocket" in window || "MozWebSocket" in window))
      throw new Error("svelte-lanyard only works clientside");

    const socket = new WebSocket(WS_URL);
    let interval: ReturnType<typeof setInterval>;

    socket.addEventListener("open", () => {
      socket.send(
        JSON.stringify({
          op: 2,
          d: {
            subscribe_to_id: id,
          },
        })
      );

      interval = setInterval(() => {
        socket.send(JSON.stringify({ op: 3 }));
      }, WS_HEARTBEAT);
    });

    socket.addEventListener("message", ({ data }: { data: string }) => {
      const { op, seq, t, d }: LanyardWebSocketMessage = JSON.parse(data.toString());

      if (t === "INIT_STATE" || t === "PRESENCE_UPDATE") set(d);
    });

    return function stop() {
      socket.close();
      clearInterval(interval);
    };
  });

  return lanyardData;
}
