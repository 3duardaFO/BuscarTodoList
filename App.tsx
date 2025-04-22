import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ToDoScreen from './pages/ToDoScreen';
import BuscarCep from './pages/BuscarCep';
import React from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  return ( 
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ToDoScreen}
        />
        <Stack.Screen
          name="BuscarCep"
          component={BuscarCep}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}