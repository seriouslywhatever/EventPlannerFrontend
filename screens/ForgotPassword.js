import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';

const ForgotPassword = ({ navigation }) => {

    const [email, onChangeEmail] = useState();

    return (
        <View>
            <View style={styles.containter}>
                <Text style={styles.title}>Forgot password</Text>
            </View>
            <View>
                <View style={styles.containter}>
                    <Text style={styles.emailText}>Enter email:</Text>
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeEmail}
                        value={email}
                        placeholder="Email..."
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.containter}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('ChangePassword', {emailAdress: email});
                        //TODO: change this to redirect after server call (isMockup)    
                    }}>
                    <Text>Submit</Text>
                </TouchableOpacity></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: '10%',
    },
    emailText: {
        fontSize: 16,
        marginBottom: '10%',
    },
    input: {
        borderColor: '#000000',
        borderWidth: 1,
        marginHorizontal: '5%',
        marginBottom:'5%',
    },
    button:{
        backgroundColor:'gray',
        alignItems:'center',
        width:'40%',
        borderRadius:4,
        padding: 10,
    },
    containter: {
        alignItems: 'center'
    }
});


export default ForgotPassword;