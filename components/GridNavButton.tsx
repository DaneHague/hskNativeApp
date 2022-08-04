import { View, TouchableOpacity, Text } from 'react-native'

import { useNavigation } from "@react-navigation/native";


const GridNavButton = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.btnContainer}>
            <TouchableOpacity onPress={() => navigation.navigate(props.navigateTo,{level: props.level})} style={styles.btn}>
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
        flex: 1,
        fontSize: 30

    },
    btn: {
        height: 100,
        width: 150,
        backgroundColor: 'orange',
        textAlignVertical: 'center',
        
        
    },
    btnContainer: {
        justifyContent: 'center',
        textAlignVertical: 'center',
        padding: 10
    }
}

export default GridNavButton