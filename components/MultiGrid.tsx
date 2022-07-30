import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

const MultiGrid = (props:any) => {
    return (
        <View>
            <Text style={styles.bg}>Hsk {props.level}</Text>
            <View style={styles.gridContainer}>
                <Text style={styles.bg,{backgroundColor: 'white', textAlign: 'center', bottom:100}}>This is just a test</Text>
                <View style={styles.gridRowBtns}>
                        <TouchableOpacity style={styles.btnContainer}>
                            <Text style={styles.btnGrid}>
                                Press1
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnContainer}>
                            <Text style={styles.btnGrid}>
                                Press2
                            </Text>
                        </TouchableOpacity>
                </View>
                <View style={styles.gridRowBtns}>
                        <TouchableOpacity style={styles.btnContainer}>
                            <Text style={styles.btnGrid}>
                                Press3
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnContainer}>
                            <Text style={styles.btnGrid}>
                                Press4
                            </Text>
                        </TouchableOpacity>
                </View>
                <TouchableOpacity><Text style={{backgroundColor: 'white', top:100}}>test</Text></TouchableOpacity>
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
        backgroundColor: 'white',
        height: 50,
        width: 100,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    btnContainer: {
        margin: 10,
    },
    gridContainer: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default MultiGrid;