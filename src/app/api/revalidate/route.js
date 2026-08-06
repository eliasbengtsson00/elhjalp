import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export async function POST(req) {
  const { isValidSignature } = await parseBody(
    req,
    process.env.SANITY_REVALIDATE_SECRET
  );

  if (!isValidSignature) {
    return NextResponse.json(
      { success: false, message: "Invalid signature" },
      { status: 401 }
    );
  }

  revalidatePath("/", "layout");

  return NextResponse.json({
    success: true,
    revalidated: true,
    now: Date.now(),
  });
}
