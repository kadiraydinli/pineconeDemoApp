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
import { Header, Fab } from "../components/";

const FabScreen = ({ navigation }) => {

    const action = [{ icon: "facebook", label: "fabeook", backgroundColor: "#4A6CA7", onPress: () => alert("Facebook"), iconColor: "white" },
    { icon: "twitter", backgroundColor: "#00B9EF", iconColor: "white", iconProps: { onLongPress: () => alert("Twitter") } },
    { icon: "tumblr", backgroundColor: "#000000", iconColor: "white" },
    { icon: "instagram", backgroundColor: "#6091B2", iconColor: "white" },
    { icon: "twitch", backgroundColor: "#7A56B2", iconColor: "white" },
    { icon: "github", backgroundColor: "#000000", iconColor: "white", onPress: () => alert("GitHub") },
    { icon: "gitlab", backgroundColor: "#ED5C38", iconColor: "white" }]

    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <Header leftIcon={{ name: "angle-left" }}
                    leftIconOnPress={() => navigation.dispatch({ ...CommonActions.goBack() })}
                    title="Fab" placement="center" />
                <View style={styles.container}>
                    <Fab actions={action} position="left" label="FAB" text="FAB" backgroundAnimationColor="rgba(0, 0, 255, .5)" />
                    <Fab actions={action} position="center" icon={{ name: "share-alt" }} backgroundAnimation={false} />
                    <Fab actions={action} position="right" text="FAB" />
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

export default FabScreen;
