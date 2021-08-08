import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

const ActivityMap = ({activities, toggleDisplay}) => {

  return (
    <div>
      <button onClick={toggleDisplay}>List View</button>
      <MapContainer
        center={[55.947762, -3.189037]}
        zoom={12}
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
                position={activity.location.coordinates}
              >
                <Popup>
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>
                  <p>{activity.duration}</p>
                </Popup>
              </Marker>
            )
          }
        )}

      </MapContainer>
    </div>
  );
}

export default ActivityMap;