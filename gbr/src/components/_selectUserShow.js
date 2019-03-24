import * as React from "react"
import { FlatList, Text } from "react-native"
import { PropTypes } from "prop-types"
import { connect } from "react-redux"

const ShowSelectedUser = ({users}) => (

    <FlatList data={users} keyExtractor={(item, index) => index} renderItem={(user, index) => <Text key={user.id}>{user.login}</Text>} />
)

ShowSelectedUser.PropTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        bio: PropTypes.string,
        avatar: PropTypes.string.isRequired,
        followers: PropTypes.number.isRequired,
        repos: PropTypes.number.isRequired,
      }).isRequired).isRequired,
    }

const getUsers = (state) => {
  console.log("@@@@@")
  console.log(state)
  return(state.users)
}

const mapStateToProps = (state) => ({
    users: getUsers(state)
  })

const SelectUserShow = connect(
    mapStateToProps
)(ShowSelectedUser)

export default SelectUserShow
