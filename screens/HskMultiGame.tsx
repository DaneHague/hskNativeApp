import { TouchableOpacity, View, Text } from 'react-native'
import MultiGrid from '../components/MultiGrid'
import HskData1 from '../assets/HskData/hsk1.json'
import HskData2 from '../assets/HskData/hsk2.json'
import HskData3 from '../assets/HskData/hsk3.json'
import HskData4 from '../assets/HskData/hsk4.json'
import HskData5 from '../assets/HskData/hsk5.json'
import HskData6 from '../assets/HskData/hsk6.json'
import { useEffect, useState } from 'react'

export default function HskMultiGame(props) {

    const [currentHskData, setCurrentHskData] = useState([{
        "id": 1,
        "hanzi": "爱",
        "pinyin": "ài",
        "translations": [
          "to love",
          "affection",
          "to be fond of",
          "to like"
        ]
      },
      {
        "id": 2,
        "hanzi": "八",
        "pinyin": "bā",
        "translations": [
          "eight",
          "8"
        ]
      },
      {
        "id": 3,
        "hanzi": "爸爸",
        "pinyin": "bà ba",
        "translations": [
          "(informal) father",
          "CL:個|个",
          "位[wèi]"
        ]
      },
      {
        "id": 4,
        "hanzi": "杯子",
        "pinyin": "bēi zi",
        "translations": [
          "cup",
          "glass",
          "CL:個|个",
          "支",
          "枝[zhī]"
        ]
      }]);
    let data;

    useEffect(() => {
        loadData();
    },[]) 
    
    const loadData = () => {
        var currentData;
        switch(props.route.params.level) {
            case 1:
                currentData = HskData1
                break;
            case 2:
                currentData = HskData2
                break;
            case 3:
                currentData = HskData3
                break;
            case 4:
                currentData = HskData4
                break;
            case 5:
                currentData = HskData5
                break;
            case 6:
                currentData = HskData6
                break;
            default:
                currentData = HskData1
        }
        
        var a = [];
        for (let i = 0; i < 4; i++){
            var rndNum;
            rndNum = Math.floor(Math.random() * currentData.length + 1)
            a.push(currentData[rndNum])
        }
        setCurrentHskData(a);
    }

    

    return (
        <View style={styles.container}>
            <MultiGrid data={currentHskData} level={props.route.params.level} />
            <TouchableOpacity>
                <Text style={styles.btnNext}>
                    Next Question
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    btnNext: {
        color: 'white',
    }
  };