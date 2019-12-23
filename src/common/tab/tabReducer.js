const INITIAL_STATE = { selected: '' }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TAB_SELECTED':
            return { ...state, selected: action }
        default:
            return state
    }
}