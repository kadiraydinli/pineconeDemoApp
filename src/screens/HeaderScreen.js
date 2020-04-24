import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Text,
    View
} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { Header } from "../components/";

const HeaderScreen = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1 }}>
                <Header leftIcon={{ name: "angle-left" }}
                    leftIconOnPress={() => navigation.dispatch({ ...CommonActions.goBack() })}
                    title="Header" placement="center" />
                <View style={styles.container}>
                    <View style={styles.line}>
                        <Header title="Title left" backgroundColor="#A9A9A9" />
                    </View>
                    <View style={styles.line}>
                        <Header title="Title center" subTitle="Sub Title" subTitleColor="white" placement="center" backgroundColor="#A9A9A9" />
                    </View>
                    <View style={styles.line}>
                        <Header title="Title right" placement="right" titleColor="white" backgroundColor="red" />
                    </View>
                    <View style={styles.line}>
                        <Header title="Title left" backgroundColor="#A9A9A9"
                            leftIcon={{ name: "facebook", color: "white" }} leftIconOnPress={() => alert("Tıklandı")} />
                    </View>
                    <View style={styles.line}>
                        <Header title="Title center" subTitle="Sub Title" placement="center" backgroundColor="#A9A9A9"
                            rightIcon={{ name: "github" }} rightIconOnPress={() => alert("Tıklandı")} />
                    </View>
                    <View style={styles.line}>
                        <Header title="Title right" placement="right" titleColor="white" backgroundColor="rgb(20, 10, 50)" />
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
        //justifyContent: "center",
    },
    line: {
        flex: 1,
        margin: 5,
        //justifyContent: "center",
        //alignItems: "center",
        //flexDirection: "row",
        //flexWrap: "wrap"
    }
});

export default HeaderScreen;
