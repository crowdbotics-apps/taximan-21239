import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps139515Navigator from '../features/Maps139515/navigator';
import Settings139493Navigator from '../features/Settings139493/navigator';
import Settings139478Navigator from '../features/Settings139478/navigator';
import NotificationList139477Navigator from '../features/NotificationList139477/navigator';
import Maps139476Navigator from '../features/Maps139476/navigator';
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
Maps139515: { screen: Maps139515Navigator },
Settings139493: { screen: Settings139493Navigator },
Settings139478: { screen: Settings139478Navigator },
NotificationList139477: { screen: NotificationList139477Navigator },
Maps139476: { screen: Maps139476Navigator },
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
