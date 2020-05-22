import React from 'react';

import Button from './Button';
import TodoList from './TodoList';
import TodoItem from './TodoItem';

function App() {
  return (
    <main>
      <TodoList>
        <TodoItem completed={false} value="Mow the lawn" />
        <TodoItem completed={true} value="Clean the office" />
        <TodoItem completed={false} value="Call mom" />
      </TodoList>
      <Button>Add todo</Button>
    </main>
  )
}

export default App;
