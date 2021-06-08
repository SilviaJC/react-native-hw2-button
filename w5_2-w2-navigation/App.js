import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';   //tab navigation use
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';   //tab navigation use
import { createStackNavigator } from '@react-navigation/stack';   //tab stack use
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from './src/screens/HomeScreen'
import HomeDetailScreen from './src/screens/HomeDetailScreen'
import TravelScreen from './src/screens/TravelScreen'
import TravelForeignScreen from './src/screens/TravelForeignScreen'
import TravelDomesticScreen from './src/screens/TravelDomesticScreen'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// parte III tab+stack mezcla
function MyHomeStack() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle: { backgroundColor: '#2196f3' },	//頂部 nav bar 的顏色
        headerBackTitle: 'Home',
        headerBackTitleVisible: true,     // Android
        headerTintColor: 'white',
        headerTitleStyle: { alignSelf: 'center' }     // Android
      }}
    >
      <Stack.Screen name="HomelScreen" component={HomeScreen} options={{ title: 'Bienvenido' }} />
      <Stack.Screen name="HomeDetailScreen" component={HomeDetailScreen} options={{ title: 'Bienvenido' }} />
    </Stack.Navigator>
  )
}

function TravelStack() {
  return (
    <Stack.Navigator
      initialRouteName='Travel'
      screenOptions={{
        headerStyle: { backgroundColor: '#2196f3' },	//頂部 nav bar 的顏色
        headerBackTitle: 'Travel',
        headerBackTitleVisible: true,     // Android
        headerTintColor: 'white',
        headerTitleStyle: { alignSelf: 'center' }
      }}
    >
      <Stack.Screen name="TravelScreen" component={TravelScreen} options={{ title: 'Viajes' }} />
      <Stack.Screen name="TravelDomesticScreen" component={TravelDomesticScreen} options={{ title: '國內旅行' }} />
      <Stack.Screen name="TravelForeignScreen" component={TravelForeignScreen} options={{ title: '國外旅行' }} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>

      {/* parte III tab+stack mezcla */}
      <Tab.Navigator
        // initialRouteName='Travel'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, focused }) => {
            let iconName
            if (route.name == 'Home') {
              iconName = focused ? 'md-home' : 'disc-outline'
              // return <Ionicons name={iconName} size={25} color={color} />
            } else if (route.name == 'Travel') {
              iconName = focused ? 'airplane-sharp' : 'airplane-outline'
              // 外部引用圖片
              // return <Image
              //   style={{ width: 30, height: 30 }}
              //   source={{ uri: 'https://lh3.googleusercontent.com/proxy/6zIAyQpda0VFX8XgAblr_uaM7Ko4OkyqjspHXW4skWL4OLJA1LOtvG2ZHnH1i9fQNfrqXGAi6ATWxrHyWTr5fyLLF8qheEp4f2-j1Q' }}
              // />
            }
            return <Ionicons name={iconName} size={25} color={color} />
          }
        })}
        tabBarOptions={{
          activeTintColor: '#2196f3',
          inactiveTintColor: 'gray'
        }}
      >
        <Tab.Screen name="Home" component={MyHomeStack} />
        <Tab.Screen name="Travel" component={TravelStack} />
      </Tab.Navigator>


      {/* parte II 基礎練習 Stack
      <Stack.Navigator
        initialRouteName='Home'
        headerMode='screen'
        screenOptions={{
          headerStyle: { backgroundColor: 'tomato' },	//頂部 nav bar 的顏色
        headerBackTitle: '返回',
        headerBackTitleVisible: true,     // Android
        headerTintColor: 'white',
        headerTitleStyle: { alignSelf: 'center' }
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="HomeDetailScreen" component={HomeDetailScreen} options={{ title: 'My Detail' }} />
      </Stack.Navigator> */}


      {/* parte I 基礎練習 Tab
      <Tab.Navigator
        initialRouteName='Settings'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, focused }) => {
            let iconName
            if (route.name == 'Home') {
              iconName = focused ? 'md-home' : 'disc-outline'
              // return <Ionicons name={iconName} size={25} color={color} />
            } else if (route.name == 'Settings') {
              iconName = focused ? 'brush' : 'options'
              // 外部引用圖片
              // return <Image
              //   style={{ width: 30, height: 30 }}
              //   source={{ uri: 'https://lh3.googleusercontent.com/proxy/6zIAyQpda0VFX8XgAblr_uaM7Ko4OkyqjspHXW4skWL4OLJA1LOtvG2ZHnH1i9fQNfrqXGAi6ATWxrHyWTr5fyLLF8qheEp4f2-j1Q' }}
              // />
            }
            return <Ionicons name={iconName} size={25} color={color} />
          }
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray'
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={ProfileScreen} />
      </Tab.Navigator> */}


    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
