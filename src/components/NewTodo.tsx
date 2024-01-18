import React, { useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";
const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // ?는 ref에 값이 설정되어 있지 않을수도있어서임
    // !는 null이 될수있지만 그럴수가 없을때 쓰는거
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      //throw error 해야됨 원랜
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input ref={todoTextInputRef} type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
