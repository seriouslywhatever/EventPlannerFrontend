import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './screens/Main';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import EventDetail from './screens/EventDetail';
import ContactScreen from './screens/ContactScreen';
import Groups from './screens/Groups';
import CreateGroup from './screens/CreateGroup';
import CreateEvent from './screens/CreateEvent';
import ForgotPassword from './screens/ForgotPassword';
import ChangePassword from './screens/ChangePassword';
import Settings from './screens/Settings'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Detail" component={EventDetail} />
        <Stack.Screen name="Contacts" component={ContactScreen} />
        <Stack.Screen name="Groups" component={Groups} />
        <Stack.Screen name="CreateGroup" component={CreateGroup} />
        <Stack.Screen name="CreateEvent" component={CreateEvent} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
        <Stack.Screen name="ChangePassword" component={ChangePassword}/>
        <Stack.Screen name="Settings" component={Settings}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
