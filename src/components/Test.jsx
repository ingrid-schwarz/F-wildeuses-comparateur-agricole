import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";


const coord1 = 48.4469;
const coord2 = 1.4892;
const test = new Array(10000);

export default function Test() {
  const al = [];
  for (var i = 0; i < test.length; i++) {
    al.push(<Marker key={i} position={[coord1 + i / 100, coord2 + i / 100]} />);
  }

  const chunkProgress = (data) => {
    console.log("etf", data);
  };

  return (
    <MapContainer
      className="markercluster-map"
      center={[48.4469, 1.4892]}
      zoom={11}
      maxZoom={18}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <MarkerClusterGroup chunkedLoading chunkProgress={chunkProgress}>
        {al}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
