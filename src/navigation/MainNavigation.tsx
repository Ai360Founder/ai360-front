import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/welcome/WelcomeScreen';
import SCREENS from '../enum/SCREENS';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.WELCOME}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={SCREENS.WELCOME} component={WelcomeScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
