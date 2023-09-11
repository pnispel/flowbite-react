import type { Metadata, NextPage } from 'next';
import MegaMenuPageContent from '.';

export const metadata: Metadata = {
  description:
    'Use the mega menu component as a full-width dropdown inside the navbar to show a list of menu items based on multiple sizes, variants, and styles',
  title: 'React Mega Menu - Flowbite',
};

const MegaMenuPage: NextPage = () => {
  return <MegaMenuPageContent />;
};

export default MegaMenuPage;
