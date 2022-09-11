import { useCallback, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import { Todo } from '../type';

type UpdateTodoData = Pick<Todo, 'id' | 'title' | 'completed'>;

export const END_POINT = 'https://jsonplaceholder.typicode.com/todos?userId=1';

export const useAllTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const updateTodos = <T extends UpdateTodoData>(updatedTodo: T) => {
    const { id, title, completed } = updatedTodo;
    const newTodos = todos;
    todos.map((todo) => {
      return todo.id === id ? { title, completed } : false;
    });

    setTodos(newTodos);
  };

  const getTodos = useCallback(() => {
    axios.get<Todo[]>(END_POINT).then((response) => {
      setTodos(response.data);
    });
  }, []);

  const addTodo = () => {
    const newTodo: Todo = {
      userId: '',
      id: Number(uuidv4()),
      title: 'NEWタスク',
      completed: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };
  return { getTodos, updateTodos, addTodo, todos };
};
