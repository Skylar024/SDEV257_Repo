import React, { useState, useEffect } from "react";
import { View, Text, StatusBar } from "react-native";
import MapView, { Marker, Polygon } from "react-native-maps";
import * as Location from "expo-location";
import styles from "./styles";

StatusBar.setBarStyle("dark-content");

const API_KEY = "AIzaSyAjxS75uGgZDLZSvNcbsowIcWs_HAnfXQc";
const URL = `https://maps.google.com/maps/api/geocode/json?key=${API_KEY}&latlng=`;

const McDonaldsCoords = {
  latitude: 38.68570516001625, 
  longitude: -85.79223437943429,
}
const HomeCoords = {
  latitude: 38.764294779706404, 
  longitude: -85.69257908687732,
}

const McDonaldsRegion = {
  coordinates: [
      { latitude: 38.68603594751717, longitude: -85.79235925408138},
      { latitude: 38.68604217208293, longitude: -85.79203390448905},
      { latitude: 38.68537365062944, longitude: -85.79207537061357},
      { latitude: 38.685389834648994, longitude: -85.79235606437948},
      { latitude: 38.68603594751717, longitude: -85.79235925408138},
  ],
  strokeColor: "coral",
  strokeWidth: 4,
}
const HomeRegion = {
  coordinates: [
    { latitude: 38.77275464892252, longitude: -85.70230111992514 },
    { latitude: 38.77289532377383, longitude: -85.6859896344119 },
    { latitude: 38.75877018440241, longitude: -85.68660311948653 },
    { latitude: 38.758207371922346, longitude: -85.7022650325678 },
    { latitude: 38.77275464892252, longitude: -85.70230111992514 },
  ], 
  strokeColor: "firebrick",
  strokeWidth: 4,
}
const defaultRegion = {
  coordinates: [
    { latitude: 38.78118408384337, longitude: -85.80791764163908 },
    { latitude: 38.78519849710589, longitude: -85.67264848334415 },
    { latitude: 38.68249237267902, longitude: -85.67041688555501 },
    { latitude: 38.68128633960383, longitude: -85.80808930300748 },
    { latitude: 38.78118408384337, longitude: -85.80791764163908 },
  ], 
  strokeColor: "#0000f9",
  strokeWidth: 4,
}


export default function App() {
  const [address, setAddress] = useState("loading...");
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [overlay1] = useState([HomeRegion]);
  const [overlay2] = useState([McDonaldsRegion]);


  
  useEffect(() => {
    function setPosition({ coords: { latitude, longitude } }) {
      setLongitude(longitude);
      setLatitude(latitude);

      fetch(`${URL}${latitude},${longitude}`)
        .then((resp) => resp.json())
        .then(({ results }) => {
          if (results.length > 0) {
            setAddress(results[0].formatted_address);
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }

    let watcher;

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setPosition(location);

      watcher = await Location.watchPositionAsync(
        { accuracy: Location.LocationAccuracy.Highest },
        setPosition
      );
    })();

    return () => {
      watcher?.remove();
    };
  }, []);

  return (
    <View style={styles.homeContainer}>
      <View style={styles.container}>
        <Text style={styles.label}>Address: {address}</Text>
        <Text style={styles.label}>Latitude: {latitude}</Text>
        <Text style={styles.label}>Longitude: {longitude}</Text>
      </View>

      <MapView
        style={styles.mapView}
        showsPointsOfInterest={false}
        initialRegion={{
          latitude: 38.73419865934669,
          longitude:-85.7437162899965,
          latitudeDelta: 0.002,
          longitudeDelta: 0.15, //Zoom level on Maps
        }}
        //showsUserLocation
        //followsUserLocation
        
      >
        {overlay1.map((v, HomeRegion) => (
          <Polygon
            key={HomeRegion}
            coordinates={v.coordinates}
            strokeColor={v.strokeColor}
            strokeWidth={v.strokeWidth}
          />
        ))}
        {overlay2.map((v, McDonaldsRegion) => (
          <Polygon
            key={McDonaldsRegion}
            coordinates={v.coordinates}
            strokeColor={v.strokeColor}
            strokeWidth={v.strokeWidth}
          />
        ))}
        <Marker
          title="McDonalds"
          coordinate={{
            latitude: 38.68570516001625,
            longitude: -85.79223437943429,
          }}
        />
        <Marker
          title="Home"
          coordinate={{
            latitude: 38.764294779706404,
            longitude: -85.69257908687732,
          }}
        />
      </MapView>
      <View style={styles.splitContainer}>
        <View style={styles.container}>
          <Text marginBottom='20' style={styles.HomeText}>Home Coordinates</Text>
          <Text style={styles.HomeText}>Latitude: </Text>
          <Text style={styles.HomeText}>{HomeCoords.latitude}: </Text>
          <Text style={styles.HomeText}>Longitude: </Text>
          <Text marginBottom='20' style={styles.HomeText}>{HomeCoords.longitude} </Text>
        </View>

        <View style={styles.container}>
          <Text marginBottom='20' style={styles.McDonaldsText}>McDonalds Coordinates</Text>
          <Text style={styles.McDonaldsText}>Latitude: </Text>
          <Text style={styles.McDonaldsText}>{McDonaldsCoords.latitude}: </Text>
          <Text style={styles.McDonaldsText}>Longitude: </Text>
          <Text marginBottom='20' style={styles.McDonaldsText}>{McDonaldsCoords.longitude} </Text>
        </View>

      </View>
    </View>

  );
}