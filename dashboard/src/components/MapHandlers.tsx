import { useEffect } from 'react';
import { useMap, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { RegionKey, REGIONS } from '../constants';

export const ZoomHandler = ({ extent }: { extent: RegionKey }) => {
    const map = useMap();
    useEffect(() => {
        const config = REGIONS[extent];
        map.setView(config.center as unknown as L.LatLngExpression, config.zoom);
    }, [extent, map]);
    return null;
};

export const SelectedFeatureCentering = ({ zoomRequest, activeGeoData }: { zoomRequest: { id: string | number, timestamp: number } | null, activeGeoData: any }) => {
    const map = useMap();
    useEffect(() => {
        if (!zoomRequest || !activeGeoData?.features) return;

        // Find the actual feature in the geojson to get its geometry
        const geoFeature = activeGeoData.features.find((f: any) => String(f.properties.id) === String(zoomRequest.id));
        if (geoFeature) {
            const layer = L.geoJSON(geoFeature);
            const bounds = layer.getBounds();
            if (bounds.isValid()) {
                map.flyToBounds(bounds, { padding: [50, 50], maxZoom: 12 });
            }
        }
    }, [zoomRequest, activeGeoData, map]);
    return null;
};

export const MapDeselectHandler = ({ onDeselect }: { onDeselect: () => void }) => {
    useMapEvents({
        click: () => {
            onDeselect();
        }
    });
    return null;
};
