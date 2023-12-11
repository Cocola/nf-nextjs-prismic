import { NextRequest } from "next/server";
import { createLocaleRedirect } from "@prismicio/next";
import { createClient } from "@/prismicio";

export async function middleware(request: NextRequest) {
  const client = createClient();
  const redirect = await createLocaleRedirect({ client, request, omitDefaultLocale: true,  });

  if (redirect) {
    return redirect;
  }
}

export const config = {
  // Do not localize these paths
  matcher: ["/((?!_next|api|slice-simulator|favicon.ico).*)"],
};