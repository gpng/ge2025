'use client';

// this file creates a error boundary around the content, but does not include the layout or root components
// to catch errors within the layout or root components, create a `src/(main)/global-error.tsx` file.
// refer to https://nextjs.org/docs/app/building-your-application/routing/error-handling#handling-errors-in-layouts

import { Button } from '@/app/components/ui/button';
import { Typography } from '@/app/components/ui/typography';
import { useEffect } from 'react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error
    console.error(error);
  }, [error]);

  return (
    <div className="space-y-2">
      <Typography variant="h2">Something went wrong!</Typography>
      {/* reset attempts to re-render the content within this error boundary */}
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}
