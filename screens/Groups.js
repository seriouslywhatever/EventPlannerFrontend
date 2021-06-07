import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, FlatList } from 'react-native';

const DATA = []

const Footer = ({ navigation }) => {
    return (
        <View style={style.list}>
            <TouchableOpacity
                style={style.button}
                onPress={() => {
                    navigation.navigate('CreateGroup')
                }}>
                <Text>Create Event</Text>
            </TouchableOpacity>
        </View>
    );
}

const Item = ({ name }) => {
    return (
        <View style={{ borderWidth: 1, borderRadius: 12, padding: '2%' }}>
            <Text>{name}</Text>
        </View>
    );
}

const Groups = ({ navigation, route }) => {
    const [groups, updateGroups] = useState(false);

    useEffect(() => {
        if (route.params === undefined) { //initial value will always be undefined 

        } else {
            //prevents pushing two groups which throws non unique id error 
            if (groups == false) {
                DATA.push(route.params.group);
            }
            updateGroups(true)
        }
    });

    const renderItem = ({ item }) => {
        return (
            <Item name={item.name} />
        );
    }

    return (
        <View style={{ display: 'flex' }}>
            <FlatList
                ListEmptyComponent={
                    <View style={style.list}>
                        <Text>Create your first group..</Text>
                    </View>
                }
                ListFooterComponent={
                    <View style={style.list}>
                        <TouchableOpacity
                            style={style.button}
                            onPress={() => {
                                updateGroups(false);
                                navigation.navigate('CreateGroup')
                            }}>
                            <Text>Create Group</Text>
                        </TouchableOpacity>
                    </View>
                }
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={groups}
            />
        </View>
    );
}

const style = StyleSheet.create({
    list: {
        alignItems: 'center',
        marginTop: '10%'
    },
    button: {
        marginTop: '10%',
        backgroundColor: 'gray',
        padding: '5%',
        borderRadius: 12,
        borderWidth: 1
    }
});

export default Groups;