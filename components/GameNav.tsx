import { Text, TouchableOpacity, View } from "react-native";
import GridNavButton from "./GridNavButton";
const GameNav = () => {

    return(
        <View style={styles.screenContainer}>
            <View style={styles.btnContainer}>
                <GridNavButton level={1} btnText='Hsk 1' />
                <GridNavButton level={2} btnText='Hsk 2' />
            </View>
            <View style={styles.btnContainer}>
                <GridNavButton level={3} btnText='Hsk 3' />
                <GridNavButton level={4} btnText='Hsk 4' />
            </View>
            <View style={styles.btnContainer}>
                <GridNavButton level={5} btnText='Hsk 5' />
                <GridNavButton level={6} btnText='Hsk 6' />
            </View>
        </View>
    )
}

const styles = {
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {

    },
    btnContainer: {
        flexDirection: 'row',
        padding: 10,
    }
}


export default GameNav