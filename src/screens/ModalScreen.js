import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Text,
    View
} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { Header, Modal, Button } from "../components/";

const ModalScreen = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);

    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <Header leftIcon={{ name: "angle-left" }}
                    leftIconOnPress={() => navigation.dispatch({ ...CommonActions.goBack() })}
                    title="Modal" placement="center" />
                <View style={styles.container}>
                    <View style={styles.line}>
                        <Button title="Modal" onPress={() => setVisible(!visible)} />
                        <Modal visible={visible}>
                            <View style={{ padding: 20, justifyContent: "center", alignItems: "center" }}>
                                <Text>Hello World</Text>
                                <Button title="Uzun Dokun" onLongPress={() => alert("Dokunuldu")} style={{ margin: 10 }} />
                                <Button title="Kapat" onPress={() => setVisible(!visible)} />
                            </View>
                        </Modal>
                    </View>
                    <View style={styles.line}>
                        <Button title="Modal - Kenar kalınlığı" onPress={() => setVisible2(!visible2)} />
                        <Modal visible={visible2} borderStyle={{ thickness: 3, color: "red", radius: 0 }}>
                            <View style={{ padding: 20 }}>
                                <Text>borderStyle={"{{ thickness: 3, color: \"red\", radius: 0 }}"}</Text>
                                <Button title="Kapat" onPress={() => setVisible2(!visible2)} />
                            </View>
                        </Modal>
                    </View>
                    <View style={styles.line}>
                        <Button title="Modal - onRequestClose ile" onPress={() => setVisible3(!visible3)} />
                        <Modal visible={visible3} onRequestClose={() => setVisible3(!visible3)}>
                            <View style={{ padding: 20 }}>
                                <Text>borderStyle={"{{ thickness: 3, color: \"red\", radius: 0 }}"}</Text>
                                <Button title="Dokun" onPress={() => alert("Dokunuldu")} />
                            </View>
                        </Modal>
                    </View>
                    <View style={styles.line}>
                        <Button title="Modal - Arka plan rengi: #ccffff" onPress={() => setVisible4(!visible4)} />
                        <Modal visible={visible4} backgroundColor="#ccffff" onRequestClose={() => setVisible4(!visible4)}>
                            <View style={{ padding: 20 }}>
                                <Text>borderStyle={"{{ thickness: 3, color: \"red\", radius: 0 }}"}</Text>
                                <Button title="Dokun" onPress={() => alert("Dokunuldu")} />
                            </View>
                        </Modal>
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
        //flex: 1,
        //margin: 5,
        justifyContent: "center",
        marginTop: 20,
        //alignItems: "center",
        //flexDirection: "row",
        //flexWrap: "wrap"
    }
});

export default ModalScreen;
