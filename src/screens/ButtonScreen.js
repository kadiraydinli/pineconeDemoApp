import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Text,
    View,
    ScrollView
} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { Header, Button } from "../components/";

const ButtonScreen = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1 }}>
                <Header leftIcon={{ name: "angle-left" }}
                    leftIconOnPress={() => navigation.dispatch({ ...CommonActions.goBack() })}
                    title="Button" placement="center" />
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.container}>
                        <View style={styles.line}>
                            <Button title="Default" type="default" onPress={() => alert("Dokunuldu")}
                                onLongPress={() => alert("Uzun dokunuldu")} />
                        </View>
                        <View style={styles.line}>
                            <Button title="Raised" shadow={3} type="default" onPress={() => alert("Dokunuldu")}
                                onLongPress={() => alert("Uzun dokunuldu")} />
                        </View>
                        <View style={styles.line}>
                            <Button title="Rounded" type="rounded" color="green" onPress={() => alert("Dokunuldu")}
                                onLongPress={() => alert("Uzun dokunuldu")} />
                        </View>
                        <View style={styles.line}>
                            <Button title="Transparent" type="transparent" color="darkred" onPress={() => alert("Dokunuldu")}
                                onLongPress={() => alert("Uzun dokunuldu")} />
                        </View>
                        <View style={styles.line}>
                            <Button title="Outline" type="outline" color="red" onPress={() => alert("Dokunuldu")}
                                onLongPress={() => alert("Uzun dokunuldu")} />
                        </View>
                        <View style={styles.line}>
                            <Button title="Loading" loading loadingStyle={{ color: "white" }} onPress={() => alert("Dokunuldu")}
                                onLongPress={() => alert("Uzun dokunuldu")} />
                        </View>
                        <View style={styles.line}>
                            <Button title="Disabled" disabled onPress={() => alert("dokunuldu")}
                                onLongPress={() => alert("Uzun dokunuldu")} />
                        </View>
                        <View style={styles.line}>
                            <Button title="Default - Small" leftIcon={{ name: "github" }} size="small" type="default" onPress={() => alert("Dokunuldu")}
                                onLongPress={() => alert("Uzun dokunuldu")} />
                        </View>
                        <View style={styles.line}>
                            <Button title="Default - Medium" size="medium" rightIcon={{ name: "gitlab" }} type="default" onPress={() => alert("Dokunuldu")}
                                onLongPress={() => alert("Uzun dokunuldu")} />
                        </View>
                        <View style={styles.line}>
                            <Button title="Default - Large" size="large" type="default" onPress={() => alert("Dokunuldu")}
                                onLongPress={() => alert("Uzun dokunuldu")} />
                        </View>
                        <View style={styles.line}>
                            <Button title="Default - Primary" primary type="default" onPress={() => alert("Dokunuldu")}
                                onLongPress={() => alert("Uzun dokunuldu")} />
                        </View>
                        <View style={styles.line}>
                            <Button title="Default - Succes" success type="default" onPress={() => alert("Dokunuldu")}
                                onLongPress={() => alert("Uzun dokunuldu")} />
                        </View>
                        <View style={styles.line}>
                            <Button title="Default- Info" info type="default" onPress={() => alert("Dokunuldu")}
                                onLongPress={() => alert("Uzun dokunuldu")} />
                        </View>
                        <View style={styles.line}>
                            <Button title="Default - Warning" warning type="default" onPress={() => alert("Dokunuldu")}
                                onLongPress={() => alert("Uzun dokunuldu")} />
                        </View>
                        <View style={styles.line}>
                            <Button title="Default - Danger" danger type="default" onPress={() => alert("Dokunuldu")}
                                onLongPress={() => alert("Uzun dokunuldu")} />
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
        //flex: 1,
        margin: 5,
        justifyContent: "space-around",
        //alignItems: "center",
        //flexDirection: "row",
        //flexWrap: "wrap"
    }
});

export default ButtonScreen;
