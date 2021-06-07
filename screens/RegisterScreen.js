import React from 'react';
import { Text, SafeAreaView, StyleSheet, TextInput, View, ScrollView, Button } from 'react-native';

const RegisterScreen = ({ navigation }) => {
    const [text, onChangeText] = React.useState();

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.loginForm}>
                    <View>
                        <Text>Email:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="enter your email.."
                            placeholderTextColor="black" />
                    </View>
                    <View>
                        <Text>Username:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="enter your username.."
                            placeholderTextColor="black" />
                    </View>
                    <View>
                        <Text>Password:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="enter your password.."
                            placeholderTextColor="black" />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="re-enter your password.."
                            placeholderTextColor="black" />
                    </View>
                    <View>
                        <Button
                            title="Create Account"
                            disabled={true}
                            onPress={() => { }}
                        />
                    </View>
                    <Text style={{ marginTop: '5%', textAlign: 'center' }}> Already have an account?</Text>
                    <Text
                        style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}
                        onPress={() =>
                            navigation.navigate('Login')
                        }>Sign in</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
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
        margin: 0,
        width: '50%'
    }
});

export default RegisterScreen;