import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Animated, { SlideInLeft, SlideOutRight } from "react-native-reanimated";
import styles from "./styles";

const placeholder = require("./images/placeholder.png");


export default function LazyImage(props) {
    const [loaded, setLoaded] = useState(false);

    return (
        <View style={props.style}>
            <Animated.View 
                key={props.source ? props.source.uri || props.source : 'placeholder'}
                entering={SlideInLeft} 
                exiting={SlideOutRight}
            >  
                <TouchableOpacity onPress={() => onPress(id)} style={styles.image}>
                    <Image
                        {...props}
                        onLoad={() => {
                            setLoaded(true);
                        }}
                        
                    >
                    </Image>
                </TouchableOpacity>
            </Animated.View>
        </View>
        
    );
}

LazyImage.propTypes = {
    style: PropTypes.shape({
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
    }),
};