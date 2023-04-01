import React, { useMemo, useEffect } from "react";
import { FlatList, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { selectCats } from "../../store/catsSlice/selectors";
import { loadCats } from "../../store/catsSlice";
import { useTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationService from "react-navigation-helpers";
import createStyles from "./HomeScreen.style";
import CatItem from "./components/cat-item/CatItem";
import { ICatItem } from "@services/models";
import Text from "@shared-components/text-wrapper/TextWrapper";
import fonts from "@fonts";

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const handleItemPress = (item: ICatItem) => {
    NavigationService.navigate("Detail", { cat: item });
  };

  const handleEndReached = () => {
    dispatch(loadCats());
  };

  const cats = useSelector(selectCats);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCats());
  }, [dispatch]);

  const List = () => (
    <View style={styles.listContainer}>
      <FlatList
        data={cats}
        renderItem={({ item }) => (
          <CatItem data={item} onPress={() => handleItemPress(item)} />
        )}
        keyExtractor={(item) => item.id}
        onEndReached={handleEndReached}
        getItemLayout={(_data, index) => ({
          length: 216,
          offset: 216 * index,
          index,
        })}
        onEndReachedThreshold={0.01}
      />
    </View>
  );

  const Welcome = () => (
    <>
      <Text h1 bold color={colors.text}>
        Hello MobileFolk
      </Text>
      <Text
        fontFamily={fonts.montserrat.lightItalic}
        color={colors.placeholder}
      >
        Welcome Back
      </Text>
    </>
  );

  const Content = () => (
    <View style={styles.contentContainer}>
      <List />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Welcome />
      <Content />
    </SafeAreaView>
  );
};

export default HomeScreen;
