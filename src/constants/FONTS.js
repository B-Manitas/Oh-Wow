import * as Font from "expo-font";

export default useFonts = async () =>
  await Font.loadAsync({
    title: require("fonts/font.ttf"),
  });
