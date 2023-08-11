const INCREMENT_COUNTER='INCREMENT_COUNTER'
const DECREMENT_COUNTER='DECREMENT_COUNTER'


export function increment(amount)
{
    return{
        type:INCREMENT_COUNTER,
        payload:amount
    }
}


export function decrement(amount)
{
    return{
        type:DECREMENT_COUNTER,
        payload:amount
    }
}

const initialState={
    data:42
}

// we can also destructure below object action with {type,payload}
const testReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case INCREMENT_COUNTER:
            return{
                ...state,data:state.data+action.payload
            //   we can also write as state has single property so if we dont use spread operator then it will not make any issue  data:state.data+1

            }

        case DECREMENT_COUNTER:
            return{
                ...state,data:state.data-action.payload
            }  
            
        default:
            return state    
    }




}

export default testReducer