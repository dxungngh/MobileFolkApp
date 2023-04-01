import { ScreenWidth } from "@freakycoder/react-native-helpers";
import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  contentContainer: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      marginTop: 16,
      width: ScreenWidth * 0.9,
      backgroundColor: colors.dynamicBackground,
      alignItems: "center",
    },
    contentContainer: {
      flexDirection: "row",
    },
  });
};
