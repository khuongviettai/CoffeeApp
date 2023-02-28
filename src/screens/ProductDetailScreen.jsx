import React, {useEffect, useRef, useState} from 'react';
import {Animated, View, ScrollView} from 'react-native';
import ProductDetailImage from '../components/ProductDetail/ProductDetailImage';
import ProductDetailInfo from '../components/ProductDetail/ProductDetailInfo';
import {colors} from '../constants/theme';
import ProductDetailButton from '../components/ProductDetail/ProductDetailButton';
import RecommendProduct from '../components/ProductDetail/RecommendProduct';
import instance from '../instance/instance';

const ProductDetailScreen = ({route}) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    instance
      .get('/api/products')
      .then(({data}) => {
        setProducts(data);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <View style={{backgroundColor: colors.bodyColor, flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        decelerationRate="normal">
        <View
          style={{
            height: 510,
            width: '100%',
          }}>
          <ProductDetailImage route={route} scrollY={scrollY} />
        </View>
        <ProductDetailInfo route={route} />
        <RecommendProduct list={products} />
      </ScrollView>
      <ProductDetailButton />
    </View>
  );
};

export default ProductDetailScreen;
