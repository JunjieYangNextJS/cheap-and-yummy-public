// @ts-nocheck

"use client";

import { useState, useRef } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
import { Input } from "../ui/input";
import { useMapStore } from "@/hooks/use-map-store";

const GoogleMapComponent = () => {
  const [selectedPlace, setSelectedPlace] = useState("Central Austin");
  const [searchLngLat, setSearchLngLat] = useState({
    lat: 30.267153,
    lng: -97.743057,
  });
  const [currentLocation, setCurrentLocation] = useState(null);
  const autocompleteRef = useRef(null);

  const onChangeLocation = useMapStore((state) => state.onChangeLocation);
  const onChangeLocationName = useMapStore(
    (state) => state.onChangeLocationName
  );

  // laod script for google map
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading....</div>;

  // static lat and lng
  const center = { lat: "YOUR-LATITUDE", lng: "YOUR-LONGITUDE" };

  // handle place change on search
  const handlePlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();
    setSelectedPlace(place.name);
    setSearchLngLat({
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    });
    onChangeLocation(
      place.geometry.location.lat(),
      place.geometry.location.lng()
    );
    onChangeLocationName(place.name);
    setCurrentLocation(null);
  };

  // get current location
  const handleGetLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          setSelectedPlace("Your location");
          setSearchLngLat({ lat: latitude, lng: longitude });
          setCurrentLocation({ lat: latitude, lng: longitude });

          onChangeLocation(latitude, longitude);
          onChangeLocationName("Your location");
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  // on map load
  const onMapLoad = (map) => {
    const controlDiv = document.createElement("div");
    const controlUI = document.createElement("div");
    controlUI.innerHTML = "&nbsp Your Location &nbsp";
    controlUI.style.backgroundColor = "white";
    controlUI.style.color = "black";
    controlUI.style.border = "2px solid #ccc";
    controlUI.style.borderRadius = "3px";
    controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
    controlUI.style.cursor = "pointer";
    controlUI.style.marginBottom = "22px";
    controlUI.style.textAlign = "center";
    controlUI.style.width = "100%";
    controlUI.style.padding = "8px 0";
    controlUI.addEventListener("click", handleGetLocationClick);
    controlDiv.appendChild(controlUI);

    map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(
      controlDiv
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px",
        marginTop: "15px",
      }}
    >
      {/* search component  */}
      <Autocomplete
        className=" border-0 border-transparent focus-visible:border-opacity-0 focus-visible:ring-transparent focus-visible:ring-opacity-0"
        onLoad={(autocomplete) => {
          autocompleteRef.current = autocomplete;
        }}
        onPlaceChanged={handlePlaceChanged}
        options={{ fields: ["address_components", "geometry", "name"] }}
      >
        <Input type="text" placeholder="Search for a location" />
      </Autocomplete>

      {/* map component  */}
      <GoogleMap
        zoom={currentLocation || selectedPlace ? 18 : 12}
        center={currentLocation || searchLngLat || center}
        mapContainerClassName="map"
        mapContainerStyle={{ width: "80%", height: "600px", margin: "auto" }}
        onLoad={onMapLoad}
      >
        {selectedPlace && <Marker position={searchLngLat} />}
        {currentLocation && <Marker position={currentLocation} />}
      </GoogleMap>
    </div>
  );
};

export default GoogleMapComponent;
