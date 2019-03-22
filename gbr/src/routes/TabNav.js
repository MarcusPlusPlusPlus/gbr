import * as React from "react"
import { Platform, Text } from "react-native"
import { createStackNavigator, createBottomTabNavigator } from "react-navigation"
/**/
import HomePage from "../components/HomePage"
import BattlePage from "../components/BattlePage"
import PopularPage from "../components/PopularPage"


const TabNav = createBottomTabNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: { tabBarIcon: ({}) => (<Text>Home</Text>) }
    },
    Battle: {
        screen: BattlePage,
        navigationOptions: { tabBarIcon: ({}) => (<Text>Battle</Text>) }
    },
    Popular: {
        screen: PopularPage,
        navigationOptions: { tabBarIcon: ({}) => (<Text>Popular</Text>) }
    },
  });

  export default TabNav