import { connect } from "react-redux";
import { createDetail } from "../action/actionDetail";
import { createTodo, removeTodo, updateTodo } from "../action/actionList";
import List from "../view/list";

const mapDispatchToProps = (dispatch) => {
  return {
    addList(payload) {
      dispatch(createTodo(payload));
    },
    removeList(id) {
      dispatch(removeTodo(id));
    },
    updateList(payload) {
      dispatch(updateTodo(payload));
    },
    addListDetails(payload) {
      dispatch(createDetail(payload));
    },
  };
};
export default connect(null, mapDispatchToProps)(List);
