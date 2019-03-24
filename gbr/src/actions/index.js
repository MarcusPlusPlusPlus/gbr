let userId = 0

export const addUser = user => ({
    type: "ADD_USER",
    id: userId++,
    user
})
