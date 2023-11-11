import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState(["Todo1", "Todo2"]);
  // todos = {todos}とすることで、Propsとして値を受け渡すことができる
  return (
    <div>
      <TodoList todos={todos} />  
      <input type="text" />
      <button>タスクを追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク:0</div>
    </div>
  );
}

export default App;
