import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // Поле `reducers` позволяет нам разметить все необходимые редьюсеры и сгенерировать необходимые связанные экшены
  reducers: {
    addUser: (state, action) => {

      // Redux Toolkit позволяет нам писать логику мутации состояния в reducers.
      // Под капотом, он не мутирует состояние напрямую, а использует библиотеку Immer, которая
      // обнаруживает изменения в «черновом состоянии» и создает новое неизменное состояние на основе этих изменений.

      state = {
        content: action.payload,
        email,
        token,
      };
    },

    // toggleCompleteness: (state, { payload }) => {
    //   const { id } = payload;
    //   const targetTodo = state.byIds[id];

    //   targetTodo.completed = !targetTodo.completed;
    // },

    // removeTodo: (state, action) => {
    //   const targetTodo = action.payload.id;

    //   state.allIds = state.allIds.filter(item => item !== targetTodo)
    // },

    // filterCompleted: (state, todos) => {
    //   const targetTodos = todos.payload.filter(item => item = item.completed);
    //   const targetIds = targetTodos.map(item => item = item.id);

    //   state.allIds = targetIds;
    // },

    // filterNotCompleted: (state, todos) => {
    //   const targetTodos = todos.payload.filter(item => item = item.completed === false);
    //   const targetIds = targetTodos.map(item => item = item.id);

    //   state.allIds = targetIds;
    // },
  },
});


export const { addUser} = userSlice.actions;

export default userSlice.reducer;