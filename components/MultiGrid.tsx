import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, BackHandler } from "react-native";
import { useState, useContext, createContext } from "react";

const MultiGrid = (props:any) => {
    const [btn1Disabled, setBtn1Disabled] = useState(false);
    const [btn2Disabled, setBtn2Disabled] = useState(false);
    const [btn3Disabled, setBtn3Disabled] = useState(false);
    const [btn4Disabled, setBtn4Disabled] = useState(false);
    const [btn1State, setBtn1State] = useState(props.initialBtnStateVal);
    const [btn2State, setBtn2State] = useState(props.initialBtnStateVal);
    const [btn3State, setBtn3State] = useState(props.initialBtnStateVal);
    const [btn4State, setBtn4State] = useState(props.initialBtnStateVal);



    const checkAnswer = (answer:any, btn:number) => {
        if (answer == props.data[props.answer].pinyin) {
            switch(btn){
                case 1:
                    setBtn1State(2);

                    break;
                case 2:
                    setBtn2State(2);

                    break;
                case 3:
                    setBtn3State(2);

                    break;
                case 4:
                    setBtn4State(2);
                    
                    break;
            }
            setBtn1Disabled(true);
            setBtn2Disabled(true);
            setBtn3Disabled(true);
            setBtn4Disabled(true);
            props.setdisableNxtBtn(false)
        } else {
            switch(btn){
                case 1:
                    setBtn1State(1);
                    setBtn1Disabled(true);
                    break;
                case 2:
                    setBtn2State(1);
                    setBtn2Disabled(true);
                    break;
                case 3:
                    setBtn3State(1);
                    setBtn3Disabled(true);
                    break;
                case 4:
                    setBtn4State(1);
                    setBtn4Disabled(true);
                    break;
            }
        }
    }

    useEffect(() => {
        setBtn1State(props.initialBtnStateVal);
        setBtn2State(props.initialBtnStateVal);
        setBtn3State(props.initialBtnStateVal);
        setBtn4State(props.initialBtnStateVal);
        setBtn1Disabled(false);
        setBtn2Disabled(false);
        setBtn3Disabled(false);
        setBtn4Disabled(false);
    },[props.data])

    return (
        <View style={{flex:1}}>
            <Text style={defaultStyle.title}>Hsk {props.level}</Text>
            <View style={defaultStyle.gridContainer}>
                <Text style={defaultStyle.bg}>{props.data[props.answer].pinyin}</Text>
                <View style={defaultStyle.gridRowBtns}>
                        <TouchableOpacity disabled={btn1Disabled} onPress={() => checkAnswer(props.data[0].pinyin, 1)} style={defaultStyle.btnContainer}>
                            <Text style={btn1State === 0 ? defaultStyle.btnGrid1 : btn1State === 1 ? defaultStyle.btnGrid2 : defaultStyle.btnGrid3}>
                                {props.data[0].hanzi}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={btn2Disabled} onPress={() => checkAnswer(props.data[1].pinyin, 2)} style={defaultStyle.btnContainer}>
                            <Text style={btn2State === 0 ? defaultStyle.btnGrid1 : btn2State === 1 ? defaultStyle.btnGrid2 : defaultStyle.btnGrid3}>
                                {props.data[1].hanzi}
                            </Text>
                        </TouchableOpacity>
                </View>
                <View style={defaultStyle.gridRowBtns}>
                        <TouchableOpacity disabled={btn3Disabled} onPress={() => checkAnswer(props.data[2].pinyin, 3)} style={defaultStyle.btnContainer}>
                            <Text style={btn3State === 0 ? defaultStyle.btnGrid1 : btn3State === 1 ? defaultStyle.btnGrid2 : defaultStyle.btnGrid3}>
                                {props.data[2].hanzi}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={btn4Disabled} onPress={() => checkAnswer(props.data[3].pinyin, 4)} style={defaultStyle.btnContainer}>
                            <Text style={btn4State === 0 ? defaultStyle.btnGrid1 : btn4State === 1 ? defaultStyle.btnGrid2 : defaultStyle.btnGrid3}>
                                {props.data[3].hanzi}
                            </Text>
                        </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


let defaultStyle = StyleSheet.create({
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
});

export default MultiGrid;