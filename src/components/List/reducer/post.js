import listTodo from "../../../db/todoList";
import { combineReducers } from "redux";

function ReducerTodo(state = listTodo, action) {
  switch (action.type) {
    case "ADD_LIST":
      state = [action.payload, ...state];
      return state;
    case "REMOVE_LIST":
      state.splice(action.payload.id, 1);
      return state;
    case "UPDATE_LIST":
      let { id, content, workDay, addTime } = action.payload;
      let newTodo = { content, workDay, addTime };
      state.splice(id, 1, newTodo);
      return state;
    default:
      return state;
  }
}
const reduxApp = combineReducers({
  todoList: ReducerTodo,
});
export default reduxApp;
