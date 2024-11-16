import { StyleSheet, View } from "react-native";

import Mapbox, { MapView } from "@rnmapbox/maps";
import { MAPBOX_PUBLIC_TOKEN } from "@env";

Mapbox.setAccessToken(MAPBOX_PUBLIC_TOKEN);

function App() {
    return (
        <MapView style={styles.map} />
    );
}

export default App;

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
});