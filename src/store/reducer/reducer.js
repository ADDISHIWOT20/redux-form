  
export const fname=(state ="ADDIS",action)=>{
    switch(action.type){
        case "FNAME":
            state=action.payload
            return action.payload
         
            default:
             return state    
    }
};

export const lname=(state = "HABTIE",action)=>{
    switch(action.type){
        case "LNAME":
            state=action.payload
            return action.payload
        default:
            return state
    }
};
export const profession=(state = "student",action)=>{
    switch(action.type){
        case "PROFESION":
            state=action.payload
            return action.payload
        default:
            return state
    }
};
export const gender=(state = "Male",action)=>{
    switch(action.type){
        case "GENDER":
            state=action.payload
            return action.payload
        default:
            return state
    }
};
export const age=(state = "24",action)=>{
    switch(action.type){
        case "AGE":
            state=action.payload
            return action.payload
        default:
            return state
    }
}
;
//name:"John"

//to display the value ===> useSelector
//t make an action    =====> useDispatch*/