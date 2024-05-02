import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';

const ProductDetails = () => {
    const[products, setProducts] = useState([]);
    useEffect(() =>{
    getProducts();
  }, []); 

  const getProducts = () =>{
    const URL= "https://fakestoreapi.com/products";

    fetch(URL).then((res) =>{
       return res.json(); //convert to readable format
    }).then(data=>{
        setProducts(data);
        console.log(data);
    }) 

  }
  
  return (
    <View>
      <Text>ProductDetails</Text>
      <FlatList 

      showsVerticalScrollIndicator = {false}

      data ={products} 
      renderItem={({item})=> (

      <View style={styles.cardContainer}>
      <Image source={{ uri: item.image }} style={styles.image}/>
      <Text>{item.title}</Text>
      <Text>{item.price}</Text>
      </View>

      )}
      />
      </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4,
        marginTop: 20
    },
    image: {
        height: 200,
        width: 200
    },
    errorStyle: {
        color: 'red',
        fontSize: 18
    }
})