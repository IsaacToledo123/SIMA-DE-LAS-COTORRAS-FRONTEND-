import {useState,useEffect} from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; 
import { Icon } from "leaflet";
import InicioIcon from "../img/imagenesCRoquis/hogar.png";
import CabañasIcon from "../img/imagenesCRoquis/cabañasCro.png";
import Rapel from "../img/imagenesCRoquis/rapeling.png";
import Restaurant from "../img/imagenesCRoquis/restaurant.png";
import Tirolesa from '../img/imagenesCRoquis/tirolina.png'
import Mirador from '../img/imagenesCRoquis/paisaje.png'
import Yo from '../img/imagenesCRoquis/para-caminar.png'


const MapaGoogle = () => {
  const position = [16.807682, -93.47469];

  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCurrentLocation([latitude, longitude]);
          },
          (error) => {
            console.error('Error getting location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported');
      }
    };

    getLocation();
  }, []);


  const inicioIcon = new Icon({
    iconUrl: InicioIcon,
    iconSize: [38, 38],
  });

  const rapelIcon = new Icon({
    iconUrl: Rapel,
    iconSize: [38, 38],
  });
  const restaurantIcon = new Icon({
    iconUrl: Restaurant,
    iconSize: [38, 38],
  });
  const cabañasIcon = new Icon({
    iconUrl: CabañasIcon,
    iconSize: [38, 38],
  });
  const TirolesaIcon = new Icon({
    iconUrl: Tirolesa,
    iconSize: [38, 38],
  });

  const MiradorIcon = new Icon({
    iconUrl: Mirador,
    iconSize: [38, 38],
  });

  const MeIcon = new Icon({
    iconUrl: Yo,
    iconSize: [38, 38],
  });



  const marker = [
    {
      geocode: [16.806529364714933, -93.4738458957013],
      popUp: "Cabañas",
      icon:cabañasIcon
    },
    {
      geocode: [16.80871444658535, -93.47416468220895],
      popUp: "Inicio",
      icon:inicioIcon
    },
    {
      geocode: [16.80768662706504, -93.47504904294341],
      popUp: "Rapel",
      icon:rapelIcon
    },
    {
      geocode: [16.807106490237942, -93.47489852720672],
      popUp: "Restaurant",
      icon:restaurantIcon
    },
    {
      geocode: [16.808307969722925, -93.47510586169165],
      popUp: "Tirolesa",
      icon:TirolesaIcon
    },
    {
      geocode: [16.8079260295056, -93.47451150674617],
      popUp: "Mirador",
      icon:MiradorIcon
    },
    {
      geocode: currentLocation || [0, 0], 
      popUp: 'Cordenada Actual',
      icon: MeIcon,
    },
 
  ];

  return (
    <div className="max-w-full mx-4 relative">
    <div style={{ height: "60vh", width: "100%" }}>
  <MapContainer
    center={position}
    zoom={17}
    style={{ height: "100%", width: "100%" }}
    scrollWheelZoom={false}
    className=""
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {marker.map((marker, index) => (
      <Marker key={index} position={marker.geocode} icon={marker.icon}>
        <Popup>{marker.popUp}</Popup>
      </Marker>
    ))}
  </MapContainer>
</div>

    </div>
  );
};

export default MapaGoogle;
