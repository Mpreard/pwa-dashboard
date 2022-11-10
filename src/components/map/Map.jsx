import "./Map.css";
import {MapContainer, TileLayer, Marker, Popup, useMapEvent} from "react-leaflet";
import icon from "./Constants"
import "leaflet/dist/leaflet.css";
import {useEffect, useState} from "react";

function Map() {
    const [marker, setMarker] = useState(
        [
            {
                "device_name": "Apple Watch",
                "device_owner": "Maxime préard",
                "position": [47.203, -1.55]
            },
            {
                "device_name": "Apple Watch",
                "device_owner": "Maxime préard",
                "position": [47.203, -1.555]
            }
        ]
    )

    return (
        <div>
            <MapContainer center={[47.203, -1.537]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {marker.map(position => (
                    <Marker key={position.position} position={position.position} icon={icon}>
                        <Popup>
                            <center>
                                {position.device_name}
                                <br/> {position.device_owner}
                            </center>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}

export default Map