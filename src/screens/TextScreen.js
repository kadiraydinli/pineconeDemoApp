import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    View,
    ScrollView
} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { Header, Text } from "../components/";

const TextScreen = ({ navigation }) => {
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <Header leftIcon={{ name: "angle-left" }}
                    leftIconOnPress={() => navigation.dispatch({ ...CommonActions.goBack() })}
                    title="Text" placement="center" />
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.line}>
                            <Text h1>h1</Text>
                        </View>
                        <View style={styles.line}>
                            <Text h2>h2</Text>
                        </View>
                        <View style={styles.line}>
                            <Text h3>h3</Text>
                        </View>
                        <View style={styles.line}>
                            <Text h4>h4</Text>
                        </View>
                        <View style={styles.line}>
                            <Text h5>h5</Text>
                        </View>
                        <View style={styles.line}>
                            <Text h6>h6</Text>
                        </View>
                        <View style={styles.line}>
                            <Text fontSize={20}>fontSize: 20</Text>
                        </View>
                        <View style={styles.line}>
                            <Text color="red">color: red</Text>
                        </View>
                        <View style={styles.line}>
                            <Text primary>primary</Text>
                        </View>
                        <View style={styles.line}>
                            <Text success>success</Text>
                        </View>
                        <View style={styles.line}>
                            <Text info>info</Text>
                        </View>
                        <View style={styles.line}>
                            <Text warning>warning</Text>
                        </View>
                        <View style={styles.line}>
                            <Text danger>danger</Text>
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
    },
    line: {
        margin: 10,
        alignItems: "center",
    }
});

export default TextScreen;
