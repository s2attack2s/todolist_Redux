const createTodo = (content, workDay, addTime) => ({
  type: "ADD_LIST",
  payload: {
    content,
    workDay,
    addTime,
  },
});
const removeTodo = (id) => ({
  type: "REMOVE_LIST",
  payload: {
    id,
  },
});

const updateTodo = (id, content, workDay, addTime) => ({
  type: "UPDATE_LIST",
  payload: {
    id,
    content,
    workDay,
    addTime,
  },
});

export { createTodo, updateTodo, removeTodo };
