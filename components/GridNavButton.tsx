import { View, TouchableOpacity, Text } from 'react-native'

import { useNavigation } from "@react-navigation/native";


const GridNavButton = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.btnContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("HskMultiGame")} style={styles.btn}>
                <Text style={styles.btnText}>
                    {props.btnText}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    btnText: {
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        flex: 1

    },
    btn: {
        height: 100,
        width: 150,
        backgroundColor: '#212121',
        textAlignVertical: 'center',
        borderRadius: 20
        
        
    },
    btnContainer: {
        justifyContent: 'center',
        textAlignVertical: 'center',
        padding: 10
    }
}

export default GridNavButton