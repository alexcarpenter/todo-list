import React from 'react';
import cn from 'classnames';

type TodoItemProps = {
  completed: boolean,
  value: string
}

const TodoItem: React.FC<TodoItemProps> = ({
  completed = false,
  value
}) => {
  return (
    <>
      <input
        type="checkbox"
        checked={completed}
      />
      <input
        type="text"
        className={cn('c-input')}
        value={value}
        onChange={(e) => console.log(e.target.value)}
      />
      <button
        className={cn('c-button')}
      >Delete</button>
    </>
  )
}

export default TodoItem;