import * as React from "react"
import { Platform } from "react-native"
import { createStackNavigator, createBottomTabNavigator } from "react-navigation"
/**/
import HomePage from "../components/HomePage"
import BattlePage from "../components/BattlePage"
import PopularPage from "../components/PopularPage"

// const homeStack = createStackNavigator({
//     Home, HomePage
// })
// homeStack.navigationOptions = {
//     tabBarLabel: "Home",
//     tabBarIcon: ({focused}) => ( <TabBarIcon focused={focused} /> )
// }

const TabNav = createBottomTabNavigator({
    Home: HomePage,
    Battle: BattlePage,
    Popular: PopularPage
  });

  export default TabNav