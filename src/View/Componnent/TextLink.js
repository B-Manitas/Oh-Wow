import {
    StyleSheet,
    TouchableOpacity,
    Text,
  } from "react-native";

const TextLink = ({text}) => {
  return (
    <TouchableOpacity>
      <Text style={styles.link}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TextLink;

const styles = StyleSheet.create({
    link: {
      color: "#364fc7",
      textDecorationLine: "underline",
    },
  });
  
