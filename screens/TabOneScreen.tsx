import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import HomeNav from '../components/HomeNav';
import { Text, View, } from '../components/Themed';
import { RootTabScreenProps } from '../types';
export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>汉语水平考试</Text>
      <View style={styles.txtContainer}>
        <Text >This app is currently in development. Expect weekly updates</Text>
        <Text style={styles.txt}>Planned features:</Text>
        <Text style={styles.txt}>Track your progress</Text>
        <Text style={styles.txt}>Complete sentence activity</Text>
        <Text style={styles.txt}>Full practice tests</Text>
      </View>
      <View style={styles.container}>
      <Text style={styles.txt}>This app is free and will remain free always.</Text>
      <Text style={styles.txt}>My aim is to make the best free HSK app with no adverts.</Text>
      <Text style={styles.txt}>All feedback and feature requests are welcome.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  txtContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  txt: {
    marginBottom: 5,
    fontWeight: 'bold'
  }
});
