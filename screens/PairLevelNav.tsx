
import { View, Text } from 'react-native';
import GameNav from '../components/GameNav';
export default function PairLevelNav() {
    return (
        <View style={styles.container}>
            <Text>Pair Nav</Text>
            <GameNav nav='MatchGame' level={1} />
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