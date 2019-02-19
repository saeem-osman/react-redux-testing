export default ({dispatch})=> next => action => {
    //check to see if the action
    //has a promise on it's 'payload' property
    //if it does, then send the action 
    //to the next middleware

    if(!action.payload || !action.payload.then){
        return next(action)
    }

    action.payload.then(function(response){
        const newAction = {...action, payload: response}
        dispatch(newAction)
    })

}
    
