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
import { Header, ListItem } from "../components/";

const ListItemScreen = ({ navigation }) => {
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <Header leftIcon={{ name: "angle-left" }}
                    leftIconOnPress={() => navigation.dispatch({ ...CommonActions.goBack() })}
                    title="ListItem" placement="center" />
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.line}>
                            <ListItem title="Liste" />
                        </View>
                        <View style={styles.line}>
                            <ListItem title="Liste 1" description="Açıklama" onPress={() => alert("Dokunuldu")} />
                        </View>
                        <View style={styles.line}>
                            <ListItem title="Liste - Icon" description="Açıklama"
                                onPress={() => alert("Dokunuldu")}
                                leftIcon={{ name: "github" }} onLongPress={() => alert("Uzun dokunuldu")} />
                        </View>
                        <View style={styles.line}>
                            <ListItem title="Liste - Avatar: value" leftAvatar={{ value: "KA" }} description="Açıklama" onPress={() => alert("Dokunuldu")} />
                        </View>
                        <View style={styles.line}>
                            <ListItem title="Liste - Avatar: source - Disabled" disabled
                                leftAvatar={{
                                    source:
                                        { uri: "https://images.unsplash.com/photo-1546820389-44d77e1f3b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" }
                                }} description="Açıklama" onPress={() => alert("Dokunuldu")} />
                        </View>
                        <View style={styles.line}>
                            <ListItem title="Liste - Avatar: source - Sağ icon"
                                leftAvatar={{
                                    source:
                                        { uri: "https://images.unsplash.com/photo-1542728498-09c6a1af7cb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" }
                                }} description="Açıklama" onPress={() => alert("Dokunuldu")}
                                rightIcon={{ name: "facebook", color: "#4A6CA7" }} />
                        </View>
                        <View style={styles.line}>
                            <ListItem title="Liste - Avatar: source - Sağ yazı - Arka plan"
                                leftAvatar={{
                                    source:
                                        { uri: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80" }
                                }} description="Açıklama" backgroundColor="#DC3545" onPress={() => alert("Dokunuldu")}
                                rightText="Kişi" />
                        </View>
                        <View style={styles.line}>
                            <ListItem title="Liste - Avatar: value - Üst çizgi" topDivider leftAvatar={{ value: "KA" }} description="Açıklama" onPress={() => alert("Dokunuldu")} />
                        </View>
                        <View style={styles.line}>
                            <ListItem title="Liste - Avatar: value - Alt çizgi" bottomDivider leftAvatar={{ value: "KA" }} description="Açıklama" onPress={() => alert("Dokunuldu")} />
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

export default ListItemScreen;
