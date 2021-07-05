import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConfigure } from "../data";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
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

  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConfigure());
  }, []);

  const dataPengamat = [data.p_1, data.p_2, data.p_3, data.p_4];

  const activePengamat = data.get_data;

  const activeIndex = dataPengamat.findIndex(
    (pengamat) => pengamat.id !== null
  );

  console.log(activeIndex);

  const center = dataPengamat.filter(
    (item) => item.lat && item.lng !== 0
  ).length;

  const center_lat =
    dataPengamat.reduce((a, b) => ({ lat: a.lat + b.lat })).lat / center;
  const center_lng =
    dataPengamat.reduce((a, b) => ({ lng: a.lng + b.lng })).lng / center;

  return (
    <MapContainer
      className="map"
      center={[
        isNaN(center_lat) ? 0 : center_lat,
        isNaN(center_lng) ? 0 : center_lng,
      ]}
      zoom={15}
      scrollWheelZoom={true}
    >
      <MapScale />
      <ChangeView
        center={[
          isNaN(center_lat) ? 0 : center_lat,
          isNaN(center_lng) ? 0 : center_lng,
        ]}
        zoom={15}
      />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {dataPengamat
        .filter((item) => item.lat && item.lng !== 0)
        .map((pengamat, index) => (
          <React.Fragment key={index}>
            {data.get_data[index] !== undefined && (
              <>
                <Marker position={[pengamat.lat, pengamat.lng]} icon={Soldier}>
                  <Popup>
                    Pengamat ke {index + 1} <hr />
                    Nama {data.get_data[activeIndex + index].name}
                  </Popup>
                </Marker>

                <Marker
                  position={[
                    TankPos(
                      pengamat.lat,
                      pengamat.lng,
                      pengamat.dist,
                      pengamat.compass
                    ).f_lat,
                    TankPos(
                      pengamat.lat,
                      pengamat.lng,
                      pengamat.dist,
                      pengamat.compass
                    ).f_lng,
                  ]}
                  icon={Tank}
                >
                  <Popup>
                    Tank dari pengamat ke {index + 1} <hr />
                    Nama pengamat {data.get_data[activeIndex + index].name}
                    <br />
                    Waktu pengamatan{" "}
                    {data.get_data[activeIndex + index].timestamp}
                  </Popup>
                </Marker>
              </>
            )}
          </React.Fragment>
        ))}
    </MapContainer>
  );
};

export default Map;
