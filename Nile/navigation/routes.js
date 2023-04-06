import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen.js';
import ArticleScreen from '../screens/ArticleScreen';
import ProductsScreen from '../screens/ProductsScreen';

const Stack = createNativeStackNavigator();

const Routes = ()=> {
  return (
    <NavigationContainer>
        <StatusBar style="auto"/>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home"
                          component={HomeScreen}
                          options={{ title: 'Nile'}}
            />
            <Stack.Screen name="Article"
                          component={ArticleScreen}
                          options={{ title: 'Product'}}
            />
                        <Stack.Screen name="Products"
                          component={ProductsScreen}
                          options={{ title: 'Products'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
