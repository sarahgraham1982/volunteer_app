import React from 'react';
import {MapContainer, Circle, TileLayer, Marker, Popup} from 'react-leaflet';

const ActivityMap = ({activities}) => {

  return (
    <div>
      <MapContainer
        center={[55.947762, -3.189037]}
        zoom={12}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle center={[55.947762, -3.189037]} radius={2000} />

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
                  <h4>{activity.charity.name}</h4>
                  <p>{activity.duration}</p>
                  <p>{activity.location.description}</p>
                  <button>Apply Now!</button>
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