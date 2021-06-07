import React, { useEffect, useState } from 'react';
import { Switch, Text, TextInput, View, StyleSheet, Platform, TouchableOpacity, ScrollView, Button, FlatList } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Item = ({ name }) => {
    return (
        <View style={{ borderWidth: 1, borderRadius: 12, padding: '2%' }}>
            <Text>{name}</Text>
        </View>
    );
}

let DATA = []

const CreateEvent = ({ navigation, route }) => {

    const [eventName, updateName] = useState();
    const [eventDesc, updateDesc] = useState();
    const [isEnabled, setIsEnabled] = useState();

    const [list, updateList] = useState(true);

    const [price, updatePrice] = useState();

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

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
        <FlatList
            ListHeaderComponent={
                <View style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ marginHorizontal: '5%' }}>
                        <TextInput style={styles.eventName}
                            value={eventName}
                            onChangeText={updateName}
                            placeholder="Name of Event.." />
                        <Text>Created by addNameHere</Text>
                        <TextInput style={styles.eventDesc}
                            placeholder="Description.."
                            value={eventDesc}
                            onChangeText={updateDesc}
                            multiline={true}
                            textAlignVertical='top' />
                        <View>
                            <View style={styles.container}>
                                <Text style={{ flex: 3, fontSize: 25, marginBottom: '5%' }}>Repeat</Text>
                                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                    <Switch
                                        //correct the onvalue change to repeat events 
                                        value={isEnabled}
                                        onValueChange={() => setIsEnabled(currentState => !currentState)} />
                                </View>
                            </View>
                            <View style={{ borderBottomWidth: 1 }}></View>
                            <View style={styles.container}>
                                <Text style={{ flex: 4, fontSize: 25, marginVertical: '5%' }}>Price</Text>
                                <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 35, marginRight: 10 }}>€</Text>
                                    <TextInput
                                        style={{ width: '50%', backgroundColor: 'gray' }}
                                        value={price}
                                        onChangeText={updatePrice}
                                        keyboardType='numeric'
                                    />
                                </View>
                            </View>
                            <View style={{ borderBottomWidth: 1 }}></View>
                        </View>
                        <View>
                            <View style={styles.pickerButton}>
                                <TouchableOpacity style={{ marginHorizontal: '5%' }} onPress={showDatepicker}>
                                    <Text style={styles.picker}>Pick Date</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginHorizontal: '5%' }} onPress={showTimepicker}>
                                    <Text style={styles.picker}>Pick Time</Text>
                                </TouchableOpacity>
                            </View>
                            {show && (
                                <DateTimePicker
                                    value={date}
                                    mode={mode}
                                    display="default"
                                    onChange={onChange}
                                />
                            )}
                            <Text style={{ textAlign: 'center' }}>{date.toString()}</Text>
                        </View>
                    </View>
                </View>
            }
            numColumns={4}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={{ marginHorizontal: '5%', flexDirection: 'column' }}
            extraData={list}
            ListFooterComponent={
                <View style={styles.buttons}>
                    <Button
                        title="Invite Contacts"
                        onPress={() => navigation.navigate('Contacts', { type: 2 })}
                    />
                    <Button
                        title="Create event"
                        onPress={() => {
                            let event = {
                                id: 1,
                                title: eventName,
                                desc: eventDesc,
                                repeat: isEnabled,
                                price: true, //change this, taking bool giving double
                                adress: "something random forgot this oops",
                                people: list,
                                time: date.toTimeString(),
                                date: date.toDateString(),

                            }
                            navigation.navigate('Main', { event: event })
                        }
                        }
                    />
                </View>
            }
        />
    );
}

const styles = StyleSheet.create({
    eventName: {
        borderBottomWidth: 1,
        marginTop: '5%',
        fontSize: 30,
    },
    eventDesc: {
        marginVertical: '5%',
        fontSize: 20,
        backgroundColor: 'gray',
        height: 75,
    },
    container: {
        marginHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttons: {
        marginVertical: 20,
        padding: 5,
        height: 100,
        justifyContent: 'space-between'
    },
    pickerButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '2%',
    },
    picker: {
        borderWidth: 1,
        borderRadius: 12,
        padding: 5,
    },
});

export default CreateEvent;