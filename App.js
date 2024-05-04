import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useFonts } from 'expo-font'; 
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from 'react';
import ProductDetails from './screens/ProductDetails';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigator from './navigation/BottomNavigator';
import { Cart } from './screens';




const Stack = createNativeStackNavigator();


export default function App() {

  const [fontsLoaded] = useFonts({
    regular: require ("./assets/fonts/Poppins-Regular.ttf"),
    light: require ("./assets/fonts/Poppins-Light.ttf"),
    bold: require ("./assets/fonts/Poppins-Bold.ttf"),
    medium: require ("./assets/fonts/Poppins-Medium.ttf"),
    semibold: require ("./assets/fonts/Poppins-SemiBold.ttf"),
    extrabold: require ("./assets/fonts/Poppins-ExtraBold.ttf"),

  })

    const onLayoutRootView = useCallback(async () =>{

      if(fontsLoaded){
        await SplashScreen.hideAsync();
      }
    }, [fontsLoaded]);

    if(!fontsLoaded){
      return null;
    }






  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
      name='Bottom Navigation'
      component={BottomNavigator}
      options={{headerShown:false}}
      />

<Stack.Screen
      name='Cart'
      component={Cart}
      options={{headerShown:false}}
      />
      </Stack.Navigator>
    </NavigationContainer>
  ); 
  
}

