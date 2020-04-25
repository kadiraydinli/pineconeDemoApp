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
import { Header, CheckBox } from "../components/";

const CheckBoxScreen = ({ navigation }) => {
    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [checked5, setChecked5] = useState(false);

    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <Header leftIcon={{ name: "angle-left" }}
                    leftIconOnPress={() => navigation.dispatch({ ...CommonActions.goBack() })}
                    title="CheckBox" placement="center" />
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.container}>
                        <View style={styles.line}>
                            <CheckBox checked={checked} onPress={() => setChecked(!checked)} />
                        </View>
                        <View style={styles.line}>
                            <CheckBox checked={checked} title="CheckBox" onPress={() => setChecked(!checked)} />
                        </View>
                        <View style={styles.line}>
                            <CheckBox checked title="Check" onPress={() => { }} />
                        </View>
                        <View style={styles.line}>
                            <CheckBox checked={false} title="unCheck" onPress={() => { }} />
                        </View>
                        <View style={styles.line}>
                            <CheckBox checked={checked2} color="blue" title="CheckBox - Color" onPress={() => setChecked2(!checked2)} />
                        </View>
                        <View style={styles.line}>
                            <CheckBox checked title="Check - Title Color" titleColor="red" onPress={() => { }} />
                        </View>
                        <View style={styles.line}>
                            <CheckBox checked={false} title="unCheck - Title Left" titleLeft onPress={() => { }} />
                        </View>
                        <View style={styles.line}>
                            <CheckBox checked={checked3} title="CheckBox - Duruma göre renk değişimi" checkedColor="blue"
                                uncheckedColor="red" onPress={() => setChecked3(!checked3)} />
                        </View>
                        <View style={styles.line}>
                            <CheckBox checked={checked4} title={"CheckBox - " + checked4} color="blue" checkedIcon="facebook" uncheckedIcon="github"
                                onPress={() => setChecked4(!checked4)} />
                        </View>
                        <View style={styles.line}>
                            <CheckBox checked={checked5} title="CheckBox - titleStyle" titleStyle={{ fontSize: 25 }}
                                onPress={() => setChecked5(!checked5)} />
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

export default CheckBoxScreen;
