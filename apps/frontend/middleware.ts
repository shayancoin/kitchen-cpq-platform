import { type NextRequest, NextResponse } from 'next/server';
import { rootDomain } from './src/lib/utils';

function extractSubdomain(request: NextRequest): string | null {
  const SUBDOMAIN_REGEX = /^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/i;

  const url = request.url;
  const host = request.headers.get('host') || '';
  const hostname = host.split(':')[0];

  if (url.includes('localhost') || url.includes('127.0.0.1')) {
    const fullUrlMatch = url.match(/https?:\/\/([^.]+)\.localhost/);
    if (fullUrlMatch && fullUrlMatch[1]) {
      const subdomain = fullUrlMatch[1];
      return SUBDOMAIN_REGEX.test(subdomain) ? subdomain : null;
    }

    if (hostname.includes('.localhost')) {
      const subdomain = hostname.split('.')[0];
      return SUBDOMAIN_REGEX.test(subdomain) ? subdomain : null;
    }

    return null;
  }

  const rootDomainFormatted = rootDomain.split(':')[0];

  if (hostname.includes('---') && hostname.endsWith('.vercel.app')) {
    const parts = hostname.split('---');
    const subdomain =
      parts.length > 0 && parts[0].length > 0 ? parts[0] : null;
    return subdomain && SUBDOMAIN_REGEX.test(subdomain) ? subdomain : null;
  }

  const isSubdomain =
    hostname !== rootDomainFormatted &&
    hostname !== `www.${rootDomainFormatted}` &&
    hostname.endsWith(`.${rootDomainFormatted}`);

  const subdomain = isSubdomain
    ? hostname.replace(`.${rootDomainFormatted}`, '')
    : null;

  return subdomain && SUBDOMAIN_REGEX.test(subdomain) ? subdomain : null;
}

export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const { pathname } = request.nextUrl;
  const subdomain = extractSubdomain(request);

  if (!subdomain) {
    return NextResponse.next();
  }

  if (pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/', url));
  }

  if (pathname === '/') {
    return NextResponse.rewrite(new URL(`/s/${subdomain}`, url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match non-static, non-asset routes without file extensions
    '/((?!(api|_next|static|images|fonts|assets)/)(?!favicon\\.ico$)(?!robots\\.txt$)(?!.*\\.[\\w]+).*)'
  ]
};
