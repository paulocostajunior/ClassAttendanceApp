import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../../screens/Home/Home';
import AuthScreen from '../../screens/Auth/Auth';
import AttendanceDateScreen from '../../screens/AttendanceDate/AttendanceDate';
import AttendanceClassScreen from '../../screens/AttendanceClass/AttendanceClass';
import AuthVerifyScreen from '../../screens/Auth/AuthVerify';

const RootStack = createStackNavigator(
    {
        Home: { screen: HomeScreen },
        AttendanceDate: { screen: AttendanceDateScreen },
        AttendanceClass: { screen: AttendanceClassScreen }
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#96C5CA',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

const Switch = createSwitchNavigator({
    Auth: { screen: AuthVerifyScreen },
    Login: { screen: AuthScreen },
    RootStack: RootStack,
},
{
    initialRouteName: 'Auth' 
});

export const Tabs = createAppContainer(Switch);