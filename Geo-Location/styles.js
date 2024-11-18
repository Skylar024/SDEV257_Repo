import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "ghostwhite",
  },
  homeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "ghostwhite",
    marginTop: 30,
  },
  splitContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "ghostwhite",
    flexGrow: 2,
  },

  mapView: {
    alignSelf: "stretch",
    height: 450,
    margin: 30,
  },

  McDonaldsText: {
    color: "coral",
  },
  HomeText: {
    color: "firebrick",
  },

  boldText: {
    fontWeight: "bold",
  },
});