import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.lightGray};
  padding: 30px;
  padding-left: ${(props) => (props.sidebarStatus
    ? `calc(${props.theme.elements.sidebarWidth} + 30px)`
    : `calc(${props.theme.elements.miniSidebarWidth} + 30px)`)};
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-out;
`;
export const Header = styled.header`
  background: #333;
  height: 10vh;
`;
