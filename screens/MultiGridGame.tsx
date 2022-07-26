import { StyleSheet } from 'react-native';
import  MultiGrid  from '../components/MultiGrid';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import HomeNav from '../components/HomeNav';
import GameNav from '../components/GameNav';

export default function MultiGridGame() {
  return (
    <View style={styles.container}>
      <GameNav nav='HskMultiGame' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  }
});
