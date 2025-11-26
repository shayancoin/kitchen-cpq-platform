export const protocol: 'https' | 'http' =
  process.env.NODE_ENV === 'production' ? 'https' : 'http';

const rawRootDomain = (process.env.NEXT_PUBLIC_ROOT_DOMAIN || 'localhost:3000').trim();
const rootDomainPattern = /^[a-z0-9.-]+(:[0-9]+)?$/i;

if (!rootDomainPattern.test(rawRootDomain)) {
  throw new Error(
    `Invalid NEXT_PUBLIC_ROOT_DOMAIN "${rawRootDomain}". Expected hostname like "example.com" or "example.com:3000".`
  );
}

export const rootDomain: string = rawRootDomain;
