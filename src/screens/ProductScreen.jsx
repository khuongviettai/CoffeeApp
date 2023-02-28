import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ScrollView, View} from 'react-native';
import MenuProduct from '../components/Product/MenuProduct';
import MainHeader from '../components/Header/MainHeader';
import {Top_Sell} from '../data';
import ProductItem from '../components/Product/ProductItem';
import instance from '../instance/instance';
import ProductOption from '../components/Product/ProductOption';
import ProductsLoading from '../components/Loading/ProductsLoading';

const ProductScreen = ({route}) => {
  const [isOpen, setIsOpen] = useState(true);
  const bottomSheetRef = useRef(null);
  const snapPoints = ['80%'];
  const [products, setProducts] = useState([]);
  const [selectProduct, setSelectProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleSnapPress = useCallback((index, product) => {
    bottomSheetRef.current?.snapToIndex(index);
    setIsOpen(true);
    setSelectProduct(product);
  }, []);
  const handleClosePress = () => {
    bottomSheetRef.current.close();
    setSelectProduct(null);
  };
  // const handlePresentPress = () => bottomSheetRef.current.present();
  useEffect(() => {
    instance
      .get('/api/products')
      .then(({data}) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <View style={{flex: 1}}>
      {loading ? (
        <ProductsLoading />
      ) : (
        <>
          <MainHeader title="Sản phẩm" />
          <ScrollView showsVerticalScrollIndicator={false}>
            <MenuProduct list={Top_Sell} />
            <ProductItem
              list={products}
              handleSnapPress={handleSnapPress}
              route={route}
            />
          </ScrollView>
          <ProductOption
            productID={selectProduct?._id}
            snapPoints={snapPoints}
            bottomSheetRef={bottomSheetRef}
            handleClosePress={handleClosePress}
          />
        </>
      )}
    </View>
  );
};

export default ProductScreen;
