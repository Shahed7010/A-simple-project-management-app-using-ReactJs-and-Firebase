const initState = {
    loginError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return {...state, loginError:null};
        case 'LOGIN_ERROR':
            console.log('login failed')
            return {...state, loginError: 'login failed'}

        default:
            return state;
    }
}
export default authReducer