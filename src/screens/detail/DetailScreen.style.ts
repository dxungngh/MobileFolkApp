import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet } from "react-native";
import { ScreenWidth, ScreenHeight } from "@freakycoder/react-native-helpers";

interface Style {
  container: ViewStyle;
  // titleTextStyle: TextStyle;
  // buttonStyle: ViewStyle;
  // buttonTextStyle: TextStyle;
}

export default (_theme: ExtendedTheme) => {
  // const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      alignItems: "center",
      justifyContent: "center",
      width: ScreenWidth,
      height: ScreenHeight,
    },
    // titleTextStyle: {
    //   fontSize: 32,
    // },
    // buttonStyle: {
    //   height: 45,
    //   width: "90%",
    //   marginTop: 32,
    //   borderRadius: 12,
    //   alignItems: "center",
    //   justifyContent: "center",
    //   backgroundColor: colors.primary,
    //   shadowRadius: 5,
    //   shadowOpacity: 0.7,
    //   shadowColor: colors.primary,
    //   shadowOffset: {
    //     width: 0,
    //     height: 3,
    //   },
    // },
    // buttonTextStyle: {
    //   color: colors.text,
    //   fontWeight: "700",
    // },
  });
};
