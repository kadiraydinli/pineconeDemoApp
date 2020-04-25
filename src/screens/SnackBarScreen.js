import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Text,
    View
} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { Header, Snackbar, Button } from "../components/";

const SnackBarScreen = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <Header leftIcon={{ name: "angle-left" }}
                    leftIconOnPress={() => navigation.dispatch({ ...CommonActions.goBack() })}
                    title="SnackBar" placement="center" />
                <Snackbar visible={visible} position="top" text="SnackBar - Top" />
                <Snackbar visible={visible2} text="SnackBar - Bottom" />
                <Snackbar visible={visible3} backgroundColor="blue" text="SnackBar - Bottom" />
                <Snackbar visible={visible4} actionOnPress={() => alert("Dokunuldu")} text="SnackBar - Bottom" />
                <View style={styles.container}>
                    <View style={styles.line}>
                        <Button title="Top" onPress={() => setVisible(!visible)} />
                    </View>
                    <View style={styles.line}>
                        <Button title="Bottom" onPress={() => setVisible2(!visible2)} />
                    </View>
                    <View style={styles.line}>
                        <Button title="Top - Arka plan rengi: blue" onPress={() => setVisible3(!visible3)} />
                    </View>
                    <View style={styles.line}>
                        <Button title="Top - Action buton" onPress={() => setVisible4(!visible4)} />
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
        margin: 5,
        justifyContent: "center"
    }
});

export default SnackBarScreen;
