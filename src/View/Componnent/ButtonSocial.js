import { TouchableOpacity, Image, StyleSheet } from "react-native";

const ButtonSocial = () => {
  return (
    <TouchableOpacity style={styles.link}>
      <Image
        style={styles.icon}
        source={require("../../../assets/img/instagram.png")}
      />
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
