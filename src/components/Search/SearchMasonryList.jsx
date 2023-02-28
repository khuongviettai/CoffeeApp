import React, {useEffect, useState} from 'react';
import MasonryList from '@react-native-seoul/masonry-list';
import {Text, View} from 'react-native';
import instance from '../../instance/instance';

const SearchMasonryList = () => {
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
    <MasonryList
      data={products}
      keyExtractor={item => item.id}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <View>
          <Text>123</Text>
        </View>
      )}
      refreshing={false}
    />
  );
};

export default SearchMasonryList;
