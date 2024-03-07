'use client';

import { Typography } from '@/app/components/ui/typography';
import { type FC } from 'react';

const IndexPage: FC = () => {
  return (
    <div className="flex-col space-y-4">
      <Typography variant="h1">Public page</Typography>
    </div>
  );
};

export default IndexPage;
