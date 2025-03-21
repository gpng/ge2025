import { Button } from '@/app/_components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/_components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/app/_components/ui/tabs';
import { AlertTriangle, ArrowUp, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function EducationPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Voter Education
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A comprehensive guide to understanding Singapore's electoral process
        </p>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-12 flex items-start">
        <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
        <div>
          <p className="font-medium text-amber-800">Disclaimer</p>
          <p className="text-amber-700">
            This page is not an official source of information on Singapore's
            electoral process. For authoritative information, please refer to
            the Elections Department Singapore (ELD). Visit the{' '}
            <a
              href="https://www.eld.gov.sg"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-medium"
            >
              ELD website
            </a>{' '}
            or contact them directly for the most accurate and up-to-date
            guidance.
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Quick Navigation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="#election-basics"
              className="flex items-center p-3 rounded-md hover:bg-primary/5 transition-colors"
            >
              <span className="text-primary font-medium">1.</span>
              <span className="ml-2">Election Basics</span>
            </Link>
            <Link
              href="#voter-guide"
              className="flex items-center p-3 rounded-md hover:bg-primary/5 transition-colors"
            >
              <span className="text-primary font-medium">2.</span>
              <span className="ml-2">Voter Guide</span>
            </Link>
            <Link
              href="#election-rules"
              className="flex items-center p-3 rounded-md hover:bg-primary/5 transition-colors"
            >
              <span className="text-primary font-medium">3.</span>
              <span className="ml-2">Election Rules & Regulations</span>
            </Link>
            <Link
              href="#government-agencies"
              className="flex items-center p-3 rounded-md hover:bg-primary/5 transition-colors"
            >
              <span className="text-primary font-medium">4.</span>
              <span className="ml-2">Role of Government Agencies</span>
            </Link>
            {/* <Link
              href="#multimedia-resources"
              className="flex items-center p-3 rounded-md hover:bg-primary/5 transition-colors"
            >
              <span className="text-primary font-medium">5.</span>
              <span className="ml-2">Multimedia Resources</span>
            </Link> */}
          </div>
        </CardContent>
      </Card>

      {/* Section 1: Election Basics */}
      <section id="election-basics" className="scroll-mt-20 mb-16">
        <div className="flex items-center mb-6">
          <h2 className="text-3xl font-bold">1. Election Basics</h2>
          <Link href="#" className="ml-auto">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
            >
              <ArrowUp className="h-4 w-4" />
              Top
            </Button>
          </Link>
        </div>
        <p className="text-lg text-muted-foreground mb-8">
          Help users understand the fundamentals of how general elections work
          in Singapore.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              1.1 Introduction to General Elections
            </h3>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>What are General Elections?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A General Election in Singapore is held to elect Members of
                  Parliament (MPs) who will form the next government. Elections
                  must be held at least once every 5 years, though they can be
                  called earlier.
                </p>
                <p className="mb-4">
                  The political party that wins the majority of seats in
                  Parliament will form the Government, and its leader typically
                  becomes the Prime Minister.
                </p>
                <div className="flex items-center mt-4 text-sm">
                  <span className="text-muted-foreground">Resource:</span>
                  <a
                    href="https://www.eld.gov.sg/elections_parliamentary.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-primary flex items-center hover:underline"
                  >
                    Elections Department Singapore – Parliamentary Elections
                    Overview
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Dates & Milestones</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-primary/10 text-primary font-medium rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                      1
                    </div>
                    <div>
                      <span className="font-medium">
                        Dissolution of Parliament
                      </span>
                      <p className="text-muted-foreground">
                        The President dissolves Parliament on the Prime
                        Minister's advice.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 text-primary font-medium rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                      2
                    </div>
                    <div>
                      <span className="font-medium">Writ of Election</span>
                      <p className="text-muted-foreground">
                        The President issues a Writ specifying the date of the
                        election.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 text-primary font-medium rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                      3
                    </div>
                    <div>
                      <span className="font-medium">Nomination Day</span>
                      <p className="text-muted-foreground">
                        Candidates submit their nomination papers. Campaign
                        period begins after nominations close.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 text-primary font-medium rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                      4
                    </div>
                    <div>
                      <span className="font-medium">Campaign Period</span>
                      <p className="text-muted-foreground">
                        Typically 9 days for candidates to campaign and rally
                        support.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 text-primary font-medium rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                      5
                    </div>
                    <div>
                      <span className="font-medium">Cooling-off Day</span>
                      <p className="text-muted-foreground">
                        24 hours before Polling Day where no campaigning is
                        allowed.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 text-primary font-medium rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                      6
                    </div>
                    <div>
                      <span className="font-medium">Polling Day</span>
                      <p className="text-muted-foreground">
                        Voters cast their ballots at designated polling
                        stations.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="flex items-center mt-6 text-sm">
                  <span className="text-muted-foreground">Resource:</span>
                  <a
                    href="https://www.eld.gov.sg/candidate_parliamentary_counting.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-primary flex items-center hover:underline"
                  >
                    ELD – Counting Process & Results
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              1.2 Who Can Vote? (Voter Eligibility)
            </h3>

            <Card>
              <CardHeader>
                <CardTitle>Eligibility Criteria</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  In Singapore, voting is compulsory for all eligible citizens.
                  You are eligible to vote if you:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Are a Singapore citizen</li>
                  <li>
                    Are at least 21 years old on the date of the Writ of
                    Election
                  </li>
                  <li>Have a Singapore residential address</li>
                  <li>
                    Are not disqualified from being an elector under any law
                  </li>
                </ul>
                <p className="mb-4">
                  Eligible voters are automatically registered in the Registers
                  of Electors, which are revised before each election.
                </p>
                <div className="flex flex-col space-y-2 mt-4 text-sm">
                  <div className="flex items-center">
                    <span className="text-muted-foreground">Resources:</span>
                    <a
                      href="https://www.eld.gov.sg/voters.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-primary flex items-center hover:underline"
                    >
                      ELD – Voters & Voting
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="text-muted-foreground ml-[72px]" />
                    <a
                      href="https://www.life.gov.sg/guides/voting-election"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-primary flex items-center hover:underline"
                    >
                      LifeSG – Voting in an Election
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 2: Voter Guide */}
      <section id="voter-guide" className="scroll-mt-20 mb-16">
        <div className="flex items-center mb-6">
          <h2 className="text-3xl font-bold">2. Voter Guide</h2>
          <Link href="#" className="ml-auto">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
            >
              <ArrowUp className="h-4 w-4" />
              Top
            </Button>
          </Link>
        </div>
        <p className="text-lg text-muted-foreground mb-8">
          Walk through the practical steps of voting – from checking
          registration to casting a valid ballot.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              2.1 Checking Your Registration
            </h3>

            <Card>
              <CardHeader>
                <CardTitle>Voter Services ePortal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Before an election, you should check if you are registered as
                  an elector. You can do this easily online through the ELD's
                  eServices portal.
                </p>
                <div className="bg-primary/5 p-4 rounded-lg mb-4">
                  <h4 className="font-medium mb-2">
                    How to check your voter status:
                  </h4>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Visit the ELD eServices portal</li>
                    <li>Log in with your Singpass</li>
                    <li>Check your registration status and polling district</li>
                  </ol>
                </div>
                <div className="flex items-center mt-4 text-sm">
                  <span className="text-muted-foreground">Resource:</span>
                  <a
                    href="https://www.eld.gov.sg/online.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-primary flex items-center hover:underline"
                  >
                    ELD – eServices for Voters
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              2.2 Where & How to Vote
            </h3>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Finding Your Polling Station</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Your polling station is assigned based on your registered
                  address. There are several ways to find your designated
                  polling station:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>
                    Check your poll card (which will be mailed to you before
                    Polling Day)
                  </li>
                  <li>
                    Use the ELD's Polling Station Locator (activated closer to
                    Polling Day)
                  </li>
                  <li>Call the ELD hotline</li>
                </ul>
                <div className="flex items-center mt-4 text-sm">
                  <span className="text-muted-foreground">Resource:</span>
                  <a
                    href="https://www.eld.gov.sg/voters_polling_stations.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-primary flex items-center hover:underline"
                  >
                    ELD – Polling Station Info
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Step-by-Step Voting Procedure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary/10 text-primary font-medium rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-0.5">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Bring Your ID</h4>
                      <p className="text-muted-foreground">
                        Bring your NRIC or passport, along with your poll card
                        if you have it.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 text-primary font-medium rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-0.5">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Queue and Verification</h4>
                      <p className="text-muted-foreground">
                        Join the queue at your polling station. Election
                        officials will verify your identity.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 text-primary font-medium rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-0.5">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Receive Your Ballot Paper</h4>
                      <p className="text-muted-foreground">
                        You'll be given a ballot paper with the names of
                        candidates/parties contesting in your constituency.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 text-primary font-medium rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-0.5">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium">Mark Your Ballot</h4>
                      <p className="text-muted-foreground">
                        Proceed to a voting booth and mark an 'X' in the box
                        next to your chosen candidate/party.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 text-primary font-medium rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-0.5">
                      5
                    </div>
                    <div>
                      <h4 className="font-medium">Cast Your Vote</h4>
                      <p className="text-muted-foreground">
                        Fold your ballot paper and drop it into the ballot box.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center mt-6 text-sm">
                  <span className="text-muted-foreground">Resource:</span>
                  <a
                    href="https://www.eld.gov.sg/voters_how.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-primary flex items-center hover:underline"
                  >
                    ELD – How to Cast Your Vote
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              2.3 Polling Day Do's & Don'ts
            </h3>

            <Tabs defaultValue="dos" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="dos">Do's</TabsTrigger>
                <TabsTrigger value="donts">Don'ts</TabsTrigger>
              </TabsList>
              <TabsContent value="dos" className="p-4 border rounded-md mt-2">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Double-check your particulars on your poll card or ePoll
                    card
                  </li>
                  <li>
                    Go in person on Polling Day during voting hours (8am to 8pm)
                  </li>
                  <li>
                    Go to the polling station stated in your poll card or ePoll
                    card
                  </li>
                  <li>
                    Bring your poll card or ePoll card & acceptable documents of
                    identity
                  </li>
                  <li>
                    Mark your choice clearly with an 'X' on the ballot paper
                  </li>
                  <li>
                    Fold your ballot paper inwards and drop it into the ballot
                    box
                  </li>
                  <li>Respect the privacy of other voters</li>
                  <li>
                    Ask for assistance from Election Officials if unsure about
                    voting procedures
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="donts" className="p-4 border rounded-md mt-2">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Do not damage, alter or write anything on your poll card
                  </li>
                  <li>
                    Do not vote for any other person (impersonation is an
                    offence)
                  </li>
                  <li>
                    Do not go to any polling station except the one stated in
                    your poll card
                  </li>
                  <li>
                    Do not bring bags, pets (except guide dogs) or children to
                    the polling station
                  </li>
                  <li>
                    Do not bring any document, material, or wear attire/badge
                    showing political party's or candidate's symbol
                  </li>
                  <li>
                    Do not sign or write anything on the ballot paper that could
                    identify you
                  </li>
                  <li>
                    Do not bring the ballot paper out of the polling station
                  </li>
                  <li>Do not put anything else into the ballot box</li>
                  <li>
                    Do not try to find out how any other voter has voted or
                    intends to vote
                  </li>
                  <li>
                    Do not bring or use any camera, video or photographic
                    equipment
                  </li>
                  <li>Do not use your handphone in the polling station</li>
                </ul>
              </TabsContent>
            </Tabs>

            <div className="flex items-center mt-4 text-sm">
              <span className="text-muted-foreground">Resource:</span>
              <a
                href="https://www.eld.gov.sg/voters_dosdonts.html"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-primary flex items-center hover:underline"
              >
                ELD - Do's & Don'ts of Elections
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>

            {/* <Card className="mt-6">
              <CardHeader>
                <CardTitle>Valid vs. Spoilt Votes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-md p-4">
                    <h4 className="font-medium mb-2 text-green-600">
                      Valid Ballot
                    </h4>
                    <p className="mb-4">
                      A ballot paper is considered valid when:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>It has a clear 'X' in ONE box only</li>
                      <li>The voter's intention is clear</li>
                      <li>There are no identifying marks</li>
                    </ul>
                    <div className="mt-4 bg-muted p-4 rounded-md flex items-center justify-center">
                      <div className="border border-dashed border-muted-foreground p-4 w-40">
                        <div className="flex items-center mb-2">
                          <div className="w-4 h-4 border border-black mr-2" />
                          <span>Candidate A</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-4 h-4 border border-black mr-2 relative">
                            <span
                              className="absolute text-black font-bold text-lg leading-none"
                              style={{ top: '-4px', left: '0px' }}
                            >
                              X
                            </span>
                          </div>
                          <span>Candidate B</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-md p-4">
                    <h4 className="font-medium mb-2 text-red-600">
                      Spoilt Ballot
                    </h4>
                    <p className="mb-4">
                      A ballot paper is considered spoilt when:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>It has marks in more than one box</li>
                      <li>It has no marks at all</li>
                      <li>It has identifying marks or writing</li>
                      <li>The voter's intention is unclear</li>
                    </ul>
                    <div className="mt-4 bg-muted p-4 rounded-md flex items-center justify-center">
                      <div className="border border-dashed border-muted-foreground p-4 w-40">
                        <div className="flex items-center mb-2">
                          <div className="w-4 h-4 border border-black mr-2 relative">
                            <span
                              className="absolute text-black font-bold text-lg leading-none"
                              style={{ top: '-4px', left: '0px' }}
                            >
                              X
                            </span>
                          </div>
                          <span>Candidate A</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-4 h-4 border border-black mr-2 relative">
                            <span
                              className="absolute text-black font-bold text-lg leading-none"
                              style={{ top: '-4px', left: '0px' }}
                            >
                              X
                            </span>
                          </div>
                          <span>Candidate B</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center mt-6 text-sm">
                  <span className="text-muted-foreground">Resource:</span>
                  <a
                    href="https://sso.agc.gov.sg/Act/PEA1954#pr42-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-primary flex items-center hover:underline"
                  >
                    Parliamentary Elections Act – Valid Votes
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>

      {/* Section 3: Election Rules & Regulations */}
      <section id="election-rules" className="scroll-mt-20 mb-16">
        <div className="flex items-center mb-6">
          <h2 className="text-3xl font-bold">
            3. Election Rules & Regulations
          </h2>
          <Link href="#" className="ml-auto">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
            >
              <ArrowUp className="h-4 w-4" />
              Top
            </Button>
          </Link>
        </div>
        <p className="text-lg text-muted-foreground mb-8">
          Detail the laws governing campaigning, prohibited activities, and the
          vote counting process.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              3.1 Campaigning Rules
            </h3>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Campaign Period</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The campaign period begins after Nomination Day and ends at
                  the start of Cooling-off Day (the day before Polling Day).
                  During this period, candidates and their supporters can:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>
                    Hold rallies at designated sites (with a police permit)
                  </li>
                  <li>Distribute flyers and other campaign materials</li>
                  <li>Put up posters and banners in authorized locations</li>
                  <li>Conduct door-to-door visits</li>
                  <li>Use social media and online platforms for campaigning</li>
                </ul>
                <p className="mb-4">
                  All campaign activities must comply with the Parliamentary
                  Elections Act and the relevant regulations.
                </p>
                <div className="flex items-center mt-4 text-sm">
                  <span className="text-muted-foreground">Resource:</span>
                  <a
                    href="https://www.eld.gov.sg/pdf/GE2020/Candidate_Handbook_for_General_Election_2020.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-primary flex items-center hover:underline"
                  >
                    ELD – Candidate Handbook for General Election 2020
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cooling-off Day</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Cooling-off Day is the 24-hour period before Polling Day.
                  During this time:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>No campaigning or election advertising is allowed</li>
                  <li>
                    No new election advertising may be published or displayed
                  </li>
                  <li>Existing posters and banners may remain</li>
                  <li>No election rallies or gatherings may be held</li>
                  <li>
                    Media may report factually on the election but must not
                    publish new material that may influence voters
                  </li>
                </ul>
                <p className="mb-4">
                  The purpose of Cooling-off Day is to give voters time to
                  reflect on the issues raised during the campaign period before
                  casting their votes.
                </p>
                <div className="flex items-center mt-4 text-sm">
                  <span className="text-muted-foreground">Resource:</span>
                  <a
                    href="https://sso.agc.gov.sg/Act/PEA1954?ProvIds=P13-#pr61C-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-primary flex items-center hover:underline"
                  >
                    Parliamentary Elections Act – Section 61C Cooling-off Day
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              3.2 Election Offences
            </h3>

            <Card>
              <CardHeader>
                <CardTitle>Electoral Offences & Penalties</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-md">
                    <h4 className="font-medium mb-2">
                      Ballot Paper & Return Envelope Offences
                    </h4>
                    <div className="text-muted-foreground">
                      <div className="mb-2">It is illegal to:</div>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>
                          Forge, counterfeit, deface, or destroy any ballot
                          paper or return envelope
                        </li>
                        <li>
                          Supply, sell, or purchase ballot papers or return
                          envelopes without authority
                        </li>
                        <li>
                          Possess marked ballot papers or return envelopes
                          without authorization
                        </li>
                        <li>
                          Put anything other than authorized ballot papers into
                          ballot boxes
                        </li>
                        <li>
                          Take ballot papers out of polling stations or possess
                          them outside without authority
                        </li>
                        <li>
                          Open, unseal, or tamper with sealed return envelopes
                          without authority
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-4 border rounded-md">
                    <h4 className="font-medium mb-2">
                      Nomination & Equipment Offences
                    </h4>
                    <div className="text-muted-foreground">
                      <div className="mb-2">It is illegal to:</div>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Forge, deface, or destroy nomination papers</li>
                        <li>Submit forged nomination papers knowingly</li>
                        <li>
                          Interfere with ballot boxes, voting machines, or
                          electronic voting equipment
                        </li>
                        <li>Print unauthorized ballot papers</li>
                        <li>
                          Manufacture or use devices that can manipulate ballot
                          papers in ballot boxes
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-4 border rounded-md">
                    <h4 className="font-medium mb-2">Penalties</h4>
                    <div className="text-muted-foreground">
                      <div className="mb-2">Offenders face:</div>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Fine and imprisonment up to 5 years</li>
                        <li>7-year ban from voting or being elected</li>
                        <li>
                          Immediate vacation of elected position if convicted
                          while serving
                        </li>
                        <li>Attempted offences carry the same penalties</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex items-center mt-6 text-sm">
                  <span className="text-muted-foreground">Resource:</span>
                  <a
                    href="https://sso.agc.gov.sg/Act/PEA1954?ProvIds=P13-#pr55-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-primary flex items-center hover:underline"
                  >
                    Parliamentary Elections Act - Section 55 Offences
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              3.3 Counting of Votes & Results
            </h3>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Counting Process</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Counting of votes cast in Singapore begins immediately after
                  polls close at 8pm on Polling Day. The process may continue
                  into the early hours of the next day.
                </p>
                <div className="space-y-4 mb-4">
                  <div className="flex items-start">
                    <div className="bg-primary/10 text-primary font-medium rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-0.5">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Sample Count</h4>
                      <p className="text-muted-foreground">
                        The Returning Officer conducts a sample count to get an
                        early indication of possible election outcome.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 text-primary font-medium rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-0.5">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Counting Places</h4>
                      <p className="text-muted-foreground">
                        Votes are counted at designated counting places, with
                        3-7 places typically grouped in a counting centre.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 text-primary font-medium rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-0.5">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Overseas Votes</h4>
                      <p className="text-muted-foreground">
                        Overseas and postal votes are counted no earlier than 10
                        days after Polling Day.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Recount Conditions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A recount must be conducted if the difference between the
                  highest votes and any other candidate/group is 2% or less of
                  total valid votes cast.
                </p>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Important Notes:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Only one recount is allowed</li>
                    <li>All valid votes are recounted</li>
                    <li>
                      Overseas votes are only recounted if they could impact the
                      final outcome
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Results Announcement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Local Results</h4>
                    <p className="text-muted-foreground">
                      After counting is completed, the Returning Officer
                      announces the votes for each candidate/group at the
                      principal counting centre.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Overseas Impact</h4>
                    <p className="text-muted-foreground">
                      If overseas voters could affect the outcome (their number
                      equals or exceeds the vote difference), only local results
                      are announced first, with overseas counting date and venue
                      to follow.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Final Declaration</h4>
                    <p className="text-muted-foreground">
                      The Returning Officer declares the winning candidate/group
                      via mass media once all votes are counted and verified.
                    </p>
                  </div>
                </div>
                <div className="flex items-center mt-6 text-sm">
                  <span className="text-muted-foreground">Resource:</span>
                  <a
                    href="https://www.eld.gov.sg/candidate_parliamentary_counting.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-primary flex items-center hover:underline"
                  >
                    ELD – Counting Process & Results
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4: Role of Government Agencies */}
      <section id="government-agencies" className="scroll-mt-20 mb-16">
        <div className="flex items-center mb-6">
          <h2 className="text-3xl font-bold">4. Role of Government Agencies</h2>
          <Link href="#" className="ml-auto">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
            >
              <ArrowUp className="h-4 w-4" />
              Top
            </Button>
          </Link>
        </div>
        <p className="text-lg text-muted-foreground mb-8">
          Explain who oversees and manages the elections, and their
          responsibilities.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              4.1 Elections Department (ELD)
            </h3>

            <Card>
              <CardHeader>
                <CardTitle>Primary Organizer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The Elections Department (ELD) is a department under the Prime
                  Minister's Office responsible for planning and conducting
                  presidential and parliamentary elections in Singapore.
                </p>
                <p className="mb-4">Key responsibilities include:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Training of election officials</li>
                  <li>Maintaining and updating the Registers of Electors</li>
                  <li>
                    Planning for election manpower, premises, logistical and
                    other related requirements for the conduct of elections
                  </li>
                  <li>
                    Informing the public about the electoral system and voting
                    processes
                  </li>
                  <li>
                    Ensuring all electors have access to the electoral system
                    and voting processes
                  </li>
                  <li>
                    Administering the Political Donations Act and campaign
                    spending rules
                  </li>
                  <li>
                    Providing secretariat support to any appointed committee
                    responsible for recommending changes to electoral boundaries
                    and election committees such as the Presidential Elections
                    Committee and Community Committee
                  </li>
                </ul>
                <div className="flex items-center mt-4 text-sm">
                  <span className="text-muted-foreground">Resource:</span>
                  <a
                    href="https://www.eld.gov.sg/our_role.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-primary flex items-center hover:underline"
                  >
                    ELD – Our Role
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              4.2 Returning Officer & Election Officials
            </h3>

            <Card>
              <CardHeader>
                <CardTitle>Returning Officer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The Returning Officer is appointed by the Prime Minister to
                  oversee the conduct of elections. This role is typically held
                  by a senior civil servant.
                </p>
                <p className="mb-4">The Returning Officer's duties include:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Receiving nomination papers from candidates</li>
                  <li>
                    Declaring candidates as elected (in uncontested elections)
                  </li>
                  <li>Supervising the counting of votes</li>
                  <li>Announcing election results</li>
                  <li>Ensuring the election is conducted according to law</li>
                  <li>
                    Instructing the removal of online election advertisements
                    that violate regulations
                  </li>
                </ul>
                <p className="mb-4">
                  The Returning Officer is assisted by various election
                  officials, including Assistant Returning Officers, Presiding
                  Officers, and polling and counting agents.
                </p>
                <div className="flex items-center mt-4 text-sm">
                  <span className="text-muted-foreground">Resource:</span>
                  <a
                    href="https://www.eld.gov.sg/candidate_parliamentary_polling.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-primary flex items-center hover:underline"
                  >
                    ELD – Polling & Counting
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              4.3 Electoral Boundaries Review Committee (EBRC)
            </h3>

            <Card>
              <CardHeader>
                <CardTitle>Constituency Redrawing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The Electoral Boundaries Review Committee (EBRC) is appointed
                  by the Prime Minister before each general election to
                  determine the electoral boundaries for use at future
                  elections.
                </p>
                <p className="mb-4">
                  The EBRC's role is strictly technical and non-partisan. When
                  making recommendations, the committee takes into account:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Population shifts since the last boundary review</li>
                  <li>New housing developments</li>
                  <li>Changes in population density across different areas</li>
                </ul>
                <p className="mb-4">
                  Importantly, the EBRC does not examine past election results
                  or voter profiles when delineating the new boundaries.
                </p>
                <p className="mb-4">
                  The committee comprises senior civil servants who are experts
                  in these technical areas:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Secretary to Prime Minister (Chairperson)</li>
                  <li>
                    Chief Executive Officer, Housing & Development Board
                    (Member)
                  </li>
                  <li>Chief Executive, Singapore Land Authority (Member)</li>
                  <li>Chief Statistician, Department of Statistics (Member)</li>
                  <li>Head, Elections Department (Secretary)</li>
                </ul>
                <p className="mb-4">
                  After the EBRC submits its report, it is presented to
                  Parliament as a White Paper. The report includes details on
                  the number of electoral divisions, their boundaries, and which
                  are designated as Group Representation Constituencies (GRCs)
                  or Single Member Constituencies (SMCs).
                </p>
                <div className="flex items-center mt-4 text-sm">
                  <span className="text-muted-foreground">Resources:</span>
                  <a
                    href="https://www.gov.sg/explainers/what-is-the-role-and-composition-of-the-electoral-boundaries-review-committee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-primary flex items-center hover:underline"
                  >
                    Gov.sg Explainer – Role and Composition of EBRC
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
                <div className="flex items-center mt-2 text-sm">
                  <span className="text-muted-foreground ml-[72px]" />
                  <a
                    href="https://www.eld.gov.sg/ebrc.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-primary flex items-center hover:underline"
                  >
                    ELD – EBRC Reports
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 5: Multimedia Resources */}
      {/* <section id="multimedia-resources" className="scroll-mt-20 mb-16">
        <div className="flex items-center mb-6">
          <h2 className="text-3xl font-bold">5. Multimedia Resources</h2>
          <Link href="#" className="ml-auto">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
            >
              <ArrowUp className="h-4 w-4" />
              Top
            </Button>
          </Link>
        </div>
        <p className="text-lg text-muted-foreground mb-8">
          Curate videos, infographics, and interactive guides for visual
          learners.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              5.1 Educational Videos
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Elections Department Explainers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                    <p className="text-muted-foreground">
                      Video: How We Conduct a Fair Election
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Official videos from the Elections Department explaining the
                    electoral process, voting procedures, and measures to ensure
                    fair elections.
                  </p>
                  <div className="flex items-center text-sm">
                    <span className="text-muted-foreground">Resource:</span>
                    <a
                      href="https://www.youtube.com/@SingaporeElectionsDepartment"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-primary flex items-center hover:underline"
                    >
                      ELD Official YouTube Channel
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>
                    The Straits Times – Understanding Singapore's General
                    Election
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-4">
                    <p className="text-muted-foreground">Video: GE Explained</p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Non-partisan explanations of terms like GRC/SMC, sample
                    counts, and other aspects of Singapore's electoral system.
                  </p>
                  <div className="flex items-center text-sm">
                    <span className="text-muted-foreground">Resource:</span>
                    <a
                      href="https://www.straitstimes.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-primary flex items-center hover:underline"
                    >
                      ST Video (Archived)
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              5.2 Infographics & Step-by-Step Guides
            </h3>

            <Card>
              <CardHeader>
                <CardTitle>
                  CAPE (Community for Advocacy & Political Education)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="aspect-[4/3] bg-muted rounded-md flex items-center justify-center mb-4">
                      <p className="text-muted-foreground">
                        Infographic: GE Timeline
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Visual timeline of the General Election process from
                      dissolution of Parliament to the formation of government.
                    </p>
                  </div>
                  <div>
                    <div className="aspect-[4/3] bg-muted rounded-md flex items-center justify-center mb-4">
                      <p className="text-muted-foreground">
                        Infographic: Voting Guide for First-Timers
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Simplified step-by-step guide for new voters on what to
                      expect on Polling Day.
                    </p>
                  </div>
                </div>
                <div className="flex items-center mt-6 text-sm">
                  <span className="text-muted-foreground">Resource:</span>
                  <a
                    href="https://www.cape.sg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-primary flex items-center hover:underline"
                  >
                    CAPE's Official Site
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              5.3 Interactive FAQs
            </h3>

            <Card>
              <CardHeader>
                <CardTitle>LifeSG</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  LifeSG provides Q&A style tutorials on various aspects of the
                  electoral process, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>How to check if you're registered to vote</li>
                  <li>What to do if you can't vote on Polling Day</li>
                  <li>What happens if you don't vote</li>
                  <li>How to restore your name to the electoral register</li>
                </ul>
                <div className="flex items-center mt-4 text-sm">
                  <span className="text-muted-foreground">Resource:</span>
                  <a
                    href="https://www.life.gov.sg/guide/voting-in-an-election"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-primary flex items-center hover:underline"
                  >
                    LifeSG – Voting in an Election
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      <div className="mt-16 bg-primary/5 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Have Questions?</h2>
        <p className="text-muted-foreground mb-6">
          If you have specific questions about the electoral process, you can
          contact the Elections Department directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <a
              href="https://www.eld.gov.sg/contact.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact ELD
            </a>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/resources">Back to Resources</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
