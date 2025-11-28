import type { NavItem } from '@kitchen-cpq/ui-kit';

export const mainNavItems: NavItem[] = [
  { label: 'Dashboard', href: '/cpq/dashboard', roles: ['dealer', 'admin'] },
  { label: 'Quotes', href: '/cpq/quotes', roles: ['dealer', 'admin'] },
  { label: 'Configure', href: '/cpq/configure/demo-project', roles: ['dealer'] },
  { label: 'Catalog', href: '/catalog', roles: ['catalog_engineer', 'admin'] },
  { label: 'Manufacturing', href: '/manufacturing', roles: ['manufacturing_engineer', 'admin'] }
];
