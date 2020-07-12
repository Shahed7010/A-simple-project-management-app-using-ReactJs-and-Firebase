export const createProject = (project) =>{
    return (dispatch, getState,  { getFirestore } ) =>{
        //make async call to database
        const fireStore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        fireStore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(()=>{
            dispatch({type:'CREATE_PROJECT', project});
        }).catch((err)=>{
        dispatch({type:'CREATE_PROJECT_ERROR', err});
        })
    }
};
export const deleteProject = (projectId) =>{
    return (dispatch, getState,  { getFirestore } ) =>{
        //make async call to database
        const fireStore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        fireStore.collection('projects').doc(projectId).delete().then(()=>{
            dispatch({type:'DELETE_PROJECT_SUCCESS'});
        }).catch((err)=>{
        dispatch({type:'DELETE_PROJECT_ERROR', err});
        })
    }
};

