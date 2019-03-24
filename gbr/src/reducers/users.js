const users = (state=[], action) => {
    switch(action.type) {
        case "ADD_USER":
            newUser = {...action.user}
            return([...state, newUser])
        default: 
            return(state)
    }
}

export default users
