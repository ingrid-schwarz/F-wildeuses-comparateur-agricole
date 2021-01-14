import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import LocationMarker from "./LocationMarker";

class MyMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: null,
    };
  }
  componentDidMount() {
    this.getPosition();
  }

  getPosition() {
    axios
      .get("http://localhost:8000/api/agriculteurs/70")
      
      .then((response) => response.data)
      .then((data) => {
        console.log(data)
        this.setState({
          position: data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    const {position}= this.state;
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
        {position!==null && <Marker position={[position.lat, position.longitude]}>
          <Popup>
            adresse
            <br />
            code postal
            <br /> ville
          </Popup>
        </Marker>}
        <LocationMarker />
      </MapContainer>
    );
  }
}
export default MyMap;
