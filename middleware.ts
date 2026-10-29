import { NextResponse, type NextRequest } from "next/server";
import { AUTH_COOKIE, AUTH_TOKEN } from "@/lib/auth";

export function middleware(request: NextRequest) {
  const isAuthed = request.cookies.get(AUTH_COOKIE)?.value === AUTH_TOKEN;
  const isLoginPage = request.nextUrl.pathname === "/login";

  if (!isAuthed && !isLoginPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (isAuthed && isLoginPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  // Everything except the login API, logout API and Next.js internals
  matcher: ["/((?!api/login|api/logout|_next/static|_next/image|favicon.ico).*)"],
};
