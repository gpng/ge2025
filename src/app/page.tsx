import {
  Calendar,
  ChevronRight,
  Coffee,
  FileText,
  Info,
  Map as MapIcon,
  MapPin,
  Sparkles,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/app/_components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/_components/ui/card';
import { Input } from '@/app/_components/ui/input';

const HomePage = () => {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              <span>It's election season!</span>
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Ready, Set, <span className="text-primary">Vote!</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Your friendly guide to Singapore's General Election 2025. No
                jargon, just the info you need!
              </p>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-background rounded-full px-4 py-2 shadow-sm">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="font-medium">
                Mark your calendar: July 10, 2025
              </span>
            </div>
            <div className="w-full max-w-sm space-y-2 pt-4">
              <Button className="w-full rounded-full text-md h-12" asChild>
                <Link href="#find-polling-station">
                  <span>Where do I vote?</span>
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full py-12 md:py-24 lg:py-32"
        id="find-polling-station"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <MapPin className="h-4 w-4" />
                <span>Find Your Spot</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Where's Your Polling Station?
              </h2>
              <p className="text-muted-foreground text-lg">
                Pop in your NRIC and we'll tell you exactly where to go on
                voting day. No more getting lost!
              </p>
              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <div className="flex-1">
                  <Input
                    type="text"
                    placeholder="Your NRIC (e.g., S1234567A)"
                    className="rounded-full h-12 px-4"
                  />
                </div>
                <Button type="submit" className="rounded-full h-12">
                  Find My Station
                </Button>
              </div>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Info className="h-4 w-4" />
                Don't worry, we don't store your NRIC. Privacy first!
              </p>
            </div>
            <Card className="overflow-hidden border-2 border-primary/20">
              <CardHeader className="bg-primary/5 pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Coffee className="h-5 w-5 text-primary" />
                  The Essentials
                </CardTitle>
                <CardDescription>
                  Quick facts to know before you go
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Polling Hours</h3>
                    <p className="text-muted-foreground">
                      8:00 AM to 8:00 PM on July 10, 2025
                    </p>
                    <p className="text-sm text-primary">
                      Pro tip: Mid-morning usually has shorter queues!
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">What to Bring</h3>
                    <p className="text-muted-foreground">
                      Just your NRIC or passport. That's it!
                    </p>
                    <p className="text-sm text-primary">
                      Leave your phone in your pocket at the booth.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Info className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Overseas?</h3>
                    <p className="text-muted-foreground">
                      Register by June 10, 2025 to vote from abroad
                    </p>
                    <p className="text-sm text-primary">
                      Available in 10 cities worldwide!
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-primary/5 flex justify-center">
                <Button variant="link" className="text-primary">
                  More voting tips →
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5 relative overflow-hidden">
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        <div className="container px-4 md:px-6 relative">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-1.5 text-sm font-medium">
                <MapIcon className="h-4 w-4 text-primary" />
                <span>Battle Map</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Explore the Election Battlegrounds
              </h2>
              <p className="text-muted-foreground text-lg">
                Curious about who's running in your area? Our interactive map
                shows you all the hot contests across Singapore. Click around
                and explore!
              </p>
              <Button size="lg" className="rounded-full" asChild>
                <Link href="/map">
                  <MapIcon className="mr-2 h-4 w-4" />
                  Explore the Map
                </Link>
              </Button>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl border-2 border-primary/20 bg-background shadow-xl">
              <Link href="/map" className="block w-full h-full group">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Singapore Electoral Map Preview"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-start p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold">
                      Interactive Electoral Map
                    </h3>
                    <p className="text-white/80">
                      Discover who's contesting in your area
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  New!
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              <span>Quick Links</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Everything You Need
              </h2>
              <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
                From party manifestos to candidate profiles, we've got all the
                election info in bite-sized chunks.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="group hover:shadow-md transition-all border-2 border-primary/10 overflow-hidden">
              <CardHeader className="pb-2 bg-primary/5">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Political Parties
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground">
                  Get to know who's who in Singapore politics and what they
                  stand for
                </p>
              </CardContent>
              <CardFooter className="pt-2 pb-4">
                <Button
                  variant="ghost"
                  className="w-full justify-between group-hover:text-primary"
                  asChild
                >
                  <Link href="/parties">
                    Meet the Parties
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="group hover:shadow-md transition-all border-2 border-primary/10 overflow-hidden">
              <CardHeader className="pb-2 bg-primary/5">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Candidates
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground">
                  Check out who's running in your area and their backgrounds
                </p>
              </CardContent>
              <CardFooter className="pt-2 pb-4">
                <Button
                  variant="ghost"
                  className="w-full justify-between group-hover:text-primary"
                  asChild
                >
                  <Link href="/candidates">
                    Meet the Candidates
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="group hover:shadow-md transition-all border-2 border-primary/10 overflow-hidden">
              <CardHeader className="pb-2 bg-primary/5">
                <CardTitle className="text-xl flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Voting 101
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground">
                  First-time voter? Here's everything you need to know about the
                  process
                </p>
              </CardContent>
              <CardFooter className="pt-2 pb-4">
                <Button
                  variant="ghost"
                  className="w-full justify-between group-hover:text-primary"
                  asChild
                >
                  <Link href="/resources/education">
                    Voting Guide
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="group hover:shadow-md transition-all border-2 border-primary/10 overflow-hidden">
              <CardHeader className="pb-2 bg-primary/5">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Key Dates
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground">
                  Don't miss important election deadlines and events
                </p>
              </CardContent>
              <CardFooter className="pt-2 pb-4">
                <Button
                  variant="ghost"
                  className="w-full justify-between group-hover:text-primary"
                  asChild
                >
                  <Link href="/timeline">
                    Election Timeline
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="space-y-3 max-w-[600px]">
              <h2 className="text-2xl font-bold">Stay in the loop!</h2>
              <p className="text-muted-foreground">
                Get election updates, reminders, and fun facts delivered
                straight to your inbox.
              </p>
              <div className="flex w-full max-w-sm items-center space-x-2 mx-auto pt-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="rounded-full"
                />
                <Button type="submit" className="rounded-full">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                No spam, just the good stuff. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
