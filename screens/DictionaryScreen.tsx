import { FlatList, ScrollView, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import  HomeNav from '../components/HomeNav';
import { SetStateAction, useEffect, useState } from 'react';
import * as RNFS from 'react-native-fs';
import  HskAllData from '../assets/HskData/hskAll.json';

import { TextInput } from 'react-native-paper';

export default function DictionaryScreen({ navigation }: RootTabScreenProps<'DictionaryScreen'>) {

      const [filteredData, setFilteredData] = useState(HskAllData);

      const Item = ({id, hanzi, pinyin, translation1, translation2, translation3 }:any) => (
        <View style={styles.background} >
          <Text style={styles.itemContainer} >{hanzi}-{pinyin}-{translation1}{translation2 == undefined ? '' : ' - ' + translation2}{translation3 == undefined ? '' : ' - ' + translation3}</Text>
        </View>
      );

      const keyExtractor = (item:any) => item.id;
      const renderItem = ({ item }:any) => <Item hanzi={item.hanzi} pinyin={item.pinyin} translation1={item.translations[0]} translation2={item.translations[1]} translation3={item.translations[2]} />;

      const ITEM_HEIGHT = 10; // fixed height of item component
      const getItemLayout = (data:any, index:number) => {
          return {
          length: ITEM_HEIGHT,
          offset: 20,
          index,
      };
    };

  const searchHanzi = (input:any) => {
    let data = HskAllData;
    let searchData = data.filter((Item) => {
      return Item.hanzi.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    });
    setFilteredData(searchData);
  }

  return (
    <View>
      <TextInput placeholder='Search' onChangeText={(input) => {
        searchHanzi(input);
      }} 
      />
      <FlatList maxToRenderPerBatch={150} data={filteredData} renderItem={renderItem} keyExtractor={keyExtractor} />
    </View>
      
  );
}


const styles = {
  itemContainer: {
    backgroundColor: 'white',
    marginVertical:10,
    marginHorizontal: 15,
    fontSize: 25,
    color: 'black'
  },
  background: {
    backgroundColor: 'white'
  }
}