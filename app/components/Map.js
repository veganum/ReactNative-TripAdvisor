import React from "react";
import { Platform } from "react-native";
import MapView from "react-native-maps";
import openMap from "react-native-open-maps";

export default function Map(props) {
  const { location, name, height } = props;

  const openAppMap = () => {
    if (Platform.OS === "ios") {
      openMap({
        latitude: location.latitude,
        longitude: location.longitude,
      });
    } else {
      openMap({
        query: `${location.latitude},${location.longitude}`,
        zoom: 19,
      });
    }
  };

  return (
    <MapView
      style={{ height: height, width: "100%" }}
      initialRegion={location}
      onPress={openAppMap}
    >
      <MapView.Marker
        coordinate={{
          latitude: location.latitude,
          longitude: location.longitude,
        }}
      />
    </MapView>
  );
}
