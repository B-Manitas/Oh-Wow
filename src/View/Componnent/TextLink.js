import { StyleSheet, TouchableOpacity, Text } from "react-native";

const TextLink = ({ text, style, pad_top }) => {
  return (
    <TouchableOpacity style={{ paddingTop: pad_top }}>
      <Text style={[styles.link, style]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TextLink;

const styles = StyleSheet.create({
  link: {
    marginBottom: 4,
  },
});
