import React from 'react'
import { Text } from "react-native"
import PropTypes from 'prop-types'

const ShowUser = ({ id, name, login, avatar, followers, repos }) => (
    <Text>{name}</Text>
)

ShowUser.PropTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    bio: PropTypes.string,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    repos: PropTypes.number.isRequired,
}

export default ShowUser
