import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import MenuProduct from '../components/Product/MenuProduct';
import MainHeader from '../components/Header/MainHeader';
import {POPULAR, Top_Sell} from '../data';
import ProductItem from '../components/Product/ProductItem';
import instance from '../routes/instance';

const ProductScreen = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await instance.get('/api/products');
      setProduct(data);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <View style={{flex: 1}}>
      <MainHeader />
      <MenuProduct list={Top_Sell} />
      <ProductItem list={POPULAR} />
    </View>
  );
};

export default ProductScreen;
