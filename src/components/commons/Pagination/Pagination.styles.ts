import styled from '@emotion/styled';

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
`;

export const PaginationButton = styled.span<{ isActive?: boolean }>`
  height: 32px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: #f5f5f5;
  }
  color: ${props => (props.isActive ? 'inherit' : '#bfbfbf')};

  ${({ isActive }) => !isActive && `pointer-events: none; disable-select: true;`};
`;

export const PageNumber = styled.button<{ isActive?: boolean }>`
  width: 30px;
  height: 30px;
  margin: 0 4px;
  border: none;
  border-radius: 4px;
  background-color: ${props => (props.isActive ? '#FFD600' : 'transparent')};
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
  font-size: ${props => (props.isActive ? '16px' : '14px')};
  color: ${props => (props.isActive ? '#fff' : '#000')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: ${props => (props.isActive ? '#FFD600' : '#f5f5f5')};
  }
`;
