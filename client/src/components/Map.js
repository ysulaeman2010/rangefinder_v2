import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import SoldierIcon from "../assets/soldier.png";
import TankIcon from "../assets/tank.png";
import { TankPos } from "../utils/functions";

import "../css/Map.css";

const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

const MapScale = () => {
  const map = useMap();

  useEffect(() => {
    L.control
      .scale({
        metric: true,
        imperial: false,
      })
      .addTo(map);
  }, [map]);

  return null;
};

const Map = () => {
  const data = useSelector((state) => state);

  const Soldier = new L.Icon({
    iconUrl: SoldierIcon,
    iconRetinaUrl: SoldierIcon,
    popupAnchor: [-0, -0],
    iconSize: [30, 30],
  });

  const Tank = new L.Icon({
    iconUrl: TankIcon,
    iconRetinaUrl: TankIcon,
    popupAnchor: [-0, -0],
    iconSize: [40, 40],
  });

  const { f_lat: tank_lat1, f_lng: tank_lng1 } = TankPos(
    data.p_1.lat_p1,
    data.p_1.lng_p1,
    data.p_1.dist_p1,
    data.p_1.compass_p1
  );

  const { f_lat: tank_lat2, f_lng: tank_lng2 } = TankPos(
    data.p_2.lat_p2,
    data.p_2.lng_p2,
    data.p_2.dist_p2,
    data.p_2.compass_p2
  );

  const lat_center =
    (data.p_1.lat_p1 + data.p_2.lat_p2 + tank_lat1 + tank_lat2) / 4;

  const lng_center =
    (data.p_1.lng_p1 + data.p_2.lng_p2 + tank_lng1 + tank_lng2) / 4;

  return (
    <MapContainer
      className="map"
      center={[lat_center, lng_center]}
      zoom={15}
      scrollWheelZoom={false}
    >
      <MapScale />
      <ChangeView center={[lat_center, lng_center]} zoom={15} />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[data.p_1.lat_p1, data.p_1.lng_p1]} icon={Soldier} />
      <Marker position={[data.p_2.lat_p2, data.p_2.lng_p2]} icon={Soldier} />
      <Marker position={[tank_lat1, tank_lng1]} icon={Tank} />
      <Marker position={[tank_lat2, tank_lng2]} icon={Tank} />
    </MapContainer>
  );
};

export default Map;
