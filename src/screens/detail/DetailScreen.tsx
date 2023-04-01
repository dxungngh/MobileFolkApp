import React, { useMemo } from "react";
import { useTheme } from "@react-navigation/native";
import FastImage from "react-native-fast-image";
import * as NavigationService from "react-navigation-helpers";
import createStyles from "./DetailScreen.style";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "navigation";
import RNBounceable from "@freakycoder/react-native-bounceable";

interface DetailScreenProps
  extends NativeStackScreenProps<RootStackParamList, "Detail"> {}

const DetailScreen: React.FC<DetailScreenProps> = ({ route }) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const { url } = route.params.cat;

  return (
    <RNBounceable
      style={styles.container}
      onPress={() => NavigationService.goBack()}
    >
      <FastImage
        style={{ width: "100%", height: "100%" }}
        source={{
          uri: url,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </RNBounceable>
  );
};

export default DetailScreen;
