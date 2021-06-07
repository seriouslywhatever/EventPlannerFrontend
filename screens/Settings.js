import React, { useState } from 'react'
import { Text, Image, View, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Settings = ({ navigation }) => {
    const [Language, setLanguage] = useState();
    const [selectedLanguage, setSelectedLanguage] = useState('key0');
    return (
        <View>
            <View style={styles.containter}>
                <Text style={styles.title}>Settings</Text>
            </View>
            <View>
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, flexDirection: 'row', padding: 10 }}>
                    <Text style={{ flex: 5, marginLeft: '5%', fontSize: 25 }}>Colorblind mode</Text>
                    <Switch />
                </View>
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, flexDirection: 'row', padding: 10 }}>
                    <Text style={{ flex: 5, marginLeft: '5%', fontSize: 25 }}>Dark mode</Text>
                    <Switch />
                </View>
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, flexDirection: 'row', padding: 10 }}>
                    <Text style={{ flex: 5, marginLeft: '5%', fontSize: 25 }}>Visual impairment</Text>
                    <Switch />
                </View>
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, flexDirection: 'row', padding: 10 }}>
                    <Text style={{ flex: 5, marginLeft: '5%', fontSize: 25 }}>Push notification</Text>
                    <Switch />
                </View>
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ChangePassword', { emailAdress: '' })}>
                        <View style={{ flexDirection: 'row', padding: 10 }}>
                            <Text style={{ fontSize: 25, flex: 5, marginStart: '5%' }}>Change password</Text>
                            <Image style={{ alignSelf: 'center', width: 20, height: 20 }} source={require('../assets/right-arrow.png')} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}>
                    <View style={{ marginLeft: '3%' }}>
                        <Picker
                            selectedValue={selectedLanguage}
                            onValueChange={(language) => setSelectedLanguage(language)}
                            mode="dropdown">
                            <Picker.Item label="English" value="key0" />
                            <Picker.Item label="Dutch" value="key1" />
                        </Picker>
                    </View>
                </View>
            </View>
            <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={{ color: 'red', textAlign: 'center' }}>Delete account</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        marginVertical: '10%',
    },
    input: {
        borderColor: '#000000',
        borderWidth: 1,
        marginHorizontal: '5%',
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
        alignItems: 'center'
    }
});


export default Settings;