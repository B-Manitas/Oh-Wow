import { View, Text, StyleSheet } from "react-native";
import ButtonTop from "./ButtonTop";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <ButtonTop />
      <Text style={styles.title}>{title}</Text>
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
    fontWeight: "bold",
    fontSize: 36,
  },
});
