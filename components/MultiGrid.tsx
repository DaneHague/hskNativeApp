import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, BackHandler } from "react-native";

const MultiGrid = (props:any) => {
    return (
        <View>
            <Text style={styles.bg}>Hsk {props.level}</Text>
            <View style={styles.gridContainer}>
                <Text style={styles.bg}>This is just a test</Text>
                <View style={styles.gridRowBtns}>
                        <TouchableOpacity style={styles.btnContainer}>
                            <Text style={styles.btnGrid}>
                                {props.data[0].hanzi}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnContainer}>
                            <Text style={styles.btnGrid}>
                                {props.data[1].hanzi}
                            </Text>
                        </TouchableOpacity>
                </View>
                <View style={styles.gridRowBtns}>
                        <TouchableOpacity style={styles.btnContainer}>
                            <Text style={styles.btnGrid}>
                                {props.data[2].hanzi}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnContainer}>
                            <Text style={styles.btnGrid}>
                                {props.data[3].hanzi}
                            </Text>
                        </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    bg: {
        color: "white",
        textAlign: 'center',
    },
    gridRowBtns: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    btnGrid: {
        backgroundColor: '#212121',
        height: 100,
        width: 150,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
        borderRadius: 20
    },
    btnContainer: {
        margin: 10,
        
    },
    gridContainer: {
    }
})

export default MultiGrid;