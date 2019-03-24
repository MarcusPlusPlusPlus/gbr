import * as React from "react"
import {View, Button, TextInput, Text} from "react-native"
import { connect } from "react-redux"
import { addUser } from "../actions"

let SelectUserForm = ({dispatch})  => {    
    
    let user = ""
    const handleChange = selectedUser => user = selectedUser
    const handleSubmit = () => {
        if(user.length<1) { return; }
        
        const [params, clientId, secret] = ["users/", "207775cb3b4fb43a80f0", "aabd7fced13f0e32abf9b7e22b632097fc2e9656"]
        const URL = `https://api.github.com/${params}${user}?client_id=${clientId}&client_secret=${secret}`        
        
        fetch(URL, { method: "GET", headers: {Accept: "application/vnd.github.v3+json"} })
            .then( data => {
                if(data.status!=200) { alert("No users found !"); return; }
                data.json().then(({login, name, avatar_url, bio, public_repos, followers}) => {
                    selectedUser = {name, login, bio, followers, avatar: avatar_url, repos: public_repos}
                    dispatch(addUser(selectedUser))
                })
            })
            .catch(error => console.log(error))
    }
        
    return(
        <View>
            <TextInput onChangeText={user => handleChange(user)} placeholder={"Type a github username here"} />
            <Button onPress={() => handleSubmit()} title={"Submit"}></Button>
        </View>
    )
}

SelectUserForm = connect()(SelectUserForm)
export default SelectUserForm
