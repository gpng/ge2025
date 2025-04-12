import ConstituencyDetails from '@/app/map/_components/sidebar/constituency-details';
import MapFilters from '@/app/map/_components/sidebar/map-filters';
import type { ElectoralDivision } from '@/models/electoral-division';

interface MapSidebarProps {
  onElectoralDivisionSelected: (electoralDivisionId: number) => void;
  selectedElectoralDivision?: ElectoralDivision;
}

const MapSidebar = ({
  onElectoralDivisionSelected,
  selectedElectoralDivision,
}: MapSidebarProps) => {
  return (
    <div className="w-[350px] border-r bg-background hidden md:flex p-4 h-full flex-col">
      <MapFilters onElectoralDivisionSelected={onElectoralDivisionSelected} />
      {selectedElectoralDivision && (
        <ConstituencyDetails electoralDivision={selectedElectoralDivision} />
      )}
    </div>
  );
};

export default MapSidebar;
