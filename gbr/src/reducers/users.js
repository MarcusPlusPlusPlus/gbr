const users = (state=[], action) => {
    console.log("Action type", action.type)
    switch(action.type) {
        case "ADD_USER":
            console.log("Current state", state)
            console.log("Action", action)
            return([ ...state, action.user])
        default: 
            return(state)
    }
}

export default users
