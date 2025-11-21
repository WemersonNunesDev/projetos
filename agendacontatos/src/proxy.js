import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {},
  {
    pages: {
      signIn: "/login",
    },
  }
);

// Rotas protegidas
export const config = {
  matcher: [
    "/((?!login|cadastro|api/auth|_next|favicon.ico).*)",
  ],
};

