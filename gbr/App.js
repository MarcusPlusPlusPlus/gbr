import React from 'react'
import {View, Text} from "react-native"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
/**/
import AppNav from "./src/routes/AppNav"
import AppReducers from "./src/reducers"

export default class App extends React.Component {

  store = createStore(AppReducers)

  render = () => (
    <Provider store={this.store}>
      <AppNav />
    </Provider>
  )
}