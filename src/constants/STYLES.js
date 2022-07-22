import { StyleSheet } from "react-native";

export const STYLES_NAV = StyleSheet.create({
  section: { paddingVertical: 10, borderBottomWidth: 1 },
  navButton: { width: "100%", marginVertical: 5, alignItems: "flex-start" },
  navText: { fontSize: 20 },
});

export const STYLES_LINK = StyleSheet.create({
  text: {
    textDecorationLine: "underline",
    marginTop: 10,
  },
});

export const STYLES_SHADOW = {
  low: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
};
