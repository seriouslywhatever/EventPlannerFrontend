import React, {useState} from 'react';
import {
    Button,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TextInput,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import axios from 'axios';

/* TODO: password strength checker is uninstalled: react-native-password-strength-meter*/

const LoginScreen = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';
    const [email, onChangeEmail] = useState();
    const [password, onChangePass] = useState();

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <ScrollView>
                <View>
                    <Text style={styles.headerTitle}>Log in</Text>
                </View>
                <View style={styles.loginForm}>
                    <View>
                        <Text>Email:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeEmail}
                            value={email}
                            placeholder="enter your email.."
                            placeholderTextColor="black" />
                    </View>
                    <View>
                        <Text>Password:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangePass}
                            value={password}
                            secureTextEntry={true}
                            placeholder="enter your password.."
                            placeholderTextColor="black" />
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => { navigation.navigate('ForgotPassword') }}>
                            <Text style={{ textAlign: 'center', marginBottom: 50 }}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View>
                            <Button
                                title="Log in"
                                // disabled={true}
                                onPress={() => {
                                    axios.post(
                                        'http://localhost:5000/api/users/login', {
                                        "userEmail": email,
                                        "passWord": password
                                    }
                                    ).then(res => {
                                        if (res.status == 200) {
                                            navigation.navigate('Main')
                                            //TODO save token to local storage (res.data jwt)
                                            //res.data['jwt'] possible solution
                                        }
                                    });
                                }} />
                        </View>
                    </View>
                    <Text style={{ marginTop: '5%', textAlign: 'center' }}>Are you new user?</Text>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}
                        onPress={() =>
                            navigation.navigate('Register')
                        }>Create a new account</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    loginForm: {
        borderRadius: 12,
        padding: '10%',
        marginRight: '5%',
        marginLeft: '5%'
    },
    input: {
        height: 40,
        marginBottom: 30,
        borderWidth: 0.5,
        color: 'black',
        backgroundColor: '#C4C4C4'
    },
    submitButton: {
        backgroundColor: 'red',
        borderRadius: 12,
    }
});

export default LoginScreen;