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

export const STYLE_GENERAL = StyleSheet.create({
  sectionCtn: {
    marginVertical: 15,
    marginHorizontal: 30,
  },

  sectionH1: {
    fontSize: 25,
    fontWeight: "500",
    width: "100%",
    borderBottomWidth: 2,
    textDecorationLine: "underline",
    marginBottom: 10,
  },

  sectionH2: {
    fontSize: 20,
    paddingVertical: 7,
  },
});

export const STYLES_SHADOW = {
  noShadow: {
    elevation: 0,
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowColor: "transparent",
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },

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

  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
};
