import React from "react";
import { StyleSheet, Text, View } from "react-native";

const  HomeNav = () => {
    return (
        <View style={[styles.container, {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "row"
        }]}>
            <View style={[styles.container, {
                // Try setting `flexDirection` to `"row"`.
                flexDirection: "row"
            }]}>
                
                <View style={[styles.box,{ flex: 2, backgroundColor: "red" }]}><Text>Square 1</Text></View>
                <View style={[styles.box,{ flex: 2, backgroundColor: "darkorange" }]}><Text>Square 2</Text></View>
                <View style={[styles.box,{ flex: 2, backgroundColor: "green" }]}><Text>Square 3</Text></View>
            </View>
          </View>
        
      );
      
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    box: {
        width: 50,
        height: 50
    }
});

export default HomeNav;