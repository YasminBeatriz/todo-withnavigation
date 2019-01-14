const initialState = { todos: [
        { id: 1, title: "Go to the Supermarket", msg: "Comprar Leite, Café e Banana"},
        { id: 2, title: "Learn React Native", msg: "Fazer o tutorial com React Navigation, Redux e Redux Saga"}
    ]};

let previousId = initialState.todos.length

export const types = {
    ADD: 'ADD'
}

export const actionCreators = {
    add: (object) => {
        object.id = previousId + 1
        previousId = previousId + 1
        return { type: types.ADD, payload: object }
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