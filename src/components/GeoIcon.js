import L from "leaflet";

const GeoIcon = L.icon({
    iconUrl: 'https://i.ibb.co/PwZCXcY/internet.png',
    
    iconSize:     [38, 60], // size of the icon
  
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


export default GeoIcon;
