import { Badge } from '@/app/_components/ui/badge';

interface ProfileTagsProps {
  profileIds: string[];
  getCandidateName: (profileId: string) => string;
}

const ProfileTags = ({ profileIds, getCandidateName }: ProfileTagsProps) => {
  if (!profileIds || profileIds.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-1">
      {profileIds.map((profileId) => (
        <Badge
          key={profileId}
          variant="secondary"
          className="bg-primary/10 text-primary hover:bg-primary/15 hover:text-primary border-transparent"
        >
          {getCandidateName(profileId) || profileId}
        </Badge>
      ))}
    </div>
  );
};

export default ProfileTags;
