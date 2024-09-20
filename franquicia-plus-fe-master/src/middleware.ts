import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import getBrandDetails from "./app/utils/getBrandDetails";

export async function middleware(request: NextRequest) {
  // Your middleware logic here
  // For example, you can log the request path

  const links = [
    "blog",
    "certificado",
    "certificado-de-franquicias",
    "consultores-de-franquicias",
    "contactanos",
    "franquicias-en-ecuador",
    "politica-de-privacidad",
    "somos-franquicia-plus-consultora",
  ];


  // aqui tienes q hacer la llamada a la api y ver si existe o no
  const pathChunks = request.nextUrl.pathname.split("/");
  const data = { extra: "dfgsdgds" };
  if (
    pathChunks.length === 2 &&
    pathChunks[1] !== "_next" &&
    !pathChunks[1].includes(".") &&
    !links.includes(pathChunks[1])
  ) {
    const brand = await getBrandDetails(pathChunks[1]);
    if (!brand) {
      return NextResponse.next({ status: 404 });
    }
  }

  if (pathChunks[1] === 'sitemap.xl') {
    return
  }

  if (pathChunks.length === 3 && pathChunks[1] === "blogs") {
    const blogUrl = pathChunks[2];
    try {
      require(`@/static/Content/BlogPost/${blogUrl}.json`);
    } catch (e: any) {
      return NextResponse.next({ status: 404 });
    }
  }

  if (pathChunks.length === 3 && pathChunks[1] !== 'blogs') {
    return NextResponse.next({ status: 404 });
  }

  // Always call NextResponse.next() to continue to the next middleware or route handler
  (request as unknown as { metadata: Record<string, unknown> }).metadata = {
    data,
  };
  return NextResponse.next();
}