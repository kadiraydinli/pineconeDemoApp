import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screens from "./src/screens";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Screens.HomeScreen} />
        <Stack.Screen name="Avatar" component={Screens.AvatarScreen} />
        <Stack.Screen name="Badge" component={Screens.BadgeScreen} />
        <Stack.Screen name="Button" component={Screens.ButtonScreen} />
        <Stack.Screen name="Card" component={Screens.CardScreen} />
        <Stack.Screen name="CheckBox" component={Screens.CheckBoxScreen} />
        <Stack.Screen name="Divider" component={Screens.DividerScreen} />
        <Stack.Screen name="Fab" component={Screens.FabScreen} />
        <Stack.Screen name="Header" component={Screens.HeaderScreen} />
        <Stack.Screen name="Icon" component={Screens.IconScreen} />
        <Stack.Screen name="IconButton" component={Screens.IconButtonScreen} />
        <Stack.Screen name="Input" component={Screens.InputScreen} />
        <Stack.Screen name="ListItem" component={Screens.ListItemScreen} />
        <Stack.Screen name="Modal" component={Screens.ModalScreen} />
        <Stack.Screen name="ProgressBar" component={Screens.ProgressBarScreen} />
        <Stack.Screen name="RadioButton" component={Screens.RadioButtonScreen} />
        <Stack.Screen name="SnackBar" component={Screens.SnackBarScreen} />
        <Stack.Screen name="Text" component={Screens.TextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
