import { Machine } from 'xstate';

interface TodoItemSchema {
  states: {
    incomplete: {},
    editing: {},
    completed: {},
    deleted: {}
  }
}

type TodoItemEvent =
  | { type: 'INCOMPLETE' }
  | { type: 'EDIT' }
  | { type: 'COMPLETE' }
  | { type: 'DELETE' };

interface TodoItemContext {
  completed: boolean;
}

const todoItemMachine = Machine<TodoItemContext, TodoItemSchema, TodoItemEvent>({
  id: "todoItem",
  initial: 'incomplete',
  states: {
    incomplete: {
      on: {
        EDIT: 'editing',
        COMPLETE: 'completed',
        DELETE: 'deleted'
      }
    },
    editing: {
      on: {
        INCOMPLETE: 'incomplete',
        DELETE: 'deleted'
      }
    },
    completed: {
      on: {
        DELETE: 'deleted'
      }
    },
    deleted: {
      type: 'final'
    }
  }
});

export default todoItemMachine;