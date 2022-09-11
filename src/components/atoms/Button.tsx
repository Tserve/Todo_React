import { FC, memo, ReactNode } from 'react';
import styled from 'styled-components';
import { PRIMARY_COLOR } from '../const';

type Props = {
  onClick: () => void;
  isCompleted?: boolean;
  children: ReactNode;
  center?: boolean;
};
export const Button: FC<Props> = memo((props) => {
  const { onClick, isCompleted, children, center } = props;

  return (
    <ReversibleButton onClick={onClick} isCompleted={isCompleted} center={center}>
      {children}
    </ReversibleButton>
  );
});

const ReversibleButton = styled.button<Props>`
  flex-shrink: 0;
  padding: 6px 16px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-size: 0.875rem;
  min-width: 64px;
  color: #fff;
  box-shadow: 0 2px 1px #888;
  display: flex;
  justify-content: center;
  margin: ${({ center }) => (center ? '0 auto' : false)};

  background-color: ${({ isCompleted }) => (isCompleted ? '#888' : PRIMARY_COLOR)};
`;
