import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/list.css";
import { createTodo, removeTodo, updateTodo } from "../action/actionList";
import ShowList from "./showList";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newData: this.props.newListTodo,
      showButton: true,
    };
  }
  handleChangeContent = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  handleChangeWordDay = (e) => {
    this.setState({
      workDay: e.target.value,
    });
  };
  handleSubmit = () => {
    let newContent = this.state.content;
    let newWorkDay = this.state.workDay;
    this.props.ADD_LIST(newContent, newWorkDay);
    this.setState({
      workDay: "",
      content: "",
    });
  };
  handleDelele = (e) => {
    this.props.REMOVE_LIST(e);
    this.setState({
      workDay: "",
      content: "",
    });
  };

  handleEdit = (val, key) => {
    let { content, workDay } = val;
    this.setState({
      workDay,
      content,
      idUpdate: key,
      showButton: false,
    });
  };
  handleUpdate = () => {
    let id = this.state.idUpdate;
    let newContent = this.state.content;
    let newWorkDay = this.state.workDay;
    this.props.UPDATE_LIST(id, newContent, newWorkDay);
    this.setState({
      workDay: "",
      content: "",
      showButton: true,
    });
  };
  handleDestroyUpdate = () => {
    this.setState({
      workDay: "",
      content: "",
      showButton: true,
    });
  };
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({ newData: nextProps.newListTodo });
  }
  render() {
    let button;
    if (this.state.showButton) {
      button = (
        <button
          type="submit"
          onClick={() => this.handleSubmit()}
          className="btn btn-primary"
        >
          Thêm mới
        </button>
      );
    } else {
      button = (
        <>
          <button
            type="submit"
            onClick={() => this.handleUpdate()}
            className="btn btn-primary"
          >
            Cập nhật
          </button>
          <button
            type="submit"
            onClick={() => this.handleDestroyUpdate()}
            className="btn btn-primary"
          >
            Hủy
          </button>
        </>
      );
    }

    return (
      <div>
        <div className="form-group">
          <textarea
            type="text"
            placeholder="Content"
            className="form-control"
            onChange={this.handleChangeContent}
            value={this.state.content}
            rows="5"
          />
          <input
            type="date"
            className="form-control"
            onChange={this.handleChangeWordDay}
            value={this.state.workDay}
          />
          {button}
        </div>

        <div>
          <div></div>
          <div className="todoGroup">
            <div>Nội dung</div>
            <div>Ngày làm</div>
            <div>Ngày tạo</div>
            <div>Tùy chọn</div>
          </div>
          {this.state.newData.map((val, key) => (
            <ShowList
              value={val}
              key={key}
              handleEdit={() => this.handleEdit(val, key)}
              handleDelele={() => this.handleDelele(key)}
            />
          ))}
        </div>
      </div>
    );
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    ADD_LIST: (content, workDay) => dispatch(createTodo(content, workDay)),
    UPDATE_LIST: (id, content, workDay) =>
      dispatch(updateTodo(id, content, workDay)),
    REMOVE_LIST: (id) => dispatch(removeTodo(id)),
  };
};
let mapStateToProps = (state) => {
  return { newListTodo: state.todoList };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
