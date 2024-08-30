import styles from "./Map.module.css"
import { useNavigate, useSearchParams } from "react-router-dom"
import Button from "./Button"
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
  useMapEvents,
} from "react-leaflet"
import { Component, useEffect, useState } from "react"
//import { useCities } from "../contexts/CitiesContext";
import { useMap } from "react-leaflet"
import { useGeolocation } from "../hooks/useGeolocation"
import { CitiesProvider, useCities } from "../contexts/CitiesContext"
import { Context, useContext } from "react"
import { useUrlPosition } from "../hooks/useUrlPosition"

function Map() {
  //const navigate = useNavigate(); /* eslint-disable no-unused-vars */
  const { cities } = useCities()
  //const { cities } = useContext(CitiesContext);

  const [mapPosition, setMapPosition] = useState([40, 0])
  /* eslint-disable no-unused-vars */
  //const [searchParams] = useSearchParams()
  const {
    isLoading: isLoadingPosition,
    position: geoLocationPosition,
    getPosition,
  } = useGeolocation()

  const [mapLat, mapLng] = useUrlPosition()

  //const mapLat = searchParams.get("lat")
  //const mapLng = searchParams.get("lng")

  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng])
    },
    [mapLat, mapLng]
  )

  useEffect(
    function () {
      console.log("geoLocationPosition is:", geoLocationPosition)
      if (geoLocationPosition)
        setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng])
      console.log(
        "lat and lng:",
        geoLocationPosition.lat,
        geoLocationPosition.lng
      )
    },
    [geoLocationPosition]
  )

  return (
    <div className={styles.mapContainer}>
      {!geoLocationPosition.lat && (
        <Button type="position" onClick={getPosition}>
          {isLoadingPosition ? "Loading...." : "Use your position"}
        </Button>
      )}
      {/* leaflet map component */}
      <MapContainer
        center={mapPosition}
        //center={[maplat, maplng]}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}

        {/* <ChangeCenter position={[mapLat || 40, mapLng || 0]} /> */}
        {mapPosition[0] && <ChangeCenter position={mapPosition} />}

        <DetectClick />
      </MapContainer>
    </div>
  )
}

function ChangeCenter({ position }) {
  const map = useMap()
  map.setView(position)
  return null
}

function DetectClick() {
  const navigate = useNavigate()

  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  })
}
export default Map
