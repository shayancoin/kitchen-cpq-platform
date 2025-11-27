import type { ReactNode } from 'react';
import BaseLayout from '../../cpq/layout';

export default function AdminCpqLayout({ children }: { children: ReactNode }) {
  return <BaseLayout>{children}</BaseLayout>;
}
