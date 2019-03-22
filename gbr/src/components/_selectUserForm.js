import * as React from "react"
import {View, Button, TextInput, Text} from "react-native"
import PropTypes from 'prop-types'


class SelectUserForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {user: ""}
    }

    handleSubmit = () => {
        if(this.state.user.length<1) { return; }
        const [params, clientId, secret] = ["users/", "207775cb3b4fb43a80f0", "aabd7fced13f0e32abf9b7e22b632097fc2e9656"]
        const URL = `https://api.github.com/${params}${this.state.user}?client_id=${clientId}&client_secret=${secret}`
        
        fetch(URL, { method: "GET", headers: {Accept: "application/vnd.github.v3+json"} })
            .then( data => {
                if(data.status!=200) { alert("No users found !"); return; }
                data.json().then( user => console.log(user))
            })
            .catch(error => console.log("error"))
    }

    render() {
        return(
            <View>
                <TextInput onChangeText={user => this.setState({user})} value={this.state.user} placeholder={"Type a github username here"} />
                <Button disabled={!this.state.user} onPress={() => this.handleSubmit()} title={"Submit"}></Button>
            </View>
        )
    }
}

export default SelectUserForm
