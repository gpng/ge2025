import {
  BookOpenText,
  Calendar,
  ChevronRight,
  FileText,
  Info,
  Map as MapIcon,
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
                Your friendly guide to Singapore's General Election 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Election Timeline Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Calendar className="h-4 w-4" />
              <span>Important Dates</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                GE2025 Election Timeline
              </h2>
              <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
                Mark your calendar with these key election dates. From
                Nomination Day to Polling Day, here's what to expect.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-5">
            {/* April 15 */}
            <Card className="overflow-hidden border-2 border-primary/20">
              <CardHeader className="bg-primary/5 pb-2">
                <CardTitle className="text-lg font-bold">April 15</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <h3 className="font-medium text-lg mb-2">
                  Parliament Dissolved
                </h3>
                <p className="text-muted-foreground">
                  Parliament is dissolved and the Writ of Election is issued
                </p>
              </CardContent>
            </Card>

            {/* April 23 */}
            <Card className="overflow-hidden border-2 border-primary/20">
              <CardHeader className="bg-primary/5 pb-2">
                <CardTitle className="text-lg font-bold">April 23</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <h3 className="font-medium text-lg mb-2">Nomination Day</h3>
                <p className="text-muted-foreground">
                  Prospective candidates file nomination papers. Day 1 of
                  campaign period
                </p>
              </CardContent>
            </Card>

            {/* April 23 - May 1 */}
            <Card className="overflow-hidden border-2 border-primary/20">
              <CardHeader className="bg-primary/5 pb-2">
                <CardTitle className="text-lg font-bold">
                  April 23 - May 1
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <h3 className="font-medium text-lg mb-2">Campaign Period</h3>
                <p className="text-muted-foreground">
                  9 days of campaigning with rallies and walkabouts
                </p>
              </CardContent>
            </Card>

            {/* May 2 */}
            <Card className="overflow-hidden border-2 border-primary/20">
              <CardHeader className="bg-primary/5 pb-2">
                <CardTitle className="text-lg font-bold">May 2</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <h3 className="font-medium text-lg mb-2">Cooling-Off Day</h3>
                <p className="text-muted-foreground">
                  No campaigning allowed. A day for voters to reflect before
                  casting their votes
                </p>
              </CardContent>
            </Card>

            {/* May 3 */}
            <Card className="overflow-hidden border-2 border-primary/20 bg-primary/10">
              <CardHeader className="bg-primary/20 pb-2">
                <CardTitle className="text-lg font-bold">May 3</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <h3 className="font-medium text-lg mb-2">Polling Day</h3>
                <p className="text-muted-foreground">
                  Polls will be open from 8am to 8pm for voters to cast their
                  ballots
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Candidates & Crowdsourcing Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        <div className="container px-4 md:px-6 relative">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-1.5 text-sm font-medium">
                <Users className="h-4 w-4 text-primary" />
                <span>Candidate Hub</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Know Your Candidates
              </h2>
              <p className="text-muted-foreground text-lg">
                Access crowdsourced content of all candidates, parties, and
                constituencies in one place. Find out more about what they stand
                for.
              </p>
              <Button size="lg" className="rounded-full mt-2" asChild>
                <Link href="/candidates">
                  <Users className="mr-2 h-4 w-4" />
                  View Candidate Profiles
                </Link>
              </Button>
            </div>

            <div className="space-y-6 bg-background p-8 rounded-xl border-2 border-primary/20">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">
                  Contribute Your Knowledge
                </h3>
                <p className="text-muted-foreground">
                  Help build Singapore's most comprehensive election resource by
                  contributing information about candidates, parties, and
                  constituencies.
                </p>
              </div>

              <p className="text-muted-foreground">
                Whether it's basic biographical details, policy positions, or
                candidate statements - your contributions help voters make
                informed decisions.
              </p>

              <Button
                size="lg"
                className="w-full justify-center rounded-full"
                variant="default"
                asChild
              >
                <Link href="/candidates/submit">
                  <FileText className="mr-2 h-4 w-4" />
                  Submit Information
                </Link>
              </Button>

              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Info className="h-4 w-4" />
                Help us build the most comprehensive GE2025 candidate content
                database
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full py-12 md:py-24 lg:py-32"
        id="find-constituency"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <MapIcon className="h-4 w-4" />
                <span>Find Your Area</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Which Constituency Are You In?
              </h2>
              <p className="text-muted-foreground text-lg">
                Check your electoral division based on the 2025 Electoral
                Boundaries Review Committee Report. Just pop in your postal
                code!
              </p>
              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <Button size="lg" className="rounded-full h-12" asChild>
                  <Link
                    href="https://app.eservice.eld.gov.sg/voter/postalcodeenquiry.aspx"
                    target="_blank"
                  >
                    Check Your Constituency
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Info className="h-4 w-4" />
                Visit the official Elections Department website
              </p>
            </div>
            <Card className="overflow-hidden border-2 border-primary/20">
              <CardHeader className="bg-primary/5 pb-2">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Electoral Changes 2025
                </CardTitle>
                <CardDescription>
                  Latest updates from EBRC Report (March 11)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <MapIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">New Constituencies</h3>
                    <p className="text-muted-foreground">
                      18 Group Representation Constituencies (GRCs) and 15
                      Single Member Constituencies (SMCs)
                    </p>
                    <p className="text-sm text-primary">
                      Total of 97 elected MPs
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Major Changes</h3>
                    <p className="text-muted-foreground">
                      New GRCs include Punggol, Pasir Ris-Changi, and Jurong
                      East-Bukit Batok
                    </p>
                    <p className="text-sm text-primary">6 new SMCs created</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Info className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Voter Population</h3>
                    <p className="text-muted-foreground">
                      2.75 million voters expected to head to the polls
                    </p>
                    <p className="text-sm text-primary">
                      An increase of 101,791 from GE2020
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-primary/5 p-4">
                <Button variant="link" className="text-primary w-full" asChild>
                  <Link
                    href="https://www.eld.gov.sg/pdf/White_Paper_on_the_Report_of_the_Electoral_Boundaries_Review_Committee_2025.pdf"
                    target="_blank"
                  >
                    Read the full EBRC Report →
                  </Link>
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
                  src="/images/map-preview.png"
                  alt="Singapore Electoral Map Preview"
                  width={600}
                  height={400}
                  quality={100}
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
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section for Key Features/Links */}
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
                From electoral maps to party manifestos, we've got all the
                election info in bite-sized chunks.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Electoral Map Card */}
            <Card className="group hover:shadow-md transition-all border-2 border-primary/10 overflow-hidden">
              <CardHeader className="pb-2 bg-primary/5">
                <CardTitle className="text-xl flex items-center gap-2">
                  <MapIcon className="h-5 w-5 text-primary" />
                  Electoral Map
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground">
                  Explore Singapore's electoral boundaries and see which parties
                  are contesting where
                </p>
              </CardContent>
              <CardFooter className="pt-2 pb-4">
                <Button
                  variant="ghost"
                  className="w-full justify-between group-hover:text-primary"
                  asChild
                >
                  <Link href="/map">
                    View the Map
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Manifestos Card */}
            <Card className="group hover:shadow-md transition-all border-2 border-primary/10 overflow-hidden">
              <CardHeader className="pb-2 bg-primary/5">
                <CardTitle className="text-xl flex items-center gap-2">
                  <BookOpenText className="h-5 w-5 text-primary" />
                  Manifestos
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground">
                  Read party manifestos and ask our AI assistant any questions
                  about party policies
                </p>
              </CardContent>
              <CardFooter className="pt-2 pb-4">
                <Button
                  variant="ghost"
                  className="w-full justify-between group-hover:text-primary"
                  asChild
                >
                  <Link href="/manifestos">
                    Explore Manifestos
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Voting 101 Card */}
            <Card className="group hover:shadow-md transition-all border-2 border-primary/10 overflow-hidden">
              <CardHeader className="pb-2 bg-primary/5">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  Voting 101
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground">
                  From election basics to rules & regulations, learn everything
                  about Singapore's electoral process
                </p>
              </CardContent>
              <CardFooter className="pt-2 pb-4">
                <Button
                  variant="ghost"
                  className="w-full justify-between group-hover:text-primary"
                  asChild
                >
                  <Link href="/resources">
                    Explore Resources
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Candidate Content Card */}
            <Card className="group hover:shadow-md transition-all border-2 border-primary/10 overflow-hidden">
              <CardHeader className="pb-2 bg-primary/5">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Candidate Content
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground">
                  Explore crowdsourced profiles and information about candidates
                  running in all constituencies
                </p>
              </CardContent>
              <CardFooter className="pt-2 pb-4">
                <Button
                  variant="ghost"
                  className="w-full justify-between group-hover:text-primary"
                  asChild
                >
                  <Link href="/candidates">
                    View Candidates
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
