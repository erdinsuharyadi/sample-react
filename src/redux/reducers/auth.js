const initialState = {
  data: [],
  isLoading: true
}

const auth = (state= initialState, action) => {
  console.log('actionReducers', action);
  
  switch(action.type) {
    case 'USER_LOGIN_PENDING':
      return {
        ...state,
        isLoading: true,
      }
    case 'USER_LOGIN_REJECTED':
      return {
        ...state,
        isloading: false
      }  
    case 'USER_LOGIN_FULFILED':
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }  

    default:
      return state  
  } 
}

export default auth