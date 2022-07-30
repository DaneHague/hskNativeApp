import { View } from 'react-native'
import MultiGrid from '../components/MultiGrid'
import HskData1 from '../assets/HskData/hsk1.json'
import HskData2 from '../assets/HskData/hsk2.json'
import HskData3 from '../assets/HskData/hsk3.json'
import HskData4 from '../assets/HskData/hsk4.json'
import HskData5 from '../assets/HskData/hsk5.json'
import HskData6 from '../assets/HskData/hsk6.json'
import { useEffect } from 'react'

export default function HskMultiGame(props) {

    useEffect(() => {
        loadData();
    },[]) 
    
    const loadData = () => {
        var currentData = HskData1;
        var a = [];
        for (let i = 0; i < 4; i++){
            var rndNum;
            rndNum = Math.floor(Math.random() * currentData.length + 1)
            a.push(currentData[rndNum])
        }
        console.log(a);
    }

    return (
        <View style={styles.container}>
            <MultiGrid level={2} />
        </View>
    )
}

const styles = {
    container: {
      flex: 1,
      alignItems: 'center',
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
  };