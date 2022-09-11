import { ChangeEvent, VFC, memo, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Todo } from '../../type';
import { Button } from '../atoms/Button';
import { Input } from '../atoms/Input';

type Props = {
  todo: Todo;
};

export const SearchInput: VFC<Props> = memo((props) => {
  const { todo } = props;
  const [value, setValue] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  const changeValue = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  const toggleIsCompleted = useCallback(() => {
    setIsCompleted(!isCompleted);
  }, [isCompleted]);

  useEffect(() => {
    setValue(todo.title);
    setIsCompleted(todo.completed);
  }, [todo]);

  return (
    <>
      <StyledSearchInput>
        <Input value={value} onChange={changeValue} isCompleted={isCompleted} />
        <Button onClick={toggleIsCompleted} isCompleted={isCompleted}>
          {isCompleted ? '戻す' : '完了'}
        </Button>
      </StyledSearchInput>
    </>
  );
});

const StyledSearchInput = styled.div`
  padding: 12px;
  display: flex;
  justify-content: center;
`;
