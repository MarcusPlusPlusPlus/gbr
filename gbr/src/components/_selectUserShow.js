import * as React from "react"
import { FlatList, Text } from "react-native"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import ShowUser from "./ShowUser"


const ShowSelectedUser = ({users}) => (
    <FlatList data={users} keyExtractor={(item, index) => index.toString()} renderItem={(user) => <ShowUser key={user.id} {...user} />} />
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

const mapStateToProps = (state) => ({
    users: state.users
  })

const SelectUserShow = connect(
    mapStateToProps
)(ShowSelectedUser)

export default SelectUserShow
