import styled from "styled-components";

export const HeaderContainerStyled = styled.header`
  position: fixed;
  width: 100%;
  z-index: 2;
  background-color: #00030a;
`;

export const NavbarContainerStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 1rem;
`;

export const LogoContainerStyled = styled.div`
  margin-left: 40px;
  img {
    width: 93px;
    border-radius: 2px;
  }
  img:hover {
    background: #74787e;
    color: black;
    border-radius: 2px;
  }
  @media (max-width: 760px) {
    margin-left: 20px;
  }
`;
export const MenuStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MenuContainer = styled.div`
  display: none;

  @media (max-width: 980px) {
    display: flex;
    font-size: 2rem;
    cursor: pointer;
    margin-right: 40px;

    &:hover {
      transform: scale(0.9);
      transition: all 0.7s;
    }

    img {
      width: 50px;
      border-radius: 15px;
      padding: 3px;
    }

    img:hover {
      background: #74787e;
      color: black;
      border-bottom: 1px solid #ffffff;
      border-radius: 5px;
    }
  }
  @media (max-width: 760px) {
    margin-right: 20px;
  }
`;
export const NavListPrincipal = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0;

  @media (max-width: 980px) {
    display: none;
    border: 1px solid #ffffff;
    border-radius: 1rem;

    &.open {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 96px;
      right: 2px;
      background-color: #00030a;
      width: 200px;
      z-index: 1;
      align-items: center;
      gap: 10px;
      padding: 1rem;
      opacity: 90%;
    }
  }
`;

export const IconoContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-right: 40px;

  img {
    width: 50px;
    border-radius: 15px;
    cursor: pointer;
    padding: 3px;
  }

  img:hover {
    background: #74787e;
    color: black;
    border-bottom: 1px solid #ffffff;
    border-radius: 5px;
  }

  @media (max-width: 980px) {
    display: none;
    margin-right: 20px;
  }
`;

export const LinkNav = styled.a`
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  border-radius: 5px;

  &:hover {
    background: #74787e;
    border-bottom: 1px solid #ffffff;
  }
  @media (max-width: 980px) {
    font-size: 15px;
  }
`;
export const CartNavStyled = styled.div`
  position: relative;
  cursor: pointer;

  span {
    position: absolute;
    top: 0;

    height: 20px;
    width: 20px;
    text-align: center;

    border-radius: 1rem;
    border: 1px solid white;
    color: white;
    background-color: red;
    font-size: 0.9rem;
  }
`;
export const LinkContainerStyled = styled.div`
  font-size: 1.2rem;
  color: ${(props) => (props.home ? "#ff9d01" : "#ff9300")};
`;
