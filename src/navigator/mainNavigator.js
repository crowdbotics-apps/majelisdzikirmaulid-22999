import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile3178927Navigator from '../features/UserProfile3178927/navigator';
import Camera5178925Navigator from '../features/Camera5178925/navigator';
import ArticleList7178923Navigator from '../features/ArticleList7178923/navigator';
import SignIn41178921Navigator from '../features/SignIn41178921/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile3178927: { screen: UserProfile3178927Navigator },
Camera5178925: { screen: Camera5178925Navigator },
ArticleList7178923: { screen: ArticleList7178923Navigator },
SignIn41178921: { screen: SignIn41178921Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
