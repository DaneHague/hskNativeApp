import { Text, TouchableOpacity, View } from "react-native";
import GridNavButton from "./GridNavButton";


const GameNav = () => {
    return(
        <View style={styles.screenContainer}>
            <View style={styles.btnContainer}>
                <GridNavButton btnText='Hsk 1' />
                <GridNavButton btnText='Hsk 2' />
            </View>
            <View style={styles.btnContainer}>
                <GridNavButton btnText='Hsk 3' />
                <GridNavButton btnText='Hsk 4' />
            </View>
            <View style={styles.btnContainer}>
                <GridNavButton btnText='Hsk 5' />
                <GridNavButton btnText='Hsk 6' />
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