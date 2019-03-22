import { createAppContainer, createSwitchNavigator } from 'react-navigation';
/**/
import TabNav from "./TabNav"

const AppNav = createAppContainer(createSwitchNavigator({
    Main: TabNav
}))

export default AppNav