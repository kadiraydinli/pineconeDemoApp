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
import { Header, Input } from "../components/";

const InputScreen = ({ navigation }) => {
    const [value, setValue] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const [value4, setValue4] = useState("");
    const [value5, setValue5] = useState("Test");
    const [value6, setValue6] = useState("Hello");
    const [value7, setValue7] = useState("Hello");
    const [value8, setValue8] = useState("Hello");
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <Header leftIcon={{ name: "angle-left" }}
                    leftIconOnPress={() => navigation.dispatch({ ...CommonActions.goBack() })}
                    title="Input" placement="center" />
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.container}>
                        <View style={styles.line}>
                            <Input value={value} placeholder="placeholder" onChangeText={(value) => setValue(value)} />
                        </View>
                        <View style={styles.line}>
                            <Input value={value2} label="Label - Filled" onChangeText={(value) => setValue2(value)} />
                        </View>
                        <View style={styles.line}>
                            <Input value={value3} type="outlined" label="Label - Outlined" onChangeText={(value) => setValue3(value)} />
                        </View>
                        <View style={styles.line}>
                            <Input value={value5} type="outlined" labelColor="green" label="Label - HelperText"
                                onChangeText={(value) => setValue5(value)} helperText="Hello World"
                                leftIcon={{ name: "user", color: "green" }} />
                        </View>
                        <View style={styles.line}>
                            <Input value={value6} type="outlined" labelColor="green" label="Label - ErrorText"
                                onChangeText={(value) => setValue6(value)} errorText="Error Text"
                                rightIcon={{ name: "eye" }} />
                        </View>
                        <View style={styles.line}>
                            <Input value={value8} type="outlined" label="Label - Karakter Sayısı"
                                onChangeText={(value) => setValue8(value)} characterCounter maxLength={10} />
                        </View>
                        <View style={styles.line}>
                            <Input value={value7} disabled type="outlined" labelColor="green"
                                label="Label - Disabled" onChangeText={(value) => setValue7(value)} />
                        </View>
                        <View style={styles.line}>
                            <Input value={value4} type="outlined" labelColor="green" label="Label Color: green" onChangeText={(value) => setValue4(value)} />
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
        margin: 1,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap"
    }
});

export default InputScreen;
