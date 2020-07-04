import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Text,
    Alert,
    View,
    TouchableHighlight,
    ScrollView,
    Dimensions
} from 'react-native';
import { Header } from "../components/";

const WIDTH = Dimensions.get('window').width;

const HomeScreen = ({ navigation }) => {

    const Components = ["Avatar", "Badge", "Button", "Card", "CheckBox", "Divider",
        "Fab", "Header", "Icon", "IconButton", "Input", "ListItem", "Modal", "ProgressBar",
        "RadioButton", "SnackBar", "Text"];

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#FFF" />
            <SafeAreaView style={styles.container}>
                <Header title="React Native Pinecone" placement="center"
                    rightIcon={{ name: "question-circle", color: "#17A2B8" }}
                    rightIconOnPress={() => Alert.alert("Bilgi", "Bu uygulama \"React Native Pinecone\" kütüphanesinde" +
                        "yer alan bileşenlerin, tanıtımı için geliştirilmiştir. ")} />
                <ScrollView>
                    <View style={styles.View}>
                        {Components.map((value, index) => (
                            <TouchableHighlight key={index} underlayColor="#DCDCDC"
                                onPress={() => navigation.navigate(value)}
                                style={[styles.button]}>
                                <Text style={{ fontSize: 20 }}>{value}</Text>
                            </TouchableHighlight>
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    View: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: WIDTH,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10
    },
    button: {
        width: "45%",
        height: WIDTH / 6,
        borderColor: "black",
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#DCDCDC",
        margin: 5,
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default HomeScreen;
