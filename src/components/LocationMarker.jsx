import { Marker, Popup, useMapEvents } from 'react-leaflet';
import {useState } from "react";
import GeoIcon from "./GeoIcon";


function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position} icon={GeoIcon}>
        <Popup>Vous êtes ici</Popup>
      </Marker>
    )
  }

export default LocationMarker;