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
import { Header, IconButton } from "../components/";

const IconButtonScreen = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1 }}>
                <Header leftIcon={{ name: "angle-left" }}
                    leftIconOnPress={() => navigation.dispatch({ ...CommonActions.goBack() })}
                    title="IconButton" placement="center" />
                <View style={styles.container}>
                    <View style={styles.line}>
                        <Text style={{ paddingRight: 10 }}>Normal</Text>
                        <IconButton name="github" onPress={() => alert("Dokunuldu")}
                            onLongPress={() => alert("Uzun dokunuldu")} />
                    </View>
                    <View style={styles.line}>
                        <Text style={{ paddingRight: 10 }}>Raised</Text>
                        <IconButton name="gitlab" color="red" raised onPress={() => alert("Dokunuldu")}
                            onLongPress={() => alert("Uzun dokunuldu")} />
                    </View>
                    <View style={styles.line}>
                        <Text style={{ paddingRight: 10 }}>Disabled</Text>
                        <IconButton name="gitlab" color="blue" disabled onPress={() => alert("Dokunuldu")}
                            onLongPress={() => alert("Uzun dokunuldu")} />
                    </View>
                    <View style={styles.line}>
                        <Text style={{ paddingRight: 10 }}>Boyut 50 - underlayColor eklenmiş: blue</Text>
                        <IconButton name="facebook" color="blue" size={50} onPress={() => alert("Dokunuldu")}
                            onLongPress={() => alert("Uzun dokunuldu")} underlayColor="gray" />
                    </View>
                    <View style={styles.line}>
                        <Text style={{ paddingRight: 10 }}>Tipi değiştirilmiş: AntDesign</Text>
                        <IconButton name="gitlab" type="AntDesign" color="red" onPress={() => alert("Dokunuldu")}
                            onLongPress={() => alert("Uzun dokunuldu")} />
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

export default IconButtonScreen;
