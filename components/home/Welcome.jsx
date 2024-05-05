import { View, Text } from 'react-native'
import React from 'react'
import styles from './welcome.style'
import { COLORS, SIZES } from '../../constants'

const Welcome = () => {
  return (
    <View>

        <View style={styles.container}>
        <Text style={styles.welcomeTxt(COLORS.black)}> Spend with joy</Text>

        <Text style={styles.welcomeTxt(COLORS.primary, 0)}> Here in Kyushu</Text>
        </View>

        <View>
            
        </View>

    </View>
  )
}

export default Welcome