import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, BackHandler } from "react-native";
import { useState, useContext, createContext } from "react";


const MultiGrid = (props:any) => {
    const [btn1Disabled, setBtn1Disabled] = useState(false);
    const [btn2Disabled, setBtn2Disabled] = useState(false);
    const [btn3Disabled, setBtn3Disabled] = useState(false);
    const [btn4Disabled, setBtn4Disabled] = useState(false);
    const [showEnglishAnswer, setShowEnglishAnswer] = useState(false);
    const [btn1State, setBtn1State] = useState(props.initialBtnStateVal);
    const [btn2State, setBtn2State] = useState(props.initialBtnStateVal);
    const [btn3State, setBtn3State] = useState(props.initialBtnStateVal);
    const [btn4State, setBtn4State] = useState(props.initialBtnStateVal);
    const [englishAnswer, setEnglishAnswer] = useState(props.data[props.answer].translations[0]);
    const [answer, setAsnwer] = useState(props.data[props.answer].pinyin);



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
            setShowEnglishAnswer(true);

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
        setShowEnglishAnswer(false);
        setBtn1State(props.initialBtnStateVal);
        setBtn2State(props.initialBtnStateVal);
        setBtn3State(props.initialBtnStateVal);
        setBtn4State(props.initialBtnStateVal);
        setBtn1Disabled(false);
        setBtn2Disabled(false);
        setBtn3Disabled(false);
        setBtn4Disabled(false);
        setAsnwer(props.data[props.answer].pinyin);
        setEnglishAnswer(props.data[props.answer].translations[0]);
    },[props.data])

    return (
        <View style={{flex:14}}>
            
            <View style={defaultStyle.gridContainer}>
                
                <View style={{flex:2, flexDirection:'column', alignItems:'center', top:10,}}>
                    <Text style={defaultStyle.title}>Hsk {props.level}</Text>
                    <Text style={defaultStyle.bg}>{answer}</Text>
                    <Text style={showEnglishAnswer ? defaultStyle.englishAnswer : defaultStyle.hideEnglishAnswer}>{englishAnswer} </Text>
                </View>
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


const defaultStyle = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 30,
    },
    englishAnswer: {
        textAlign: 'center',
        fontSize: 30,
    },
    hideEnglishAnswer: {
        opacity: 0,
        height: 0,
    },
    bg: {
        textAlign: 'center',
        fontSize: 50,
        padding:10,
        borderColor: 'black',
        borderRadius: 20,
        borderWidth:1,
    },
    gridRowBtns: {
        flex:1,
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
    },
    btnGrid2: {
        backgroundColor: 'red',
        height: 100,
        width: 150,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
    },
    btnGrid3: {
        backgroundColor: 'green',
        height: 100,
        width: 150,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
    },
    btnContainer: {
        margin: 10,
    },
    gridContainer: {
        flex:1,
        justifyContent: 'center',
        
    }
});

export default MultiGrid;