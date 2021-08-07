import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

const ActivityMap = ({activities}) => {

  return (
    <MapContainer
      center={[56.621755, -4.138820]}
      zoom={8}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {activities.map(
        activity => {
          return (
            <Marker
              key={activity.id}
              title={activity.title}
              position={activity.coordinates}
            >
              <Popup>
                <h3>{activity.title}</h3>
              </Popup>
            </Marker>
          )
        }
      )}

    </MapContainer>
  );
}

export default ActivityMap;