import { StyleSheet } from 'react-native';
import  MultiGrid  from '../components/MultiGrid';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import HomeNav from '../components/HomeNav';
import GameNav from '../components/GameNav';

export default function MultiGridGame() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Multi Game</Text>
      <GameNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
