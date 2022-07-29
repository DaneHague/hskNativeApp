import { FlatList, ScrollView, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import  HomeNav from '../components/HomeNav';
import { SetStateAction, useEffect, useState } from 'react';
import * as RNFS from 'react-native-fs';
import  HskData from '../assets/HskData/hsk3.json';

export default function DictionaryScreen({ navigation }: RootTabScreenProps<'DictionaryScreen'>) {

      const Item = ({id, hanzi, pinyin, translation1, translation2, translation3 }:any) => (
        <View >
          <Text >{id}-{hanzi}-{pinyin}-{translation1}-{translation2}-{translation3}- Level 1</Text>
        </View>
      );

      const keyExtractor = (item:any) => item.id;
      const renderItem = ({ item }:any) => <Item id={item.id} hanzi={item.hanzi} pinyin={item.pinyin} />;

      const ITEM_HEIGHT = 10; // fixed height of item component
      const getItemLayout = (data:any, index:number) => {
          return {
          length: ITEM_HEIGHT,
          offset: 20,
          index,
  };
};
      
      
  return (
      <FlatList maxToRenderPerBatch={150} data={HskData} renderItem={renderItem} keyExtractor={keyExtractor} />
  );
}
