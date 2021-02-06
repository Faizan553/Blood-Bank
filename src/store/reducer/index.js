import { post } from "../action";

const Initial ={
    name:null,
    data:[]
    
   
}

export default  (state =  Initial,action)=>{
    // console.log("action",action.data)
    switch (action.type){
        case "user":
            return({
                ...state,
                name:action.data,
                
            })   
            case "set":
                return({
                    ...state,
                    data:action.data,
                    
                })  
             
    }
    
return state;
}
  