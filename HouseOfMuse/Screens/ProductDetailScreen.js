import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProductDetail from '../Components/ProductDetail';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <ProductDetail product={product} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProductDetailScreen;
