'use client';
import MapSidebar from '@/app/map-new/_components/map-sidebar';
import { useData } from '@/app/map/_components/contexts/data-context';
import { useFilters } from '@/app/map/_components/contexts/filter-context';
import GEMap from '@/app/map/_components/map';
import Tooltip from '@/app/map/_components/tooltip';
import type { ElectoralDivision } from '@/models/electoral-division';
import { center } from '@turf/turf';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useEffect, useState } from 'react';

const Main = () => {
  const { boundaries, electoralDivisions } = useData();
  const { filters } = useFilters();

  const [electoralDivisionHovered, setElectoralDivisionHovered] = useState<
    | {
        electoralDivision: ElectoralDivision;
        longitude: number;
        latitude: number;
      }
    | undefined
  >();
  const [electoralDivisionSelected, setElectoralDivisionSelected] = useState<
    ElectoralDivision | undefined
  >();

  // Reset hover state when filters change
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setElectoralDivisionHovered(undefined);
  }, [filters]);

  const handleElectoralDivisionHovered = (electoralDivisionId: number) => {
    if (electoralDivisionId === -1) {
      setElectoralDivisionHovered(undefined);
      return;
    }

    const electoralDivision = electoralDivisions.find(
      (division) => division.featureId === electoralDivisionId,
    );

    if (!electoralDivision) return;

    const boundary = boundaries.features.find(
      (feature) => feature.id === electoralDivisionId,
    );

    if (!boundary) return;

    const boundaryCenter = center(boundary);

    if (!boundaryCenter.geometry.coordinates.length) return;

    setElectoralDivisionHovered({
      electoralDivision,
      longitude: boundaryCenter.geometry.coordinates[0],
      latitude: boundaryCenter.geometry.coordinates[1],
    });
  };

  const handleElectoralDivisionSelected = (electoralDivisionId: number) => {
    const electoralDivision = electoralDivisions.find(
      (division) => division.featureId === electoralDivisionId,
    );

    if (!electoralDivision) return;

    setElectoralDivisionSelected(electoralDivision);
  };

  // return (
  //   <>
  //     <div id="c-main" className="w-full min-h-screen h-screen">
  //       <GEMap
  //         onElectoralDivisionHovered={handleElectoralDivisionHovered}
  //         onElectoralDivisionSelected={handleElectoralDivisionSelected}
  //       >
  //         {electoralDivisionHovered && (
  //           <Tooltip
  //             electoralDivision={electoralDivisionHovered.electoralDivision}
  //             longitude={electoralDivisionHovered.longitude}
  //             latitude={electoralDivisionHovered.latitude}
  //           />
  //         )}
  //       </GEMap>
  //       <Panel
  //         electoralDivision={electoralDivisionSelected}
  //         onClose={() => setElectoralDivisionSelected(undefined)}
  //         onElectoralDivisionSelected={handleElectoralDivisionSelected}
  //       />
  //     </div>
  //     {FEAT_MANIFESTOS_CHAT === 'true' && <QnaWidget />}
  //   </>
  // );
  return (
    <div className="flex h-full overflow-hidden">
      {/* Desktop Sidebar */}
      <MapSidebar
        onElectoralDivisionSelected={handleElectoralDivisionSelected}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Filters Button */}
        <div className="md:hidden border-b">
          <div className="flex items-center gap-2 p-4">
            {/* <Button variant="outline" className="flex-1" onClick={() => setIsFilterOpen(true)}>
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button> */}
          </div>
        </div>

        {/* Mobile Filters Sheet */}
        {/* <MobileFiltersSheet
          isOpen={isFilterOpen}
          onOpenChange={setIsFilterOpen}
          parties={parties}
          constituencies={constituencies}
          candidates={candidates}
          selectedParty={selectedParty}
          selectedConstituency={selectedConstituency}
          onPartyChange={setSelectedParty}
          onConstituencyChange={setSelectedConstituency}
        /> */}

        {/* Map Area */}
        <div className="flex-1 bg-muted/10 relative">
          <GEMap
            onElectoralDivisionHovered={handleElectoralDivisionHovered}
            onElectoralDivisionSelected={handleElectoralDivisionSelected}
          >
            {electoralDivisionHovered && (
              <Tooltip
                electoralDivision={electoralDivisionHovered.electoralDivision}
                longitude={electoralDivisionHovered.longitude}
                latitude={electoralDivisionHovered.latitude}
              />
            )}
          </GEMap>
        </div>
      </div>
    </div>
  );
};

export default Main;
