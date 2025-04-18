import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const ADMIN_USER = process.env.ADMIN_USER;
const ADMIN_PASS = process.env.ADMIN_PASS;

export function middleware(request: NextRequest) {
  // Only protect /candidates/admin (and subroutes if needed)
  if (request.nextUrl.pathname.startsWith('/candidates/admin')) {
    const auth = request.headers.get('authorization');
    if (!auth || !auth.startsWith('Basic ')) {
      return new NextResponse('Authentication required', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic realm="Admin Area"' },
      });
    }
    // Decode base64
    const base64Credentials = auth.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString();
    const [user, pass] = credentials.split(':');
    console.log('credentials: ', credentials);
    if (user !== ADMIN_USER || pass !== ADMIN_PASS) {
      return new NextResponse('Invalid credentials', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic realm="Admin Area"' },
      });
    }
  }
  // Allow all other requests
  return NextResponse.next();
}

export const config = {
  matcher: ['/candidates/admin/:path*'],
};
