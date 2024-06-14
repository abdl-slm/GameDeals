import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { MainTabs } from './src/MainTabs';
import Detail from './src/component/tab/Detail';
import { PRIMARY_ACCENT } from './src/utils/colors';
import { NEXA_LIGHT } from './src/utils/fonts';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: PRIMARY_ACCENT
  },
};

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer theme={MyTheme}>
      {
        <Stack.Navigator screenOptions={{
          headerTitle: 'Sweet Deals',
          headerTitleStyle: {fontFamily: NEXA_LIGHT},
          headerStyle: {backgroundColor: PRIMARY_ACCENT}
        }}>
          <Stack.Screen name="Tab" component={MainTabs} />
          <Stack.Screen name="Detail" component={Detail}/>
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}