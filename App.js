import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font'; 
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from 'react';
import ProductDetails from './screens/ProductDetails';



export default function App() {

  const [fontsLoaded] = useFonts({
    regular: require ("./assets/fonts/Poppins-Regular.ttf"),
    light: require ("./assets/fonts/Poppins-Light.ttf"),
    bold: require ("./assets/fonts/Poppins-Bold.ttf"),
    medium: require ("./assets/fonts/Poppins-Medium.ttf"),
    semibold: require ("./assets/fonts/Poppins-SemiBold.ttf"),
    extrabold: require ("./assets/fonts/Poppins-ExtraBold.ttf"),

  })



  return (
    <View style={styles.container}>
      <ProductDetails/>

      <StatusBar style="auto" />
    </View>
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
