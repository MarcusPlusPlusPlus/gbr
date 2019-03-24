const users = (state=[], action) => {
    switch(action.type) {
        case "ADD_USER":
            console.log("Old state ->", state)
            newState = [...state, action.user]
            console.log("New State ->", newState)
            return(newState)
        default: 
            return(state)
    }
}

export default users
