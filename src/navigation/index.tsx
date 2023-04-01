import React from "react";
import { useColorScheme } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { isReadyRef, navigationRef } from "react-navigation-helpers";
/**
 * ? Local & Shared Imports
 */
import { DarkTheme, LightTheme } from "@theme/themes";
// ? Screens
import HomeScreen from "@screens/home/HomeScreen";
import DetailScreen from "@screens/detail/DetailScreen";
import { ICatItem } from "@services/models";

export type RootStackParamList = {
  Home: undefined;
  Detail: { cat: ICatItem };
};

const RootStack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";

  React.useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
      theme={isDarkMode ? DarkTheme : LightTheme}
    >
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name={"Home"} component={HomeScreen} />
        <RootStack.Screen name={"Detail"} component={DetailScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
