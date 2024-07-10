import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';

const ProductDetail = ({ product }) => {
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.sectionTitle}>MATERIALS</Text>
        <Text style={styles.materials}>{product.description}</Text>
        <View style={styles.instructions}>
          <Text>Do not use bleach</Text>
          <Text>Do not tumble dry</Text>
          <Text>Dry clean with tetrachloroethylene</Text>
          <Text>Iron at a maximum of 110ºC/230ºF</Text>
        </View>
        <View style={styles.shipping}>
          <Text>Free Flat Rate Shipping</Text>
          <Text>Estimated to be delivered on 09/11/2021 - 12/11/2021</Text>
        </View>
        <Button title="ADD TO BASKET" onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    color: 'red',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  materials: {
    fontSize: 16,
    marginVertical: 10,
  },
  instructions: {
    marginVertical: 10,
  },
  shipping: {
    marginVertical: 20,
  },
});

export default ProductDetail;
