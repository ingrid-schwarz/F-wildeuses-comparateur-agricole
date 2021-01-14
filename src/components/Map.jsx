import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import LocationMarker from "./LocationMarker";

function MyMap () {
    return (
<MapContainer id="mapid" center={[48.4469, 1.4892]} zoom={12} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[48.44853267210437, 1.5359987423812038]}>
    <Popup>
      ComparateurAgricole.com <br /> 6 Av Nicolas Conté <br /> 28000 Chartres
    </Popup>
  </Marker>
  <LocationMarker />
</MapContainer>
    );
}

export default MyMap;