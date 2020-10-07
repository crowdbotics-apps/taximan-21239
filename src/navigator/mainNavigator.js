import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile132485Navigator from '../features/UserProfile132485/navigator';
import Maps132466Navigator from '../features/Maps132466/navigator';
import Settings132444Navigator from '../features/Settings132444/navigator';
import Settings132429Navigator from '../features/Settings132429/navigator';
import NotificationList132428Navigator from '../features/NotificationList132428/navigator';
import Maps132427Navigator from '../features/Maps132427/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile132485: { screen: UserProfile132485Navigator },
Maps132466: { screen: Maps132466Navigator },
Settings132444: { screen: Settings132444Navigator },
Settings132429: { screen: Settings132429Navigator },
NotificationList132428: { screen: NotificationList132428Navigator },
Maps132427: { screen: Maps132427Navigator },

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
