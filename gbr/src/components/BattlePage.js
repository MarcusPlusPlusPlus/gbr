import * as React from "react"
import {View, Text} from "react-native"
/**/
import SelectUserForm from "./_selectUserForm"

export default class BattleScreen extends React.Component {
    static navigationOptions = {header: null}

    render() {
        return(
            <View>
                <Text>Battle Page</Text>
                <SelectUserForm />
                </View>
        )
    }
}
