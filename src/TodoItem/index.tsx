import React from 'react';
import cn from 'classnames';

const TodoItem: React.FC<{ completed: boolean, value: string }> = ({
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