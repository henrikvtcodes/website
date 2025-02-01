import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
  return Response.json({
    message: `Hello, ${new URL(request.url).searchParams.get("name") ?? "World"}!`,
  });
};

export const POST: APIRoute = async ({ request }) => {
  const body = await request.text();

  return Response.json(
    {
      message: body,
    },
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
