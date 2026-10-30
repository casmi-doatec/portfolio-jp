import { NextResponse, type NextRequest } from "next/server";
import { AUTH_COOKIE, AUTH_TOKEN } from "@/lib/auth";

// Only the Projects section is gated (see components/projects.tsx).
// Already-logged-in users skip the login page.
export function middleware(request: NextRequest) {
  if (request.cookies.get(AUTH_COOKIE)?.value === AUTH_TOKEN) {
    return NextResponse.redirect(new URL("/#projects", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/login"],
};
