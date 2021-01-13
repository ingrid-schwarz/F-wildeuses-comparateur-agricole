import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function MyMap () {
    return (
<MapContainer id="mapid" center={[48.4469, 1.4892]} zoom={13} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[48.4469, 1.4892]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    );
}

export default MyMap;