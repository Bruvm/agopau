import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { type LatLngTuple } from "leaflet";

const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/252/252025.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const provinciasArgentinas: { nombre: string; coords: LatLngTuple }[] = [
  { nombre: "Buenos Aires (La Plata)", coords: [-34.9214, -57.9544] },
  { nombre: "Catamarca (San Fernando del Valle de Catamarca)", coords: [-28.4696, -65.7852] },
  { nombre: "Chaco (Resistencia)", coords: [-27.4519, -58.9867] },
  { nombre: "Chubut (Rawson)", coords: [-43.3002, -65.1023] },
  { nombre: "Córdoba (Córdoba)", coords: [-31.4201, -64.1888] },
  { nombre: "Corrientes (Corrientes)", coords: [-27.4712, -58.8396] },
  { nombre: "Entre Ríos (Paraná)", coords: [-31.7413, -60.5115] },
  { nombre: "Formosa (Formosa)", coords: [-26.1849, -58.1731] },
  { nombre: "Jujuy (San Salvador de Jujuy)", coords: [-24.1858, -65.2995] },
  { nombre: "La Pampa (Santa Rosa)", coords: [-36.6203, -64.2906] },
  { nombre: "La Rioja (La Rioja)", coords: [-29.4131, -66.8555] },
  { nombre: "Mendoza (Mendoza)", coords: [-32.8908, -68.8272] },
  { nombre: "Misiones (Posadas)", coords: [-27.3621, -55.9009] },
  { nombre: "Neuquén (Neuquén)", coords: [-38.9516, -68.0591] },
  { nombre: "Río Negro (Viedma)", coords: [-40.8135, -62.9967] },
  { nombre: "Salta (Salta)", coords: [-24.7829, -65.4232] },
  { nombre: "San Juan (San Juan)", coords: [-31.5375, -68.5364] },
  { nombre: "San Luis (San Luis)", coords: [-33.295, -66.3356] },
  { nombre: "Santa Cruz (Río Gallegos)", coords: [-51.6226, -69.2181] },
  { nombre: "Santa Fe (Santa Fe)", coords: [-31.6333, -60.7] },
  { nombre: "Santiago del Estero (Santiago del Estero)", coords: [-27.7834, -64.2642] },
  { nombre: "Tierra del Fuego (Ushuaia)", coords: [-54.8019, -68.3029] },
  { nombre: "Tucumán (San Miguel de Tucumán)", coords: [-26.8241, -65.2226] },
];



export default function MyMap() {
  return (
    <MapContainer
      center={[-38.4161, -63.6167]}
      zoom={4}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {provinciasArgentinas.map((prov, idx) => (
        <Marker key={idx} position={prov.coords} icon={customIcon}>
          <Popup>{prov.nombre}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
