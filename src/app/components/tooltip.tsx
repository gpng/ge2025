import type { ElectoralDivision } from '@/models';
import { Marker } from 'react-map-gl/maplibre';

interface Props {
  electoralDivision: ElectoralDivision;
  longitude: number;
  latitude: number;
}

const Tooltip = ({ electoralDivision, longitude, latitude }: Props) => {
  return (
    <Marker longitude={longitude} latitude={latitude} anchor="center">
      <div id="tooltip" className="p-4 bg-white rounded-lg shadow-md">
        {electoralDivision.name}
      </div>
    </Marker>
  );
};

export default Tooltip;
