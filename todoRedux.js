const initialState = { todos: [
        { title: "Go to the Supermarket", msg: "Comprar Leite, Café e Banana"},
        { title: "Learn React Native", msg: "Fazer o tutorial com React Navigation, Redux e Redux Saga"}
    ]};

export const types = {
    ADD: 'ADD'
}

export const actionCreators = {
    add: (object) => {
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