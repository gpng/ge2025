import { Button } from '@/app/_components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/app/_components/ui/card';
import {
  BookOpen,
  Building,
  ChevronRight,
  FileText,
  Scale,
  Video,
} from 'lucide-react';
import Link from 'next/link';

const resourceCategories = [
  {
    title: 'Election Basics',
    description:
      'Understand the fundamentals of how general elections work in Singapore',
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    href: '/resources/education#election-basics',
  },
  {
    title: 'Voter Guide',
    description:
      'Step-by-step guide on how to vote, from registration to casting your ballot',
    icon: <FileText className="h-6 w-6 text-primary" />,
    href: '/resources/education#voter-guide',
  },
  {
    title: 'Election Rules & Regulations',
    description:
      'Laws governing campaigning, prohibited activities, and vote counting',
    icon: <Scale className="h-6 w-6 text-primary" />,
    href: '/resources/education#election-rules',
  },
  {
    title: 'Role of Government Agencies',
    description:
      'Learn about the organizations that oversee and manage the elections',
    icon: <Building className="h-6 w-6 text-primary" />,
    href: '/resources/education#government-agencies',
  },
  {
    title: 'Multimedia Resources',
    description:
      'Videos, infographics, and interactive guides for visual learners',
    icon: <Video className="h-6 w-6 text-primary" />,
    href: '/resources/education#multimedia-resources',
  },
];

const ResourcesPage = () => {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Voter Resources
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Everything you need to know about Singapore's General Election 2025,
          from the basics to detailed guides
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resourceCategories.map((category, index) => (
          <Card
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            className="group hover:shadow-md transition-all border-2 border-primary/10 overflow-hidden"
          >
            <CardHeader className="pb-2 bg-primary/5">
              <CardTitle className="text-xl flex items-center gap-2">
                {category.icon}
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">{category.description}</p>
            </CardContent>
            <CardFooter className="pt-2 pb-4">
              <Button
                variant="ghost"
                className="w-full justify-between group-hover:text-primary"
                asChild
              >
                <Link href={category.href}>
                  Explore
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 bg-primary/5 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Need More Information?</h2>
        <p className="text-muted-foreground mb-6">
          Visit the official Elections Department Singapore website for
          comprehensive information about the electoral process.
        </p>
        <Button asChild>
          <a
            href="https://www.eld.gov.sg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit ELD Website
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ResourcesPage;
