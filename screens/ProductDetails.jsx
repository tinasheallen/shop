import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ProductDetails = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Initialize as true to show the loading indicator
    const [error, setError] = useState(null);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        const URL = "https://fakestoreapi.com/products";

        // Set isLoading to true before fetching products
        setIsLoading(true);

        fetch(URL)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Error please review");
                }
                return res.json();
            })
            .then(data => {
                setProducts(data);
                setIsLoading(false); // Set isLoading to false after fetching products successfully
                console.log(data);
            })
            .catch((error) => {
                setError(error.message);
                console.log(error.message);
                setIsLoading(false); // Set isLoading to false if an error occurs
            });
    };

    return (
        <View>
            {isLoading ? (
                <ActivityIndicator color="blue" size="large" />
            ) : error ? <Text>{error}</Text>: (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={products}
                    renderItem={({ item }) => (
                        <View style={styles.cardContainer}>
                            <Image source={{ uri: item.image }} style={styles.image} />
                            <Text>{item.title}</Text>
                            <Text>{item.price}</Text>
                        </View>
                    )}
                />
            )}
        </View>
    );
};

export default ProductDetails;

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        marginTop: 20
    },
    image: {
        height: 200,
        width: 200
    }
});
