import { Text, TouchableOpacity, View } from "react-native";
import GridNavButton from "./GridNavButton";
const GameNav = () => {

    return(
        <View style={styles.screenContainer}>
            <View style={styles.btnContainer}>
                <GridNavButton level={1} btnText='一' />
                <GridNavButton level={2} btnText='二' />
            </View>
            <View style={styles.btnContainer}>
                <GridNavButton level={3} btnText='三' />
                <GridNavButton level={4} btnText='四' />
            </View>
            <View style={styles.btnContainer}>
                <GridNavButton level={5} btnText='五' />
                <GridNavButton level={6} btnText='六' />
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