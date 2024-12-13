import React, { useEffect, useState } from "react";
import {View, Text, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles";
import { fetchItems } from "../api";
import List from "./List";

export default function PlanetDetail({ route }) {
    const { details } = route.params;
    const [planet, setPlanet] = useState(details);
    const [loading, setLoading] = useState(false);
    // const endpoint = "Planets";
    // const filter = planet.value;
    

    //console.log("planet: ", planet);

    useEffect(() => {
        if (details.url) {
            setLoading(true);
            fetch(details.url)
                .then((response) => response.json())
                .then((data) => {
                    setPlanet(data.result.properties || details);
                    //console.log("Data: ", data.result.properties)
                })
                .catch((error) => console.error("Error fetching planet data:", error))
                .finally(() => setLoading(false));
            }

    }, [details]);

    if (loading) {
        return <Text>Loading Planet Details...</Text>;
    }
    

    return (
        <View style={styles.detailsContainer}>
            <Text style={styles.titleText}>{planet.name || "Unknown"}</Text> 
            <Text style={styles.infoText}>Climate: {planet.climate || "Unknown"}</Text> 
            <Text style={styles.infoText}>Diameter: {planet.diameter || "Unknown"}</Text> 
            <Text style={styles.infoText}>Gravity: {planet.gravity || "Unknown"}</Text> 
            <Text style={styles.infoText}>Orbital Period: {planet.orbital_period || "Unknown"}</Text> 
            <Text style={styles.infoText}>Population: {planet.population || "Unknown"}</Text> 
            <Text style={styles.infoText}>Rotation Period: {planet.rotation_period || "Unknown"}</Text> 
            <Text style={styles.infoText}>Terrain: {planet.terrain || "Unknown"}</Text> 
            <Text style={styles.infoText}>URL: {planet.url || "Unknown"}</Text>
        </View>
    );
}