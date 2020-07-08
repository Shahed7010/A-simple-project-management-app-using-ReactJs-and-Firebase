export const createProject = (project) =>{
    return (dispatch, getState,  { getFirestore } ) =>{
        //make async call to database
        const fireStore = getFirestore();
        fireStore.collection('projects').add({
            ...project,
            authorFirstName: 'FirstName',
            authorLastName: 'LastName',
            createdAt: new Date()
        }).then(()=>{
            dispatch({type:'CREATE_PROJECT', project});
        }).catch((err)=>{
        dispatch({type:'CREATE_PROJECT_ERROR', err});
        })
    }
};