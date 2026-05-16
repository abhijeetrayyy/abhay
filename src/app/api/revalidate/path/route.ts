import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

type WebhookPayload = { path?: string };

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_REVALIDATE_SECRET || "",
      true
    );

    if (!isValidSignature) {
      return new Response("Invalid signature", { status: 401 });
    }

    if (!body?.path) {
      return new Response("Missing path", { status: 400 });
    }

    revalidatePath(body.path);
    return NextResponse.json({ revalidated: true, path: body.path });
  } catch (err) {
    return new Response((err as Error).message, { status: 500 });
  }
}
