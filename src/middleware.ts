import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  console.log('req.nextUrl==>', req.nextUrl.pathname);
  // Check if the request path starts with `/documentation`
  if (req.nextUrl.pathname.startsWith('/docs')) {
    // Redirect to /documentation/pre-ethereum/web2
    return NextResponse.redirect(
      new URL('/docs/pre-ethereum/web2', req.url)
    );
  }

  // Return the response unchanged if the condition is not met
  return NextResponse.next();
}

// Optionally, specify the routes to match
export const config = {
  matcher: ['/docs', '/docs/getting-started'], // Matches any URL starting with /documentation
};
