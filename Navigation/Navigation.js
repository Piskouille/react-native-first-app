import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Main from '../Vues/Main'

const SearchStackNavigator = createStackNavigator({
    Main: { // nom de la vue
      screen: Main,
      navigationOptions: {
        title: 'Main'
      }
    }
  })

export default createAppContainer(SearchStackNavigator)