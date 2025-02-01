import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
  const scriptData = await fetch("https://assets.onedollarstats.com/stonks.js", {
    headers: request.headers,
  });
  const script = await scriptData.text();
  const { status, headers } = scriptData;

  return new Response(script, {
    status,
    headers,
  });
};

export const POST: APIRoute = async ({ request }) => {
  const body = await request.text();

  const response = await fetch("https://collector.onedollarstats.com/events", {
    body: body,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...request.headers,
    },
  });

  const responseBody = await response.text();
  const { status, headers } = response;

  return new Response(responseBody, {
    status,
    headers,
  });
};
