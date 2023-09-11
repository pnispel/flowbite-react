'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import MegaMenuDocs from './mega-menu.mdx';

const MegaMenuPage: FC = () => (
  <DocsContentLayout
    title="React Mega Menu - Flowbite"
    description="Use the mega menu component as a full-width dropdown inside the navbar to show a list of menu items based on multiple sizes, variants, and styles"
  >
    <MegaMenuDocs />
  </DocsContentLayout>
);

export default MegaMenuPage;
