import {NavigationContainer} from '@react-navigation/native';
import { BottomTabNavigator } from './presentation/navigators/BottomTabNavigator';

export const Main = () => {
  return (
    <NavigationContainer>
      
      <BottomTabNavigator />


    </NavigationContainer>
  );
};
