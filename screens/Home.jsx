import {TouchableOpacity, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather, Ionicons } from '@expo/vector-icons'
import styles from './home.style' 
import ProductDetails from './ProductDetails'
import { Welcome } from '../components'





const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name='location-outline' size={24}/>

          <Text style={styles.location}>Tokyo, Japan</Text>

          <View style ={{alignItems: "flex-end"}}>
                    <View style={styles.cartCount}>
                    <Text style={styles.cartNumber}>4</Text>
                    </View>
                    <TouchableOpacity>
                    <Feather name="shopping-cart" size={24} color="black" />
                    </TouchableOpacity> 
          </View>
        </View>
      </View>
      <ScrollView>
      <Welcome/>

      


      <ProductDetails/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

