import styled from "styled-components";

export const BeneficiosContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  width: 95%;

  padding-bottom: 20px;
  border-radius: 20px;

  h2 {
    font-size: 4rem;
    margin-bottom: 0px;
    @media (max-width: 900px) {
      font-size: 3rem;
    }
  }

  p {
    font-size: 1.2rem;
    @media (max-width: 900px) {
      font-size: 1rem;
      text-align: center;
    }
  }
`;

export const BeneficiosCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  margin-right: 20px;
  gap: 15px;
`;
export const CardStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    width: 80px;
    height: 80px;
  }

  p {
    font-size: 1.2rem;
    @media (max-width: 900px) {
      font-size: 1rem;
    }
  }
`;
