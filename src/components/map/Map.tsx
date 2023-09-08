import './map.scss';
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from '@react-google-maps/api';
import locationInfo, { LocationInfoType } from '../../config/map';
import { useMemo, useState } from 'react';
import holywoodImg from '../../assets/images/7060-HOLLYWOOD.jpg';
import Loading from '../Loading/Loading';

const Map = () => {
  const [selectedInfo, setSelectedInfo] = useState<null | LocationInfoType>(
    null
  );

  const center = useMemo(() => ({ lat: 34.101585, lng: -118.333626 }), []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <Loading />;

  return (
    <>
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
      >
        <MarkerF
          position={center}
          title={locationInfo.address}
          onClick={() => {
            setSelectedInfo(locationInfo);
          }}
        >
          {selectedInfo && (
            <InfoWindowF
              onCloseClick={() => setSelectedInfo(null)}
              position={center}
            >
              <div className="window-info">
                <h2>{locationInfo.address}</h2>
                <img
                  src={holywoodImg}
                  alt="7060 Hollywood Blvd, Los Angeles, CA"
                />
              </div>
            </InfoWindowF>
          )}
        </MarkerF>
      </GoogleMap>
    </>
  );
};

export default Map;
