import React, { Component, Fragment } from 'react'
import { StatusBar } from 'react-native'
import { AppLoading, Font } from 'expo'
import Routes from './screens/Routes'
import dogbyte from './assets/fonts/dogbyte.otf'

class App extends Component {
  state = {
    isFontLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      dogbyte
    });

    this.setState({ isFontLoaded: true })
  }

  render() {
    const { isFontLoaded } = this.state

    if (!isFontLoaded)
      return <AppLoading />

    return (
      <Fragment>
        <StatusBar barStyle="light-content" />
        <Routes />
      </Fragment>
    )
  }
}

export default App;