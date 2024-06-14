import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Favorite} from './component/tab/Favourite';
import Main from './component/tab/Main';
import {PRIMARY, PRIMARY_ACCENT} from './utils/colors';
import {NEXA_LIGHT, NEXA_TEXT_BOLD, NEXA_TEXT_LIGHT} from './utils/fonts';
import Settings from './component/tab/Settings';
import {Image} from 'react-native';
import Icon from 'react-native-ionicons';
import { Menu } from '../assets/images';

const Tab = createBottomTabNavigator();

export function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: PRIMARY,
          borderRadius: 20,
          padding: 20,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Main}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontFamily: NEXA_LIGHT,
            marginTop: 10
          },
          tabBarIcon: ({color, size}) => {
            return (
              <Image
                style={{width: 35, height: 35}}
                source={Menu} 
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontFamily: NEXA_LIGHT,
            marginTop: 10
          },
          tabBarIcon: ({color, size}) => {
            return (
              <Image
                style={{width: 35, height: 35}}
                source={Menu} 
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontFamily: NEXA_LIGHT,
            marginTop: 10
          },
          tabBarIcon: ({color, size}) => {
            return (
              <Image
                style={{width: 35, height: 35}}
                source={Menu} 
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
