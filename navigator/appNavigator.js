import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Input_Screen from '../screen/Input_Screen';
import List_Screen from '../screen/List_Screen';

const AppNavigator = createStackNavigator(
  {
    List: {
      screen: List_Screen,
      navigationOptions: {
        title: 'All Items',
        headerShown: false,
      },
    },
    ItemInput: {
      screen: Input_Screen,
      navigationOptions: {
        title: 'Item Input',
        headerShown: false, 
      },
    },
  },
  {
    initialRouteName: 'List',
  }
);

export default createAppContainer(AppNavigator);
