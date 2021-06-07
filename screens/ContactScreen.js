import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, PermissionsAndroid, View, FlatList, TouchableOpacity } from 'react-native';
import Contacts from 'react-native-contacts';

let CONTACTS = [];
let CHOSEN = [];

const getContacts = async () => {
    await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
            title: 'Contacts',
            message: 'This app would like to use your Contacts.',
            buttonPositive: 'Continue'
        },
    ).then(async (response) => {
        if (response === PermissionsAndroid.RESULTS.GRANTED) {
            CONTACTS = await Contacts.getAll();
        } else {
            console.log("request has been denied")
        }
    }).catch(async (error) => {
        console.log(error);
    });
}

const getInitial = (name) => {
    let letter = name.split('')
    return (
        <Text>{letter[0]}</Text>
    );
}

const Person = ({ title, id }) => (
    // style={[style.item, !CHOSEN.includes(title) ? style.unselected : style.selected]}
    <TouchableOpacity
        style={styles.item}
        onLongPress={() => {
            if (!CHOSEN.some(item => item.name === title)) { //prevent duplications 
                CHOSEN.push({ name: title, id: id });
            }
        }}>
        <View style={styles.letter}>
            <Text style={{ fontSize: 30 }}>{getInitial(title)}</Text>
        </View>
        <Text style={{ fontSize: 20 }}>{title}</Text>
    </TouchableOpacity>
);

const ContactScreen = ({ navigation, route }) => {

    const [list, updateList] = useState(false);

    const renderItem = ({ item }) => {
        return (
            <Person title={item.displayName} id={item.recordID} />
        );
    }

    useEffect(() => {
        getContacts().then(() => { updateList(true) });
    });

    return (
        <View>
            <FlatList
                data={CONTACTS}
                renderItem={renderItem}
                keyExtractor={item => item.recordID}
                extraData={list}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    switch (route.params.type) {
                        case 1:
                            navigation.navigate('CreateGroup', { invited: CHOSEN })
                            break;
                        case 2:
                            navigation.navigate('CreateEvent', { invited: CHOSEN })
                            break;
                        default:
                            console.log("Incorrect data provided");
                            break;
                    }
                }}>
                <Text>ADD</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        borderBottomWidth: 1,
        alignItems: 'center'
    },
    selected: {
        backgroundColor: 'blue'
    },
    unselected: {
        backgroundColor: 'gray'
    },
    button: {
        position: 'absolute',
        borderRadius: 50,
        backgroundColor: 'gray',
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    letter: {
        borderRadius: 25,
        borderWidth: 1,
        backgroundColor: 'white',
        minHeight: '20%',
        minWidth: '15%',
        marginEnd: '10%',
        alignItems: 'center'
    }
});

export default ContactScreen;