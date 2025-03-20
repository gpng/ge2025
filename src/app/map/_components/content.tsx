'use client';
import { Button } from '@/app/_components/ui/button';
import { useData } from '@/app/map/_components/contexts/data-context';
import { useFilters } from '@/app/map/_components/contexts/filter-context';
import GEMap from '@/app/map/_components/map';
import QnaWidget from '@/app/map/_components/qna-widget/qna-widget';
import MapSidebar from '@/app/map/_components/sidebar/map-sidebar';
import MobileSheet from '@/app/map/_components/sidebar/mobile-sheet';
import Tooltip from '@/app/map/_components/tooltip';
import { FEAT_MANIFESTOS_CHAT } from '@/lib/env';
import type { ElectoralDivision } from '@/models/electoral-division';
import { center } from '@turf/turf';
import { Filter } from 'lucide-react';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useEffect, useState } from 'react';

const Content = () => {
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
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: reset hover state when filters change
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

  return (
    <div className="flex overflow-hidden h-[calc(100vh-3.5rem)]">
      {/* Desktop Sidebar */}
      <MapSidebar
        onElectoralDivisionSelected={handleElectoralDivisionSelected}
        selectedElectoralDivision={electoralDivisionSelected}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Filters Button */}
        <div className="md:hidden border-b">
          <div className="flex items-center gap-2 p-4">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => setIsFilterOpen(true)}
            >
              <Filter className="h-4 w-4 mr-2" />
              Map Filters & Constituency Details
            </Button>
          </div>
        </div>
        <MobileSheet
          isOpen={isFilterOpen}
          onOpenChange={setIsFilterOpen}
          onElectoralDivisionSelected={handleElectoralDivisionSelected}
          selectedElectoralDivision={electoralDivisionSelected}
        />
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
      {FEAT_MANIFESTOS_CHAT === 'true' && <QnaWidget />}
    </div>
  );
};

export default Content;
