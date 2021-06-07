import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import PassMeter from "react-native-passmeter";

const ChangePassword = ({ route }) => {
    const [password, onChangePassword] = useState("");
    const [newPassword, onChangeNewPassword] = useState();
    const LABELS = ["Too Short", "Weak", "Normal", "Strong", "Secure"];
    const MIN_LENGTH = 3;
    const MAX_LENTGH = 15;

    return (
        <View>
            <View style={styles.containter}>
                <Text style={styles.title}>Change password</Text>
                <Text>{route.params.emailAdress}</Text>
            </View>
            <View>
                <View style={{ marginHorizontal: '5%' }}>
                    <Text>Enter new password:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangePassword}
                        value={password}
                        placeholder="new password..."
                        secureTextEntry={true}
                        maxLength={MAX_LENTGH}
                    />
                    <PassMeter
                        showLabels
                        password={password}
                        maxLength={MAX_LENTGH}
                        minLength={MIN_LENGTH}
                        labels={LABELS}
                    />
                    <Text style={{ marginTop: '5%' }}>Re-Enter new password:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNewPassword}
                        value={newPassword}
                        placeholder="new password again..."
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.containter}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            if (password.match(newPassword)) {
                                //TODO: update database with new hashed password (server call)
                            } else {
                                Alert.alert("password does not match");
                            }
                        }}>
                        <Text>Change Password</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    emailText: {
        fontSize: 16,
        marginBottom: '10%',
    },
    input: {
        borderColor: '#000000',
        borderWidth: 1,
        marginBottom: '5%',
    },
    button: {
        backgroundColor: 'gray',
        alignItems: 'center',
        width: '40%',
        borderRadius: 4,
        padding: 10,
    },
    containter: {
        marginVertical: '10%',
        alignItems: 'center'
    }
});

export default ChangePassword;