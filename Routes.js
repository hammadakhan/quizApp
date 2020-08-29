import React from 'react';
import Home from './screens/Home';
import Q1 from './screens/Q1';
import Q2 from './screens/Q2';
import Q3 from './screens/Q3';
import Q4 from './screens/Q4';
import Q5 from './screens/Q5';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'native-base';
import Quiz from './screens/Quiz';
//import {Icon} from 'react-native-vector-icons'

const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const screenOptions = {
    headerStyle:{
        backgroundColor: '#009387',
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 2
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}
HomeStackScreen = () => {
    return(
    <HomeStack.Navigator screenOptions={screenOptions}>
        <HomeStack.Screen 
            name="Home" 
            component={Home} 
            options={{title:"Home"}}
        />
        <HomeStack.Screen 
            name="Q1" 
            component={Q1} 
            options={{title:"Question 1"}}
        />
        <HomeStack.Screen 
            name="Q2" 
            component={Q2} 
            options={{title:"Question 2"}}
        />
        <HomeStack.Screen 
            name="Q3" 
            component={Q3} 
            options={{title:"Question 3"}}
        />
        <HomeStack.Screen 
            name="Q4" 
            component={Q4} 
            options={{title:"Question 4"}}
        />
        <HomeStack.Screen 
            name="Q5" 
            component={Q5} 
            options={{title:"Question 5"}}
        />

    </HomeStack.Navigator>
    )
}

// DetailsStackScreen = () => {
//     return(
//     <DetailStack.Navigator screenOptions={screenOptions}>
//         <DetailStack.Screen 
//             name="Details" 
//             component={Details} 
//             options={({navigation, route}) => ({
//                 headerRight: () => (
//                   <Button
//                     onPress={() => navigation.navigate('Add')}
//                     title="Add"
//                   />
//                 ),
//                 title: "Details"
//             })}
//         />
//         <DetailStack.Screen 
//             name="Add" 
//             component={Add} 
//             options={{title:"Add"}}
//         />
//     </DetailStack.Navigator>
//     )
// }
function Screens() {
    
        return(
        <NavigationContainer>
            <Tabs.Navigator
                tabBarOptions={{ showIcon: true}}
            >
                <Tabs.Screen name="Home" component={HomeStackScreen} options={{tabBarIcon:(tabInfo) => (
                    <Icon name="ios-home"  /> ),
                    
                }}/>
                {/* <Tabs.Screen name="Details" component={DetailsStackScreen} options={{tabBarIcon:(tabInfo) => (
                    <Icon name="ios-person" size={18}  /> ),
                    
                }}/> */}
            </Tabs.Navigator>
            {/* <Stack.Navigator>
                <Stack.Screen 
                    name="Home" 
                    component={Home} 
                    options={{title:"SIGNIN"}}
                />
                <Stack.Screen 
                    name="Details" 
                    component={Details} 
                    options={{title:"CREATEACCOUNT"}}
                />
            </Stack.Navigator> */}
        </NavigationContainer>
        )
}

export default function AppContainer () {
    return(
    
        <Screens />
    
    )
   
}

