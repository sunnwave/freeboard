import styled from '@emotion/styled';

export const NavbarContainer = styled.div`
  width: 100vw;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #ffd600;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  height: 100%;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  &:not(:first-of-type) {
    border-left: 1px solid #ffffff;
    padding-left: 40px;
  }
  &:not(:last-of-type) {
    margin-right: 40px;
  }

  a {
    text-decoration: none;
    text-align: center;
    color: ${props => (props.isActive ? '#514400' : '#ab9000')};
    font-weight: ${props => (props.isActive ? 700 : 500)};
    :hover {
      font-weight: bold;
      color: #514400;
    }
  }
`;
