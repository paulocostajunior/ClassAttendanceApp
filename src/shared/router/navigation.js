import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../../screens/Home/Home';
import AuthScreen from '../../screens/Auth/Auth';
import AttendanceDateScreen from '../../screens/AttendanceDate/AttendanceDate';
import AttendanceClassScreen from '../../screens/AttendanceClass/AttendanceClass';

export const RootStack = createStackNavigator(
    {
        Auth: { screen: AuthScreen },
        Home: { screen: HomeScreen },
        AttendanceDate: { screen: AttendanceDateScreen },
        AttendanceClass: { screen: AttendanceClassScreen }
    },
    {
        initialRouteName: 'Auth',
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

export const Tabs = createAppContainer(RootStack);