export const CompleteTodo = (props) => {
  const {todos, onClickBack} = props;
  return(
    <div className="comlete-area">
      <p className="title">完了したTODO</p>
      <ul>
        {todos.map((todo, index) => (
            <li key={todo}>
              <div className="list-low">
                <p className="todo-item">{todo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            </li>
        ))}
      </ul>
    </div>
  );
};