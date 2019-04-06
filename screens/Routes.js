import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './Home'

const routes = {
  Home: {
    screen: Home
  }
}

const AppNavigator = createStackNavigator(
  routes,
  {
    initialRouteName: "Home",
    headerMode: "none",
  }
)

export default createAppContainer(AppNavigator)