import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Clone the request headers and set a new header `x-hello-from-middleware1`
  const requestHeaders = new Headers(request.headers)
  console.log('got here')
  requestHeaders.set('X-Api-Key', process.env.API_KEY)

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}
export const config = {
  matcher: '/api/:path*',
};
