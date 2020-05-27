import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: ${(props) => props.theme.elements.sidebarWidth};
  background: ${(props) => props.theme.colors.secondary};
  padding: 30px;
  transition: 0.3s ease-out;
  &::before {
    content: "";
    position: absolute;
    background-color: ${(props) => props.theme.colors.lightGray};
    top: 0;
    right: -25px;
    height: 95px;
    width: 25px;
    border-top-left-radius: 50px;
    box-shadow: 0 -50px 0 0 ${(props) => props.theme.colors.secondary};
    transition: 0.5s ease-out;
  }  
  &::after {
    content: "";
    position: absolute;
    background-color: ${(props) => props.theme.colors.lightGray};
    bottom: 0;
    right: -25px;
    height: 95px;
    width: 25px;
    border-top-left-radius: 50px;
    transform: rotateX(175deg);
    box-shadow: 0 -50px 0 0 ${(props) => props.theme.colors.secondary};
    transition: 0.5s ease-out;
  }
  
  ${(props) => !props.open && `
    width: ${props.theme.elements.miniSidebarWidth};
    padding: 30px 5px;
    &::before {
      right: -20px;
      width: 20px;
    }    
    &::after {
      right: -20px;
      width: 20px;
    }
  `}
  
  .nav-list {
    display: flex;
    flex-direction: column;
    margin-bottom: 35px;
    &-item {
    list-style-position:inside;
      a {
        display: flex;
        align-items: center;
        font-size: 13px;
        font-weight: 500;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 42px;
        border-radius: 5px;
        color: ${(props) => props.theme.colors.lightGray};
        padding: 0 15px;
        transition: 0.3s;
        &:hover {
          background: rgba(0, 0, 0, 0.2)
        }
      }
    }
    .nav-title {
      text-transform: uppercase;
      font-size: 11px;
      font-weight: 600;
      color: ${(props) => props.theme.colors.gray};
      margin-bottom: 10px;
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export const Navigation = styled.aside`
  height: 100%;
`;
