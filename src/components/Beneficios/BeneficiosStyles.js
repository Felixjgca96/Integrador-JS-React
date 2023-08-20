import styled from "styled-components";

export const BeneficiosContainerStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  width: 95%;
  gap: 10px;
  padding-bottom: 20px;
  border-radius: 20px;

  h2 {
    font-size: 4rem;
    margin-bottom: 0px;
    color: #00030a;
    @media (max-width: 900px) {
      font-size: 3rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: white;

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
    border-radius: 5px;
  }

  p {
    font-size: 1.2rem;
    @media (max-width: 900px) {
      font-size: 1rem;
    }
  }
`;
