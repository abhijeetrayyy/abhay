import { draftMode } from "next/headers";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const redirectUrl = searchParams.get("redirect") || "/";

  const draft = await draftMode();
  draft.enable();

  return new Response(null, {
    status: 307,
    headers: { Location: redirectUrl },
  });
}
