import createState from "react-copy-write";

//status codes: 0 = not done, 1 = done but visible, 2 = hidden
export const initialState = {
  todos: [
    { id: 0, text: "This is a test", status: 0 },
    { id: 1, text: "I already did this one", status: 1 }
  ]
};

export const { Provider, Consumer, update, createMutator } = createState(
  initialState
);

// actions:
export const save = text => {
  update(state => {
    const nextId = state.todos.length;
    state.todos.push({
      id: nextId,
      text: text,
      status: 0
    });
  });
};
