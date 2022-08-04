
import { View, Text } from 'react-native';
import GameNav from '../components/GameNav';
export default function PairLevelNav() {
    return (
        <View style={styles.container}>
            <Text>Pair Nav</Text>
            <GameNav nav='PairNavScreen' />
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
      },
}