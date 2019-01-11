const initialState = { todos: [ "Go to the Supermarket", "Learn React Native" ]};

export const types = {
    ADD: 'ADD'
}

export const actionCreators = {
    add: (item) => {
        return { type: types.ADD, payload: item }
    }
}

export const reducer = (state = initialState, action) => {
    const {todos} = state;

    switch(action.type) {
        case(types.ADD):
            return { ...state, todos: [action.payload, ...todos] }
    }

    return state;
}