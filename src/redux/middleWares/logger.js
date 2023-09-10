const logger=(store)=>(next)=>(action)=>{

    const currentState=store.getState();
    console.log("Current State",currentState)
    console.log("Dispatch Action",action)
    next(action);
    console.log(store.getState())
};
export default logger;