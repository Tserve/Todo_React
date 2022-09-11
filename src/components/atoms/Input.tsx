import { ChangeEvent, FC, memo } from 'react';
import styled from 'styled-components';

type Props = {
  value: string;
  isCompleted: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input: FC<Props> = memo((props) => {
  const { value, onChange, isCompleted } = props;
  return (
    <StyledInputContainer isCompleted={isCompleted}>
      <StyledInput value={value} onChange={onChange} isCompleted={isCompleted} disabled={isCompleted} type="text" />
    </StyledInputContainer>
  );
});

const StyledInputContainer = styled.div<{ isCompleted: boolean }>`
  position: relative;
  margin-right: 12px;
  width: 200px;
  transition: height 0.2s;
  :after {
    position: absolute;
    width: 100%;
    height: 1px;
    content: '';
    left: 0;
    bottom: 0;
    background-color: #000;
  }
  :hover {
    :after {
      ${({ isCompleted }) => !isCompleted && `height: 2px;`}
    }
  }
`;

const StyledInput = styled.input<Props>`
  padding: 0 8px;
  width: 100%;
  height: 100%;

  ${({ isCompleted }) =>
    isCompleted &&
    `
      text-decoration: line-through;
      color: #ddd;
    `};
`;
