import { ArrowLeft, Sparkles } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/app/_components/ui/button';

const ComingSoon = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5 relative overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            <span>Stay tuned!</span>
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Coming <span className="text-primary">Soon!</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              We're working hard to bring you the latest election information.
              Check back soon!
            </p>
          </div>
          <Button size="lg" className="rounded-full mt-8" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
