import React, { useContext } from "react";
import TodoItems from "./TodoItems";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        /* bind를 쓰면 실행할 함수를 미리 정의할수있음 */
        <TodoItems
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          text={item.text}
          key={item.id}
        />
      ))}
    </ul>
  );
};

export default Todos;
