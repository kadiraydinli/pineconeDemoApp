import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Text,
    View
} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { Header, ProgressBar, Button } from "../components/";

const ProgressBarScreen = ({ navigation }) => {
    const [value, setValue] = useState(5)
    const [value2, setValue2] = useState(15)
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <Header leftIcon={{ name: "angle-left" }}
                    leftIconOnPress={() => navigation.dispatch({ ...CommonActions.goBack() })}
                    title="ProgressBar" placement="center" />
                <View style={styles.container}>
                    <View style={styles.line}>
                        <Text>value: 0</Text>
                        <ProgressBar value={0} />
                    </View>
                    <View style={styles.line}>
                        <Text>value: 100</Text>
                        <ProgressBar value={100} />
                    </View>
                    <View style={styles.line}>
                        <Text>showText ile</Text>
                        <ProgressBar showText value={100} />
                    </View>
                    <View style={styles.line}>
                        <Text>showText ve text ile</Text>
                        <ProgressBar text="Pinecone" showText value={0} />
                    </View>
                    <View style={styles.line}>
                        <Text>unfilledColor</Text>
                        <ProgressBar showText unfilledColor="red" value={50} />
                    </View>
                    <View style={styles.line}>
                        <Text>filledColor</Text>
                        <ProgressBar showText filledColor="red" value={75} />
                    </View>
                    <View style={styles.line}>
                        <Text>borderStyle; radius: 1, color: red</Text>
                        <ProgressBar showText filledColor="red" borderStyle={{ color: "red", radius: 1, width: 1 }} value={75} />
                    </View>
                    <View style={styles.line}>
                        <Button title="-5" onPress={() => setValue(value - 5)} />
                        <ProgressBar value={value} />
                        <Button title="+5" onPress={() => setValue(value + 5)} />
                    </View>
                    <View style={styles.line}>
                        <Button title="-5" onPress={() => setValue2(value2 - 5)} />
                        <ProgressBar filledColor="red" value={value2} />
                        <Button title="+5" onPress={() => setValue2(value2 + 5)} />
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: "center",
    },
    line: {
        flex: 1,
        margin: 5,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap"
    }
});

export default ProgressBarScreen;
