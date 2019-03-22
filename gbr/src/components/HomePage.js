import * as React from "react"
import {View, Text, Button} from "react-native"

export default class HomeScreen extends React.Component {
    static navigationOptions = {header: null}

    render() {
        return(
            <View>
                <Text>Home Page</Text>
                <Button title="Battle !" onPress={() => this.props.navigation.navigate("Battle")}></Button> 
            </View>
        )
    }
}
