import { styled } from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const FooterContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 95%;
  margin-left: 20px;
  margin-right: 20px;
  padding-bottom: 10px;
  padding-top: 20px;

  border-radius: 20px;
  flex-wrap: wrap;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const EmpresaStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  h2 {
    font-size: 1rem;
  }
  img {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 750px) {
    h2 {
      font-size: 0.75rem;
    }
    img {
      width: 25px;
      height: 25px;
    }
  }
`;

export const LinkFooterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  a {
    font-size: 1rem;
    padding: 5px;
    @media (max-width: 750px) {
      font-size: 0.75rem;
    }
  }
  a:hover {
    border-radius: 10px;
    background: #b7b7a4;
  }
`;
