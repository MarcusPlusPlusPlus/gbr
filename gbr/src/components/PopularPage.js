import * as React from "react"
import {View, Text} from "react-native"

export default class PopularScreen extends React.Component {
    static navigationOptions = {header: null}

    render() {
        return(
            <View><Text>Popular Page</Text></View>
        )
    }
}
