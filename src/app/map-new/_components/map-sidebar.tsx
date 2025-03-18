// import { MapFilters } from "./map-filters"
// import { ConstituencyDetails } from "./constituency-details"
// import type { Party, Constituency, Candidate } from "@/types/election"

const MapSidebar = () => {
  // Find the selected constituency details
  // const selectedConstituencyDetails = constituencies.find((c) => c.id === selectedConstituency)

  return (
    <div className="w-[300px] border-r bg-background hidden md:block p-4 h-full">
      sidebar
      {/* <MapFilters
        parties={parties}
        constituencies={constituencies}
        selectedParty={selectedParty}
        selectedConstituency={selectedConstituency}
        onPartyChange={onPartyChange}
        onConstituencyChange={onConstituencyChange}
      />

      {selectedConstituency && selectedConstituencyDetails && (
        <ConstituencyDetails
          name={selectedConstituencyDetails.name}
          voters={selectedConstituencyDetails.voters}
          candidates={candidates}
        />
      )} */}
    </div>
  );
};

export default MapSidebar;
