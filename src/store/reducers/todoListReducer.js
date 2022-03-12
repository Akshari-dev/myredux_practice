
const list = [
    'practise javascript',
    'prepare interview questions',
    'discuss react topics',
    'revision on all javascript concepts.'
]


export default function TodoListReducer(state = list, action) {
    switch (action.type) {
        case 'ADD_TASK':
            state.push(action.value)
            return {
                ...state
            }
        case 'REMOVE_TASK':
            state.pop()
            return {
                ...state,
                
            }
        default: return state
    }

}