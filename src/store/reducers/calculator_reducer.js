function Calculator( state={count:1}, action){


switch(action.type){

    case 'MULTIPLY_NUM':
        return{
        ...state,
        count:state.count*10}

        default:  return state
}


}

export  default Calculator;