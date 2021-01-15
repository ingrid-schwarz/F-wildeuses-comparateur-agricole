import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";

import axios from "axios";
import LocationMarker from "./LocationMarker";

class MyMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      agriculteurs: [],
      acheteurs: [],
    };
  }
  componentDidMount() {
    this.getAgriculteurs();
    this.getAcheteurs();
  }

  getAgriculteurs() {
    axios
      .get("http://localhost:8000/api/agriculteurs/")

      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({
          agriculteurs: data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getAcheteurs() {
    axios
      .get("http://localhost:8000/api/acheteurs/")

      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({
          acheteurs: data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const { agriculteurs, acheteurs } = this.state;

    return (
      <MapContainer
        id="mapid"
        center={[48.4469, 1.4892]}
        zoom={12}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[48.44853267210437, 1.5359987423812038]}>
          <Popup>
            ComparateurAgricole.com <br /> 6 Av Nicolas Conté <br /> 28000
            Chartres
          </Popup>
        </Marker>
        {agriculteurs.map((agriculteur, key) => (
          <Marker key={key} position={[agriculteur.lat, agriculteur.longitude]}>
            <Popup>
              {agriculteur.zipcode}
              <br />
              {agriculteur.city}
              <br />
              {agriculteur.farm_size}
            </Popup>
          </Marker>
        ))}
        {acheteurs.map((acheteur, key) => (
          <Circle
            pathOptions={{ color: "green", fillColor: "green" }}
            radius={2000}
            key={key}
            center={[acheteur.lat, acheteur.longitude]}
          >
            <Marker key={key} position={[acheteur.lat, acheteur.longitude]}>
              <Popup>
                {acheteur.name}
                <br />
                {acheteur.type}
                <br />
                {acheteur.zipcode}
                <br />
                {acheteur.city}
              </Popup>
            </Marker>
          </Circle>
        ))}
        <LocationMarker />
      </MapContainer>
    );
  }
}
export default MyMap;
