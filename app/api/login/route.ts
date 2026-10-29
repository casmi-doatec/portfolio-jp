import { NextResponse } from "next/server";
import { AUTH_COOKIE, AUTH_PASSWORD, AUTH_TOKEN, isValidEmail } from "@/lib/auth";

export async function POST(request: Request) {
  let email = "";
  let password = "";
  try {
    ({ email = "", password = "" } = await request.json());
  } catch {
    return NextResponse.json({ success: false, error: "Bad request" }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { success: false, error: "メールアドレスの形式が正しくありません。" },
      { status: 400 }
    );
  }
  if (password !== AUTH_PASSWORD) {
    return NextResponse.json(
      { success: false, error: "パスワードが正しくありません。" },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(AUTH_COOKIE, AUTH_TOKEN, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}
