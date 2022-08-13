import { Text, TouchableOpacity, View } from "react-native";
import GridNavButton from "./GridNavButton";
const GameNav = (props:any) => {

    return(
        <View style={styles.screenContainer}>
            <View style={styles.btnContainer}>
                <GridNavButton navigateTo={props.nav} level={1} btnText='一' />
                <GridNavButton navigateTo={props.nav} level={2} btnText='二' />
            </View>
            <View style={styles.btnContainer}>
                <GridNavButton navigateTo={props.nav} level={3} btnText='三' />
                <GridNavButton navigateTo={props.nav} level={4} btnText='四' />
            </View>
            <View style={styles.btnContainer}>
                <GridNavButton navigateTo={props.nav} level={5} btnText='五' />
                <GridNavButton navigateTo={props.nav} level={6} btnText='六' />
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