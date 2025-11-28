import { AppShell, Card, SectionHeader } from '../src';
import type { NavItem } from '../src/components/layout/AppShell';

const navItems: NavItem[] = [
  { label: 'Dashboard', href: '/cpq/dashboard', roles: ['dealer'] },
  { label: 'Quotes', href: '/cpq/quotes', roles: ['dealer'] }
];

export const LayoutShellStory = () => (
  <AppShell
    navItems={navItems}
    tenantName="Story Tenant"
    user={{ name: 'Story User', roles: ['dealer'], email: 'story@example.com' }}
  >
    <SectionHeader label="Story" title="AppShell" description="Preview of the shared shell" />
    <Card title="Content">Right rail content area</Card>
  </AppShell>
);
