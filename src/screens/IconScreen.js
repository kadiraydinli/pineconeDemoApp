import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Text,
    View
} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { Header, Icon } from "../components/";

const IconScreen = ({ navigation }) => {
    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <Header leftIcon={{ name: "angle-left" }}
                    leftIconOnPress={() => navigation.dispatch({ ...CommonActions.goBack() })}
                    title="Icon" placement="center" />
                <View style={styles.container}>
                    <View style={styles.line}>
                        <Text style={{ paddingRight: 10 }}>Normal</Text>
                        <Icon name="github" />
                    </View>
                    <View style={styles.line}>
                        <Text style={{ paddingRight: 10 }}>Renkli</Text>
                        <Icon name="gitlab" color="red" />
                    </View>
                    <View style={styles.line}>
                        <Text style={{ paddingRight: 10 }}>Boyut 50</Text>
                        <Icon name="facebook" color="blue" size={50} />
                    </View>
                    <View style={styles.line}>
                        <Text style={{ paddingRight: 10 }}>Tipi değiştirilmiş: AntDesign</Text>
                        <Icon name="gitlab" type="AntDesign" color="red" />
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
        alignItems: "center",
        flexDirection: "row"
    }
});

export default IconScreen;
