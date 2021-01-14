import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import axios from "axios";

class MyMap extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    // position:null
    lat:48.4469,
    lng:1.4892
    };
  }
    // componentDidMount() {
    //   this.getPosition();
    // }

    // getPosition() {
    //   axios.get(`https://randomuser.me/api?nat=fr`)
    //   .then(response => response.data)
    //   .then(data => {
    //     this.setState({
    //       position: data.results[0]
    //     });
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });
    // }
  render() {
    const position = this.state;
    return (
      <MapContainer id="mapid" center={position} zoom={12} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
      <Popup>
       A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
      </Marker>
      </MapContainer>
  );  
}
}
export default MyMap;

// marker position={this.getPosition}