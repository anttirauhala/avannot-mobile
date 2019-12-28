import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from './screens/HomeScreen';
import ListingScreen from './screens/ListingScreen';

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Listing: {
    screen: ListingScreen,
  },
});

export default createAppContainer(AppNavigator);
