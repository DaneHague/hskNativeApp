import { View, Text, TouchableOpacity } from 'react-native';
import HskData1 from '../assets/HskData/hsk1.json'
import HskData2 from '../assets/HskData/hsk2.json'
import HskData3 from '../assets/HskData/hsk3.json'
import HskData4 from '../assets/HskData/hsk4.json'
import HskData5 from '../assets/HskData/hsk5.json'
import HskData6 from '../assets/HskData/hsk6.json'
import { useEffect, useState } from 'react';
import { breakStatement } from '@babel/types';


const MatchGame = (props:any) => {
    const [hanzi1, setHanzi1] = useState();
    const [hanzi2, setHanzi2] = useState();
    const [hanzi3, setHanzi3] = useState();
    const [hanzi4, setHanzi4] = useState();
    const [pinyin1, setPinyin1] = useState();
    const [pinyin2, setPinyin2] = useState();
    const [pinyin3, setPinyin3] = useState();
    const [pinyin4, setPinyin4] = useState();
    const [hanzi1State, setHanzi1State] = useState(0);
    const [hanzi2State, setHanzi2State] = useState(0);
    const [hanzi3State, setHanzi3State] = useState(0);
    const [hanzi4State, setHanzi4State] = useState(0);
    const [pinyin1State, setPinyin1State] = useState(0);
    const [pinyin2State, setPinyin2State] = useState(0);
    const [pinyin3State, setPinyin3State] = useState(0);
    const [pinyin4State, setPinyin4State] = useState(0);
    const [hanzi1Disabled, setHanzi1Disabled] = useState(false);
    const [hanzi2Disabled, setHanzi2Disabled] = useState(false);
    const [hanzi3Disabled, setHanzi3Disabled] = useState(false);
    const [hanzi4Disabled, setHanzi4Disabled] = useState(false);
    const [pinyin1Disabled, setPinyin1Disabled] = useState(false);
    const [pinyin2Disabled, setPinyin2Disabled] = useState(false);
    const [pinyin3Disabled, setPinyin3Disabled] = useState(false);
    const [pinyin4Disabled, setPinyin4Disabled] = useState(false);
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answers, setAnswers] = useState({});
    const [activeButton1, setActiveButton1] = useState(0);
    const [answerTotal, setAnswerTotal] = useState(0);
    const [answerEnglish, setAnswerEnglish] = useState('');

    useEffect(() =>{
        InitialiseGame();
    },[])

    function checkAnswer(answer:any, button:number){
        switch(button){
            case 1:
                setHanzi1State(1);
                setHanzi1Disabled(true);
                break;
            case 2:
                setPinyin1State(1);
                setPinyin1Disabled(true);
                break;
            case 3:
                setPinyin2State(1);
                setPinyin2Disabled(true);
                break;
            case 4:
                setHanzi2State(1);
                setHanzi2Disabled(true);
                break;
            case 5:
                setPinyin3State(1);
                setPinyin3Disabled(true);
                break;
            case 6:
                setHanzi3State(1);
                setHanzi3Disabled(true);
                break;
            case 7:
                setHanzi4State(1);
                setHanzi4Disabled(true);
                break;
            case 8:
                setPinyin4State(1);
                setPinyin4Disabled(true);
                break;
        }
        
        if (answer1 == ''){
            setActiveButton1(button);
            setAnswer1(answer);
        } else {
            

            let answerLocation1 = answers.pinyin.indexOf(answer1) >=0 ? answers.pinyin.indexOf(answer1) : answers.hanzi.indexOf(answer1);
            let answerLocation2 = answers.pinyin.indexOf(answer) >=0 ? answers.pinyin.indexOf(answer) : answers.hanzi.indexOf(answer);
            
            if(answerLocation1 === answerLocation2) {
                setAnswerEnglish(answers.translation[answerLocation1]);
                console.log(answers.translation[answerLocation1]);
                switch(button){
                    case 1:
                        setHanzi1State(2);
                        setHanzi1Disabled(true);
                        break;
                    case 2:
                        setPinyin1State(2);
                        setPinyin1Disabled(true);
                        break;
                    case 3:
                        setPinyin2State(2);
                        setPinyin2Disabled(true);
                        break;
                    case 4:
                        setHanzi2State(2);
                        setHanzi2Disabled(true);
                        break;
                    case 5:
                        setPinyin3State(2);
                        setPinyin3Disabled(true);
                        break;
                    case 6:
                        setHanzi3State(2);
                        setHanzi3Disabled(true);
                        break;
                    case 7:
                        setHanzi4State(2);
                        setHanzi4Disabled(true);
                        break;
                    case 8:
                        setPinyin4State(2);
                        setPinyin4Disabled(true);
                        break;
                }

                switch(activeButton1){
                    case 1:
                        setHanzi1State(2);
                        setHanzi1Disabled(true);
                        break;
                    case 2:
                        setPinyin1State(2);
                        setPinyin1Disabled(true);
                        break;
                    case 3:
                        setPinyin2State(2);
                        setPinyin2Disabled(true);
                        break;
                    case 4:
                        setHanzi2State(2);
                        setHanzi2Disabled(true);
                        break;
                    case 5:
                        setPinyin3State(2);
                        setPinyin3Disabled(true);
                        break;
                    case 6:
                        setHanzi3State(2);
                        setHanzi3Disabled(true);
                        break;
                    case 7:
                        setHanzi4State(2);
                        setHanzi4Disabled(true);
                        break;
                    case 8:
                        setPinyin4State(2);
                        setPinyin4Disabled(true);
                        break;
                }
                setAnswerTotal(answerTotal + 1);
            } else {
                switch(button){
                    case 1:
                        setHanzi1State(0);
                        setHanzi1Disabled(false);
                        break;
                    case 2:
                        setPinyin1State(0);
                        setPinyin1Disabled(false);
                        break;
                    case 3:
                        setPinyin2State(0);
                        setPinyin2Disabled(false);
                        break;
                    case 4:
                        setHanzi2State(0);
                        setHanzi2Disabled(false);
                        break;
                    case 5:
                        setPinyin3State(0);
                        setPinyin3Disabled(false);
                        break;
                    case 6:
                        setHanzi3State(0);
                        setHanzi3Disabled(false);
                        break;
                    case 7:
                        setHanzi4State(0);
                        setHanzi4Disabled(false);
                        break;
                    case 8:
                        setPinyin4State(0);
                        setPinyin4Disabled(false);
                        break;
                }

                switch(activeButton1){
                    case 1:
                        setHanzi1State(0);
                        setHanzi1Disabled(false);
                        break;
                    case 2:
                        setPinyin1State(0);
                        setPinyin1Disabled(false);
                        break;
                    case 3:
                        setPinyin2State(0);
                        setPinyin2Disabled(false);
                        break;
                    case 4:
                        setHanzi2State(0);
                        setHanzi2Disabled(false);
                        break;
                    case 5:
                        setPinyin3State(0);
                        setPinyin3Disabled(false);
                        break;
                    case 6:
                        setHanzi3State(0);
                        setHanzi3Disabled(false);
                        break;
                    case 7:
                        setHanzi4State(0);
                        setHanzi4Disabled(false);
                        break;
                    case 8:
                        setPinyin4State(0);
                        setPinyin4Disabled(false);
                        break;
                }
            }
            

            // reset for next answer
            setAnswer1('');
            setAnswer2('');

            if (answerTotal >= 3){
                InitialiseGame();
            }
        }
        
    }
    
    function SelectRandomData(hskData:any){
        var fullCopyData = [...hskData];
        var returnData = [];
        for (let i = 0; i < 4; i++){
            var rnd = Math.floor(Math.random() * fullCopyData.length)
            returnData.push(fullCopyData[rnd]);
            fullCopyData.splice(rnd,1);
        }
        return returnData;
    }

    function SelectHanziAndPinyin(selectedData:any){
        var hazniData = [...selectedData];
        var pinyinData = [...selectedData];
        var tmpHanzi = [];
        var tmpPinyin = [];
        var rnd;
        var minusCounter = 4;
        var answers = {'hanzi' : [''], 'pinyin': [''], 'translation' : ['']};
        

        for (let i = 0; i < 4; i++){
            rnd = Math.floor(Math.random() * minusCounter)
            tmpHanzi.push(hazniData[rnd].hanzi);
            answers.hanzi.push(hazniData[rnd].hanzi);
            answers.pinyin.push(hazniData[rnd].pinyin);
            answers.translation.push(hazniData[rnd].translations[0])
            hazniData.splice(rnd, 1);
            minusCounter--;
        }
        minusCounter = 4
        for (let i = 0; i < 4; i++){
            rnd = Math.floor(Math.random() * minusCounter)
            tmpPinyin.push(pinyinData[rnd].pinyin);
            pinyinData.splice(rnd, 1);
            minusCounter--;
        }
        setHanzi1(tmpHanzi[0]);
        setHanzi2(tmpHanzi[1]);
        setHanzi3(tmpHanzi[2]);
        setHanzi4(tmpHanzi[3]);
        setPinyin1(tmpPinyin[0]);
        setPinyin2(tmpPinyin[1]);
        setPinyin3(tmpPinyin[2]);
        setPinyin4(tmpPinyin[3]);

        answers.hanzi.splice(0,1);
        answers.pinyin.splice(0,1);
        answers.translation.splice(0,1);
        setAnswers(answers);
    }

    var hskData;
    function InitialiseGame() {
        setHanzi1State(0);
        setHanzi2State(0);
        setHanzi3State(0);
        setHanzi4State(0);
        setPinyin1State(0);
        setPinyin2State(0);
        setPinyin3State(0);
        setPinyin4State(0);
        setAnswerTotal(0);
        setActiveButton1(0);
        setHanzi1Disabled(false);
        setHanzi2Disabled(false);
        setHanzi3Disabled(false);
        setHanzi4Disabled(false);
        setPinyin1Disabled(false);
        setPinyin2Disabled(false);
        setPinyin3Disabled(false);
        setPinyin4Disabled(false);



        switch(props.route.params.level){
            case 1:
                hskData = HskData1
                break;
            case 2:
                hskData = HskData2
                break;
            case 3:
                hskData = HskData3
                break;
            case 4:
                hskData = HskData4
                break;
            case 5:
                hskData = HskData5
                break;
            case 6:
                hskData = HskData6
                break;
            default:
                hskData = HskData1
                break;
        }

        
       hskData = SelectRandomData(hskData);
       SelectHanziAndPinyin(hskData);
    }


    return (
        <View style={styles.container}>
            <Text style={styles.header}>Hsk {props.route.params.level}</Text>
            <Text style={styles.txtEnglishAnswer}>{answerEnglish}</Text>
            <View style={styles.screenContainer}>
                <View style={styles.btnContainer}>
                    <TouchableOpacity disabled={hanzi1Disabled} style={hanzi1State === 0 ? styles.btn1 : hanzi1State === 1 ? styles.btn2 : styles.btn3} onPress={() => checkAnswer(hanzi1,1)} >
                        <Text style={styles.btnText}>{hanzi1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={pinyin1Disabled} style={pinyin1State === 0 ? styles.btn1 : pinyin1State === 1 ? styles.btn2 : styles.btn3}  onPress={() => checkAnswer(pinyin1,2)}>
                        <Text style={styles.btnText}>{pinyin1}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity disabled={pinyin2Disabled} style={pinyin2State === 0 ? styles.btn1 : pinyin2State === 1 ? styles.btn2 : styles.btn3} onPress={() => checkAnswer(pinyin2,3)}>
                        <Text style={styles.btnText}>{pinyin2}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={hanzi2Disabled} style={hanzi2State === 0 ? styles.btn1 : hanzi2State === 1 ? styles.btn2 : styles.btn3}  onPress={() => checkAnswer(hanzi2,4)}>
                        <Text style={styles.btnText}>{hanzi2}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity disabled={pinyin3Disabled} style={pinyin3State === 0 ? styles.btn1 : pinyin3State === 1 ? styles.btn2 : styles.btn3} onPress={() => checkAnswer(pinyin3,5)}>
                        <Text style={styles.btnText}>{pinyin3}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={hanzi3Disabled} style={hanzi3State === 0 ? styles.btn1 : hanzi3State === 1 ? styles.btn2 : styles.btn3} onPress={() => checkAnswer(hanzi3,6)}>
                        <Text style={styles.btnText} >{hanzi3}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity disabled={hanzi4Disabled} style={hanzi4State === 0 ? styles.btn1 : hanzi4State === 1 ? styles.btn2 : styles.btn3}  onPress={() => checkAnswer(hanzi4,7)}>
                        <Text style={styles.btnText}>{hanzi4}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={pinyin4Disabled} style={pinyin4State === 0 ? styles.btn1 : pinyin4State === 1 ? styles.btn2 : styles.btn3} onPress={() => checkAnswer(pinyin4,8)}>
                        <Text style={styles.btnText}>{pinyin4}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        
    )
}


const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'white'
      },
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        flex: 1,
        fontSize: 30

    },
    btn1: {
        height: 100,
        width: 150,
        backgroundColor: 'orange',
        textAlignVertical: 'center',
        marginRight: 10
    },
    btn2: {
        height: 100,
        width: 150,
        backgroundColor: 'black',
        textAlignVertical: 'center',
        marginRight: 10
    },
    btn3: {
        height: 100,
        width: 150,
        backgroundColor: 'green',
        textAlignVertical: 'center',
        marginRight: 10
    },
    btnContainer: {
        flexDirection: 'row',
        padding: 10,
    },
    txtEnglishAnswer: {
        fontSize: 15,
    },
    header: {
        fontSize: 30,
    }
}

export default MatchGame;