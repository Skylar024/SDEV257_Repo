import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, Image } from "react-native";
import styles from "./styles";

const placeholder = require("./images/placeholder.png");

function Placeholder(props) {
    if (props.loaded) {
        return null;
    } else {
        return (
            <Image style={props.style} source={placeholder}></Image>
        );
    }
}

export default function LazyImage(props) {
    const [loaded, setLoaded] = useState(false);

    return (
        <View style={props.style}>
            <Placeholder loaded={loaded} {...props} />
            <Image
                {...props}
                onLoad={() => {
                    setLoaded(true);
                }}
            />
        </View>
    );
}

LazyImage.propTypes = {
    style: PropTypes.shape({
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
    }),
};