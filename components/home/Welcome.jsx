import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import styles from './welcome.style';
import { COLORS, SIZES } from '../../constants';
import { Feather, Ionicons } from '@expo/vector-icons';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.welcomeTxt(COLORS.black)}> Spend with joy</Text>
        <Text style={styles.welcomeTxt(COLORS.primary, 0)}> Here in Japan</Text>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>

        <View style={styles.searchWrapper}>
            <TextInput
            style={styles.searchInput}
            value=''
            onPressIn={()=>{}}
            placeholder="Whatcha lookin' for Willis?"

            />
        </View>
        <View>
            <TouchableOpacity>

            </TouchableOpacity>
        </View>
      </View>
        
    </View>
  );
};

export default Welcome;
