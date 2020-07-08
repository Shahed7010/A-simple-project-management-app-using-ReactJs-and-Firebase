const initState = {
    projects: [
        {id:1, title: 'project title one', content: 'project content one'},
        {id:2, title: 'project title two', content: 'project content two'},
        {id:3, title: 'project title three', content: 'project content three'},
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('create project',action.project)
            return state;
        case 'CREATE_PROJECt_ERROR':
            console.log('create project err',action.err)
            return state;
        default:
            return state;
    }
}
export default projectReducer