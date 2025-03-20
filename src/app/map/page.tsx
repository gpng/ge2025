import 'maplibre-gl/dist/maplibre-gl.css';

import Content from '@/app/map/_components/content';
import Providers from '@/app/map/_components/providers';

export default function MapPage() {
  return (
    <Providers>
      <Content />
    </Providers>
  );
}
