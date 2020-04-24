import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    View,
    ScrollView
} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { Header, Avatar, Badge } from "../components/";

const AvatarScreen = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1 }}>
                <Header leftIcon={{ name: "angle-left" }}
                    leftIconOnPress={() => navigation.dispatch({ ...CommonActions.goBack() })}
                    title="Avatar" placement="center" />
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.container}>
                        <View style={styles.line}>
                            <Avatar value="KA" size="small" backgroundColor="red"
                                onPress={() => alert("KA")} />
                            <Avatar value="İA" size="medium" backgroundColor="blue"
                                onPress={() => alert("İA")} />
                            <Avatar value="YEA" size="large" backgroundColor="green"
                                onPress={() => alert("YEA")} />
                        </View>
                        <View style={styles.line}>
                            <Avatar value="KA" size="small" backgroundColor="red"
                                onPress={() => alert("KA")}
                                avatarMini={<Badge value="+9" color="blue" />}
                                avatarMiniPosition="bottomRight" avatarMiniOnPress={() => alert("Avatar Mini")} />
                            <Avatar value="İA" size="medium" backgroundColor="blue"
                                onPress={() => alert("İA")}
                                avatarMini={<Badge value="+9" color="green" />}
                                avatarMiniPosition="bottomLeft" avatarMiniOnPress={() => alert("Avatar Mini")} />
                            <Avatar value="İA" size="medium" backgroundColor="blue"
                                onPress={() => alert("İA")}
                                avatarMini={<Badge value="+9" color="green" />}
                                avatarMiniPosition="topLeft" avatarMiniOnPress={() => alert("Avatar Mini")} />
                            <Avatar value="YEA" size="large" backgroundColor="green"
                                onPress={() => alert("YEA")}
                                avatarMini={<Badge value="+9" color="gray" />}
                                avatarMiniPosition="topRight" avatarMiniOnPress={() => alert("Avatar Mini")} />
                        </View>
                        <View style={styles.line}>
                            <Avatar type="square" value="KA" size="small" backgroundColor="red"
                                onPress={() => alert("KA")} />
                            <Avatar type="square" value="İA" size="medium" backgroundColor="blue"
                                onPress={() => alert("İA")} />
                            <Avatar type="square" value="YEA" size="large" backgroundColor="green"
                                onPress={() => alert("YEA")} />
                        </View>
                        <View style={styles.line}>
                            <Avatar type="square" value="KA" size="small" backgroundColor="red"
                                onPress={() => alert("KA")}
                                avatarMini={<Badge value="+9" color="blue" />}
                                avatarMiniPosition="bottomRight" avatarMiniOnPress={() => alert("Avatar Mini")} />
                            <Avatar type="square" value="İA" size="medium" backgroundColor="blue"
                                onPress={() => alert("İA")}
                                avatarMini={<Badge value="+9" color="green" />}
                                avatarMiniPosition="bottomLeft" avatarMiniOnPress={() => alert("Avatar Mini")} />
                            <Avatar type="square" value="İA" size="medium" backgroundColor="blue"
                                onPress={() => alert("İA")}
                                avatarMini={<Badge value="+9" color="green" />}
                                avatarMiniPosition="topLeft" avatarMiniOnPress={() => alert("Avatar Mini")} />
                            <Avatar type="square" value="YEA" size="large" backgroundColor="green"
                                onPress={() => alert("YEA")}
                                avatarMini={<Badge value="+9" color="gray" />}
                                avatarMiniPosition="topRight" avatarMiniOnPress={() => alert("Avatar Mini")} />
                        </View>
                        <View style={styles.line}>
                            <Avatar icon={{ name: "github", color: "white" }} size="small"
                                backgroundColor="blue" onPress={() => alert("GitHub")} />
                            <Avatar icon={{ name: "gitlab", color: "white" }} size="medium"
                                backgroundColor="blue" onPress={() => alert("GitLab")} />
                            <Avatar icon={{ name: "facebook", color: "white" }} size="large"
                                backgroundColor="green" onPress={() => alert("Facebook")} />
                        </View>
                        <View style={styles.line}>
                            <Avatar type="square" icon={{ name: "github", color: "white" }} size="small"
                                backgroundColor="blue" onPress={() => alert("GitHub")} />
                            <Avatar type="square" icon={{ name: "gitlab", color: "white" }} size="medium"
                                backgroundColor="blue" onPress={() => alert("GitLab")} />
                            <Avatar type="square" icon={{ name: "facebook", color: "white" }} size="large"
                                backgroundColor="green" onPress={() => alert("Facebook")} />
                        </View>
                        <View style={styles.line}>
                            <Avatar source={{ uri: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80" }}
                                size="small" backgroundColor="red" onPress={() => alert("Profile 1")} />
                            <Avatar source={{ uri: "https://images.unsplash.com/photo-1546820389-44d77e1f3b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" }}
                                size="medium" backgroundColor="blue" onPress={() => alert("Profile 2")} />
                            <Avatar source={{ uri: "https://images.unsplash.com/photo-1542728498-09c6a1af7cb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" }}
                                size="large" backgroundColor="green" onPress={() => alert("Profile 3")} />
                        </View>
                        <View style={styles.line}>
                            <Avatar type="square" source={{ uri: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80" }}
                                size="small" backgroundColor="red" onPress={() => alert("Profile 1")} />
                            <Avatar type="square" source={{ uri: "https://images.unsplash.com/photo-1546820389-44d77e1f3b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" }}
                                size="medium" backgroundColor="blue" onPress={() => alert("Profile 2")} />
                            <Avatar type="square" source={{ uri: "https://images.unsplash.com/photo-1542728498-09c6a1af7cb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" }}
                                size="large" backgroundColor="green" onPress={() => alert("Profile 3")} />
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

export default AvatarScreen;
