import React from 'react';

const TodoList: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ul className="c-list">
      {React.Children.map(children, (child, i) => {
        return <li key={i} className="c-list__item">{child}</li>
      })}
    </ul>
  )
}

export default TodoList;