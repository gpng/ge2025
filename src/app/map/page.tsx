import 'maplibre-gl/dist/maplibre-gl.css';

import Content from '@/app/map/_components/content';
import Providers from '@/app/map/_components/providers';

export default function MapPage() {
  return (
    <Providers>
      <div className="h-[calc(100vh-3.5rem)]">
        <Content />
      </div>
    </Providers>
  );
}
