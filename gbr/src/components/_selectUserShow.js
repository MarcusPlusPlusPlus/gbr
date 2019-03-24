import * as React from "react"
import { FlatList, Text } from "react-native"
import { PropTypes } from "prop-types"
import { connect } from "react-redux"

const mapStateToProps = (state) => ({
    users: state.users
  })

const _selectUserShow = connect(
    mapStateToProps
)(ShowSelectedUser)


const ShowSelectedUser = ({users}) => (
    <FlatList data={users} renderItem={(user) => <Text>{user.login}</Text>} />
)

ShowSelectedUser.PropTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        bio: PropTypes.string,
        avatar: PropTypes.string.isRequired,
        followers: PropTypes.number.isRequired,
        repos: PropTypes.number.isRequired,
      }).isRequired).isRequired,
    }

export default _selectUserShow