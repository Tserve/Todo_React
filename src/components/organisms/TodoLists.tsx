import { useEffect, FC } from 'react';
import { useAllTodos } from '../../hooks/useAllTodos';
import { Button } from '../atoms/Button';
import { SearchInput } from '../molecules/SearchInput';

export const TodoLists: FC = () => {
  const { todos, getTodos, addTodo } = useAllTodos();

  useEffect(() => {
    (async () => {
      getTodos();
    })();
  }, [getTodos]);

  return (
    <>
      {todos.length ? todos.map((todo) => <SearchInput key={todo.id} todo={todo} />) : <div>loading...</div>}
      <Button onClick={addTodo} center={true}>
        タスクを追加
      </Button>
    </>
  );
};
