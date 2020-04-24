import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Text,
    View,
    ScrollView
} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { Header, RadioButton, Divider } from "../components/";

const RadioButtonScreen = ({ navigation }) => {
    const [value, setValue] = useState("Hiç biri")

    const radio = [
        { label: "Avatar", value: 0 },
        { label: "Badge", value: 1 },
        { label: "Button", value: 2 }
    ]
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1 }}>
                <Header leftIcon={{ name: "angle-left" }}
                    leftIconOnPress={() => navigation.dispatch({ ...CommonActions.goBack() })}
                    title="RadioButton" placement="center" />
                <ScrollView>
                    <View style={styles.container}>
                        <View style={[styles.line]}>
                            <View style={{ flexDirection: "row" }}>
                                <Text>Seçili olan: </Text>
                                <Text style={{ color: "red" }}>{value}</Text>
                            </View>
                            <RadioButton values={radio} onPress={(value) => setValue(value)} />
                        </View>
                        <Divider />
                        <View style={styles.line}>
                            <Text>labelHorizontal: false</Text>
                            <RadioButton values={radio} labelHorizontal={false} onPress={(value) => setValue(value)} />
                        </View>
                        <Divider />
                        <View style={styles.line}>
                            <Text>labelHorizontal: false</Text>
                            <RadioButton values={radio} horizontal={true} onPress={(value) => setValue(value)} />
                        </View>
                        <Divider />
                        <View style={styles.line}>
                            <Text>Seçili olan: blue</Text>
                            <RadioButton values={radio} selectedColor="blue" onPress={(value) => setValue(value)} />
                        </View>
                        <Divider />
                        <View style={styles.line}>
                            <Text>Disabled</Text>
                            <RadioButton values={radio} disabled selectedColor="blue" onPress={(value) => setValue(value)} />
                        </View>
                        <Divider />
                        <View style={styles.line}>
                            <Text>Yazı renkleri: red</Text>
                            <RadioButton values={radio} labelColor="red" onPress={(value) => setValue(value)} />
                        </View>
                        <Divider />
                        <View style={styles.line}>
                            <Text>Boyut 40</Text>
                            <RadioButton values={radio} size={40} onPress={(value) => setValue(value)} />
                        </View>
                    </View>
                </ScrollView>
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

export default RadioButtonScreen;
