import { View, Text, StyleSheet } from "react-native";
import ButtonTop from "./ButtonTop";

const Header = ({ title, is_back }) => {
  return (
    <View style={styles.header}>
      <ButtonTop is_back={is_back} />
      <Text style={styles.title} adjustsFontSizeToFit={true} numberOfLines={1}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    marginVertical: 20,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 40,
  },

  title: {
    marginLeft: 50,
    marginRight: 30,
    fontWeight: "bold",
    fontSize: 32,
  },
});
