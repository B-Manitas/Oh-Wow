// Componnents imports
import ItemMarker from "container/Marker";

// Liraries imports
import { Marker } from "react-native-maps";

const Markers = (...props) => {
  // Destructure props
  const [{ salons }] = props;

  return salons.map((item, i) => (
    <Marker
      key={i}
      coordinate={{
        longitude: item.longitude,
        latitude: item.latitude,
      }}
    >
      <ItemMarker marker={item} />
    </Marker>
  ));
};

export default Markers;
