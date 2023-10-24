import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Marker, Popup, useMap } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import iconUrl from "../../images/icon-location.svg";
import { useSelector } from "react-redux";

const Map = ({}) => {
  const ipDetails=useSelector((state)=>state.ipDetails.data)
  const customIcon = new Icon({
    iconUrl,
    iconSize: [32, 40],
  });

  function SetViewOnClick({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom(15));
  
    return null;
  }

  return (
    <MapContainer center={[ipDetails.lat, ipDetails.lng]} zoom={15} zoomControl={false} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[ipDetails.lat, ipDetails.lng]} icon={customIcon}>
        <Popup>location of ip : {ipDetails.ip}</Popup>
      </Marker>
      <SetViewOnClick coords={[ipDetails.lat, ipDetails.lng]}/>
    </MapContainer>
  );
};

export default Map;
