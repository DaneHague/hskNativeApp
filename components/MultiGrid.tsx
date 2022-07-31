import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, BackHandler } from "react-native";
import { useState, useContext, createContext } from "react";

const MultiGrid = (props:any) => {
    let tst = 0;
    const checkAnswer = (answer:any) => {
        if (answer == props.data[props.answer].pinyin) {
            props.setdisableNxtBtn(false)
        } else {
            tst = 1;
        }
    }
    return (
        <View style={{flex:1}}>
            <Text style={styles.title}>Hsk {props.level}</Text>
            <View style={styles.gridContainer}>
                <Text style={styles.bg}>{props.data[props.answer].pinyin}</Text>
                <View style={styles.gridRowBtns}>
                        <TouchableOpacity onPress={() => checkAnswer(props.data[0].pinyin)} style={styles.btnContainer}>
                            <Text style={tst === 0 ? styles.btnGrid1 : styles.btnGrid2}>
                                {props.data[0].hanzi}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => checkAnswer(props.data[1].pinyin)} style={styles.btnContainer}>
                            <Text style={styles.btnGrid1}>
                                {props.data[1].hanzi}
                            </Text>
                        </TouchableOpacity>
                </View>
                <View style={styles.gridRowBtns}>
                        <TouchableOpacity onPress={() => checkAnswer(props.data[2].pinyin)} style={styles.btnContainer}>
                            <Text style={styles.btnGrid1}>
                                {props.data[2].hanzi}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => checkAnswer(props.data[3].pinyin)} style={styles.btnContainer}>
                            <Text style={styles.btnGrid1}>
                                {props.data[3].hanzi}
                            </Text>
                        </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: 'white',
        textAlign: 'center',
    },
    bg: {
        color: "white",
        textAlign: 'center',
        bottom: 100,
        fontSize: 50,
    },
    gridRowBtns: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    btnGrid1: {
        backgroundColor: 'orange',
        height: 100,
        width: 150,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
        borderRadius: 20
    },
    btnGrid2: {
        backgroundColor: 'red',
        height: 100,
        width: 150,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
        borderRadius: 20
    },
    btnGrid3: {
        backgroundColor: 'green',
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
        flex:1,
        justifyContent: 'center'
    }
})

export default MultiGrid;