import { TouchableOpacity, Image, StyleSheet } from "react-native";

const ButtonTop = () => {
  return (
    <TouchableOpacity style={styles.content}>
      <Image
        source={require("../../../assets/img/close.png")}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

export default ButtonTop;

const styles = StyleSheet.create({
  content: {
    position: "absolute",
    left: 0,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  icon: {
    height: 20,
    width: 20,
    resizeMode: "contain",
  },
});
