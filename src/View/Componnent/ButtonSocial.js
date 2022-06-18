import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { ICON } from "../ConstsIcons";

const ButtonSocial = () => {
  return (
    <TouchableOpacity style={styles.link}>
      <Image style={styles.icon} source={ICON.insta} />
    </TouchableOpacity>
  );
};

export default ButtonSocial;

const styles = StyleSheet.create({
  icon: {
    height: 32,
    width: 32,
    resizeMode: "contain",
  },
});
