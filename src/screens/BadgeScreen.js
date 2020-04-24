import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    ScrollView,
    View,
    Text
} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import {Header, Badge} from "../components/";

const BadgeScreen = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1 }}>
                <Header leftIcon={{ name: "angle-left" }}
                    leftIconOnPress={() => navigation.dispatch({ ...CommonActions.goBack() })}
                    title="Badge" placement="center" />
                    <View style={styles.container}>
                        <View style={styles.line}>
                            <Text style={{paddingRight: 10}}>Normal</Text>
                            <Badge value="K" color="red" />
                        </View>
                        <View style={styles.line}>
                            <Text style={{ paddingRight: 10 }}>Primary</Text>
                            <Badge value="1" primary />
                        </View>
                        <View style={styles.line}>
                            <Text style={{ paddingRight: 10 }}>Success</Text>
                            <Badge value="+50" success />
                        </View>
                        <View style={styles.line}>
                            <Text style={{ paddingRight: 10 }}>Warning</Text>
                            <Badge value="7" warning />
                        </View>
                        <View style={styles.line}>
                            <Text style={{ paddingRight: 10 }}>Info</Text>
                            <Badge value="11" info />
                        </View>
                        <View style={styles.line}>
                            <Text style={{ paddingRight: 10 }}>Danger</Text>
                            <Badge value="80" danger />
                        </View>
                        <View style={styles.line}>
                            <Text style={{ paddingRight: 10 }}>Normal valueStyle={"{{fontSize: 20}}"} kullanımlı</Text>
                            <Badge value="+99" valueStyle={{fontSize: 20}} />
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
        alignItems: "center"
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

export default BadgeScreen;
