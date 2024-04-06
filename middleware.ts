import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {  
  const cookie = request.cookies.get('hotelsystem.token');
  const token = cookie?.value;
 
  if (token && !request.nextUrl.pathname.startsWith('/system')) {
    return Response.redirect(new URL('/system/dashboard', request.url))
  }
 
  if (!token && !request.nextUrl.pathname.startsWith('/login')) {
    return Response.redirect(new URL('/login', request.url))
  }
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}