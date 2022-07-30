import { View, TouchableOpacity, Text } from 'react-native'

const GridNavButton = (props) => {
    return (
        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>
                    test
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    btnText: {
        color: 'black',
        textAlign: 'center',
        textAlignVertical: 'center'

    },
    btn: {
        height: 100,
        width: 200,
        backgroundColor: 'red',
        textAlignVertical: 'center'
        
    },
    btnContainer: {
        justifyContent: 'center',
        textAlignVertical: 'center',
        padding: 10
    }
}

export default GridNavButton