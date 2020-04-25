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
import { Header, Card } from "../components";

const CardScreen = ({ navigation }) => {
    const links = [
        "https://cdn.pixabay.com/photo/2020/03/26/10/51/norway-4970019_960_720.jpg",
        "https://cdn.pixabay.com/photo/2019/10/04/18/36/milky-way-4526277_960_720.jpg",
        "https://cdn.pixabay.com/photo/2020/04/19/23/27/switzerland-5065859_960_720.jpg",
        "https://cdn.pixabay.com/photo/2020/04/18/17/17/fantasy-5060076_960_720.jpg",
        "https://cdn.pixabay.com/photo/2020/04/17/14/16/landscape-5055384_960_720.jpg"
    ];

    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <Header leftIcon={{ name: "angle-left" }}
                    leftIconOnPress={() => navigation.dispatch({ ...CommonActions.goBack() })}
                    title="Card" placement="center" />
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.line}>
                            <Card title="Card" description="Açıklama" onPress={() => alert("Dokunuldu")}
                                onLongPress={() => alert("Uzun dokunuldu")} />
                            <Card title="Card 2" description="Açıklama" supportText="Destek metini"
                                onPress={() => alert("Dokunuldu")} onLongPress={() => alert("Uzun dokunuldu")} />
                        </View>
                        <View style={styles.line}>
                            <Card title="Card 3" description="Açıklama" onPress={() => alert("Dokunuldu")}
                                onLongPress={() => alert("Uzun dokunuldu")} image={{ uri: links[0] }} />
                            <Card title="Card 4" description="Açıklama" supportText="Destek metini"
                                onPress={() => alert("Dokunuldu")} onLongPress={() => alert("Uzun dokunuldu")}
                                image={{ uri: links[1] }} />
                        </View>
                        <View style={styles.line}>
                            <Card title="Card 5 - Resim Yazı" description="Açıklama" imageTitle="Doğa"
                                imageTitleStyle={{ color: "white" }} onPress={() => alert("Dokunuldu")}
                                onLongPress={() => alert("Uzun dokunuldu")} image={{ uri: links[2] }} />
                            <Card title="Card 6" description="Açıklama"
                                onPress={() => alert("Dokunuldu")} onLongPress={() => alert("Uzun dokunuldu")}
                                image={{ uri: links[3] }} actionButtonOnPress={() => alert("Dokunuldu")} />
                        </View>
                        <View style={styles.line}>
                            <Card title="Card 7 - Disabled" description="Açıklama" disabled imageTitle="Resim Yazısı"
                                imageTitleStyle={{ color: "white" }} onPress={() => alert("Dokunuldu")}
                                onLongPress={() => alert("Uzun dokunuldu")} image={{ uri: links[4] }} />
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
        padding: 5,
        justifyContent: "center",
    },
    line: {
        flex: 1,
        marginTop: 5,
        marginBottom: 5,
        margin: 3,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
    }
});

export default CardScreen;
