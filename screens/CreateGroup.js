import React, { useEffect, useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

let DATA = [];

const Item = ({ name }) => {
    return (
        <View style={{ borderWidth: 1, borderRadius: 12, padding: '2%' }}>
            <Text>{name}</Text>
        </View>
    );
}

const CreateGroup = ({ navigation, route }) => {

    const [list, updateList] = useState(true);
    const [groupName, updateName] = useState();
    const [groupDesc, updateDesc] = useState();
    
    useEffect(() => {
        if (route.params === undefined) { //initial value will always be undefined 
            DATA = [];
        } else {
            route.params.invited.map((item) => {
                if (!DATA.includes(item)) {
                    DATA.push(item);
                    updateList(!list);
                }
            });
        }
    });

    const renderItem = ({ item }) => (
        <Item name={item.name} />
    );

    return (
        <View>
            <TextInput
                style={style.groupName}
                placeholder="Name of Group.."
                value={groupName}
                onChangeText={updateName}
            />
            <TextInput
                style={style.groupDesc}
                placeholder="Description.."
                value={groupDesc}
                onChangeText={updateDesc}
                multiline={true}
                textAlignVertical='top'
            />
            <View>
                <FlatList
                    numColumns={4}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    style={{ marginHorizontal: '5%', flexDirection: 'column' }}
                    extraData={list}
                />
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                    style={style.Button}
                    onPress={() => navigation.navigate('Contacts', { type: 1 })}>
                    <Text>Add Contact</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={style.Button}
                    onPress={() => {
                        let newGroup = {
                            id: 1, //TODO: random generate this
                            name: groupName,
                            desc: groupDesc,
                            people: DATA
                        }
                        navigation.navigate('Groups', {group: newGroup});
                    }}>
                    <Text>Create Group</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    groupName: {
        borderBottomWidth: 1,
        marginHorizontal: '5%',
        marginVertical: '5%',
        padding: 5,
        fontSize: 30,
    },
    groupDesc: {
        marginHorizontal: '5%',
        marginVertical: '5%',
        fontSize: 20,
        backgroundColor: 'gray',
        height: '30%',
    },
    Button: {
        padding: 10,
        backgroundColor: 'gray',
        width: '40%',
        alignItems: 'center',
        borderRadius: 12,
        borderWidth: 1,
        marginVertical: 10,
    }
});

export default CreateGroup;