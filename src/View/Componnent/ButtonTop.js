import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { ICON } from "../ConstsIcons";

const ButtonTop = ({ is_back }) => {
  return (
    <TouchableOpacity style={styles.content}>
      <Image source={is_back ? ICON.back : ICON.close} style={styles.icon} />
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
