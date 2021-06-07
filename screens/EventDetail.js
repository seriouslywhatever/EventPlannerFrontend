import React from 'react';
import { Text, StyleSheet, SafeAreaView, View, Button } from 'react-native';

const SideInfo = (route) => {

    //TODO pass route data

    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
            <View>
                <Text>15:00 pm</Text>
                <Text>27/03/2021</Text>
            </View>
            <View>
                <Text style={{ textAlign: 'center' }}>$1</Text>
                <Text style={{ textAlign: 'center' }}>icon</Text>
            </View>
        </View>
    );
}

const EventDetail = ({ navigation, route }) => {
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.title}>{route.params.title}</Text>
                <Text style={{ marginHorizontal: '5%' }}>by creator</Text>
                <View style={{ height: '50%', flexDirection: 'row' }}>
                    <Text style={styles.desc}>{route.params.desc}</Text>
                    <View style={{ flex: 1, marginTop: '5%', marginEnd: '5%' }}>
                        {/* <SideInfo /> */}
                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                            <View>
                                <Text>{route.params.time}</Text>
                                <Text>{route.params.date}</Text>
                            </View>
                            <View>
                                <Text style={{ textAlign: 'center' }}>$1</Text>
                                <Text style={{ textAlign: 'center' }}>icon</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={styles.adressText}>{route.params.adress}</Text>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttons}>
                        <Button
                            title="Invite Contact"
                        />
                    </View>
                    <View style={styles.buttons}>
                        <Button
                            title="View Invitees"
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginHorizontal: '5%'
    },
    desc: {
        flex: 2,
        marginHorizontal: '5%',
        marginTop: '5%',
        backgroundColor: '#C4C4C4',
        color: 'white'
    },
    adressText: {
        fontSize: 20,
        marginHorizontal: '5%',
        marginTop: '5%',
        marginBottom: '10%'
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column'
    },
    buttons: {
        width: '50%',
    }
});

export default EventDetail;