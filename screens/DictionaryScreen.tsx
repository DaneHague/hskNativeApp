import { FlatList, ScrollView, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import  HomeNav from '../components/HomeNav';
import { SetStateAction, useEffect, useState } from 'react';

export default function DictionaryScreen({ navigation }: RootTabScreenProps<'DictionaryScreen'>) {
    const [hanziData, setHanziData] = useState<any[]>([])
    useEffect(() => {
        _getAllHanzi()
    }, [])

    function setData(_data: []){
        const newData = _data;
        setHanziData(newData);
    }

    async function _getAllHanzi(){
       await fetch('https://projectapi20220721100727.azurewebsites.net/api/hanzis/')
        .then((res) => res.json())
        .then((data) => setData(data));
    }
      
      const Item = ({ hanzi, pinyin, translation1, translation2, translation3, level }:any) => (
        <View >
          <Text >{hanzi}-{pinyin}-{translation1}-{translation2}-{translation3}-{level}</Text>
        </View>
      );

      const keyExtractor = (item:any) => item.id;
      const renderItem = ({ item }:any) => <Item hanzi={item.hanziCharacter} pinyin={item.pinyin} translation1={item.translation1} translation2={item.translation2} translation3={item.translation3} />;

      const ITEM_HEIGHT = 10; // fixed height of item component
      const getItemLayout = (data:any, index:number) => {
          return {
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * data.length,
          index,
  };
};
      
      
  return (
      <FlatList data={hanziData} renderItem={renderItem} keyExtractor={keyExtractor} getItemLayout={getItemLayout} />
  );
}
