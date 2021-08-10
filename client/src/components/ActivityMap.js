import React from 'react';
import {MapContainer, Circle, TileLayer, Marker, Popup} from 'react-leaflet';
import { haveIApplied } from '../helpers/helpers';

const ActivityMap = ({activities, apply, user}) => {

  return (
    <div>
      <MapContainer
        center={[55.947762, -3.189037]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle center={[55.947762, -3.189037]} radius={2000} />

        {activities.map(
          activity => {
            const applied = haveIApplied(activity, user)
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
                  {applied ? <div>APPLIED</div> : <button onClick={() => apply(activity)}>Apply Now!</button>}
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