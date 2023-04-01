import React, { useMemo } from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { useTheme } from "@react-navigation/native";
import FastImage from "react-native-fast-image";
import createStyles from "./CatItem.style";
import { ICatItem } from "@services/models";
import RNBounceable from "@freakycoder/react-native-bounceable";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface ICatItemProps {
  style?: CustomStyleProp;
  data: ICatItem;
  onPress: () => void;
}

const CardItem: React.FC<ICatItemProps> = ({ style, data, onPress }) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const { url, width, height } = data;

  const Content = () => (
    <FastImage
      style={{
        width: (200 / height) * width,
        height: 200,
        borderRadius: 8,
        marginVertical: 16,
      }}
      source={{
        uri: url,
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.contain}
    />
  );

  return (
    <RNBounceable style={[styles.container, style]} onPress={onPress}>
      <View style={styles.contentContainer}>
        <Content />
      </View>
    </RNBounceable>
  );
};

export default CardItem;
