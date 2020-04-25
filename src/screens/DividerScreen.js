import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    View
} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { Header, Divider } from "../components/";

const DividerScreen = ({ navigation }) => {
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <Header leftIcon={{ name: "angle-left" }}
                    leftIconOnPress={() => navigation.dispatch({ ...CommonActions.goBack() })}
                    title="Divider" placement="center" />
                <View style={styles.container}>
                    <Divider />
                    <Divider title="Thickness: 3" thickness={3} />
                    <Divider title="Global color: red" color="red" />
                    <Divider title="Global color: blue" color="blue" />
                    <Divider title="Title color: green" titleColor="green" />
                    <Divider title="Title position: left" color="red" titlePosition="left" />
                    <Divider title="Title position: center" color="blue" titlePosition="center" />
                    <Divider title="Title position: right" color="green" titlePosition="right" />
                    <Divider title="Title style: fontSize 20" color="black" titleStyle={{ fontSize: 20 }} />
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: "space-around",
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

export default DividerScreen;
